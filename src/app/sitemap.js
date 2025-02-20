import axios from "axios";

export default async function sitemap() {
  const dataForUrl = [
    { name: "Dairy Technology", value: 1, category: 24 },
    { name: "Sugar Technology", value: 2, category: 25 },
    { name: "Baking Technology", value: 3, category: 27 },
    { name: "Beverage Technology", value: 4, category: 26 },
    { name: "Fat &amp; Oil Technology", value: 5, category: 29 },
    { name: "Cereal Technology", value: 6, category: 30 },
    { name: "Meat Technology", value: 7, category: 28 },
    { name: "Food Packaging", value: 8, category: 38 },
    { name: "Food Chemistry", value: 1, category: 31 },
    { name: "Food Microbiology", value: 2, category: 32 },
    { name: "Food Biotechnology", value: 3, category: 33 },
    {
      name: "Food Processing &amp; Preservation",
      value: 1,
      category: 34,
    },
    {
      name: "Fruits &amp; Vegetables Porcessing",
      value: 2,
      category: 37,
    },
    {
      name: "Poultry &amp; Egg Processing",
      value: 3,
      category: 36,
    },
    { name: "Seafood Processing", value: 4, category: 35 },
    {
      name: "Food Safety &amp; Quality Mangement",
      value: 1,
      category: 39,
    },
    {
      name: "Food Law &amp; Regulation",
      value: 2,
      category: 42,
    },
    {
      name: "Food Analysis &amp; Instrumentation",
      value: 3,
      category: 41,
    },
    { name: "Food Waste Mangement", value: 4, category: 40 },
    { name: "Food Guide", value: 1, category: 43 },
    { name: "Food Tips", value: 2, category: 44 },
    { name: "Food Recipes", value: 3, category: 46 },
    { name: "Food News", value: 4, category: 45 },
  ];

  const BASE_URL = "https://www.foodtechnologylabs.com";

  const fetchBlogLinks = async () => {
    let singleBlogLinks = [];

    const allBlogsLinks = dataForUrl.map(async (item) => {
      try {
        const res = await axios.get(
          `https://blog.foodtechnologylabs.com/wp-json/wp/v2/posts?categories=${item.category}`
        );

        if (res.data.length) {
          res.data.forEach((blog) => {
            singleBlogLinks.push({
              url: `${BASE_URL}/${blog.slug}`,
              lastModified: new Date(blog.modified).toISOString(),
              changeFrequency: "weekly",
              priority: 1,
            });
          });
        }

        return {
          url: `${BASE_URL}/${item.name
            .toLowerCase()
            .replace(/\s+/g, "-")}?category=${encodeURIComponent(
            item.category
          )}`,
          lastModified: new Date().toISOString(),
          changeFrequency: "weekly",
          priority: 1,
        };
      } catch (error) {
        console.error("Error fetching blog links: ", error);
        return null;
      }
    });

    const resolvedBlogLinks = await Promise.all(allBlogsLinks);
    const allLinks = [...resolvedBlogLinks.filter(Boolean), ...singleBlogLinks];

    return allLinks;
  };

  const allLinks = await fetchBlogLinks();

  const staticPages = [
    "/",
    "/contact-us",
    "/about-us",
    "/disclaimer",
    "/privacy-policy",
    "/cookie-policy",
    "/terms-and-conditions",
    "/write-for-us",
    "/terms-and-services",
    "/food-services",
    "/tools",
    "/blog",
  ].map((path) => ({
    url: BASE_URL + path,
    changeFrequency: "monthly",
    priority: 0.6,
    lastModified: new Date().toISOString(),
  }));

  allLinks.push(...staticPages);

  return allLinks;
}
