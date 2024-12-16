const { SitemapStream, streamToPromise } = require("sitemap");
const { Readable } = require("stream");
const fs = require("fs");
const { default: axios } = require("axios");
const dataForUrl = [
  { name: "Dairy Technology", value: 1, category: 24 },
  { name: "Sugar Technology", value: 2, category: 25 },
  { name: "Baking Technology", value: 3, category: 27 },
  { name: "Beverage Technology", value: 4, category: 26 },
  { name: "Fat & Oil Technology", value: 5, category: 29 },
  { name: "Cereal Technology", value: 6, category: 30 },
  { name: "Meat Technology", value: 7, category: 28 },
  { name: "Food Packaging", value: 8, category: 38 },
  { name: "Food Chemistry", value: 1, category: 31 },
  { name: "Food Microbiology", value: 2, category: 32 },
  { name: "Food Biotechnology", value: 3, category: 33 },
  {
    name: "Food Processing & Preservation",
    value: 1,
    category: 34,
  },
  {
    name: "Fruits & Vegetables Porcessing",
    value: 2,
    category: 37,
  },
  {
    name: "Poultry & Egg Processing",
    value: 3,
    category: 36,
  },
  { name: "Seafood Processing", value: 4, category: 35 },
  {
    name: "Food Safety & Quality Mangement",
    value: 1,
    category: 39,
  },
  {
    name: "Food Law & Regulation",
    value: 2,
    category: 42,
  },
  {
    name: "Food Analysis & Instrumentation",
    value: 3,
    category: 41,
  },
  { name: "Food Waste Mangement", value: 4, category: 40 },
  { name: "Food Guide", value: 1, category: 43 },
  { name: "Food Tips", value: 2, category: 44 },
  { name: "Food Recipes", value: 3, category: 46 },
  { name: "Food News", value: 4, category: 45 },
];
const singleBlogLinks = [];
const fetchBlogLinks = async () => {
  let allBlogsLinks = dataForUrl.map((item) => {
    return axios
      .get(
        `https://blog.foodtechnologylabs.com/wp-json/wp/v2/posts?categories=${item.category}`
      )
      .then((res) => {
        if (res.data.length) {
          res.data.forEach((blog) => {
            singleBlogLinks.push({
              url: `/${blog.slug}`,
              changefreq: "weekly",
              priority: 1,
            });
          });
        }
        // Also return the blog category link
        return {
          url: `/${item.name.toLowerCase().split(" ").join("-")}?category=${
            item.category
          }`,
          changefreq: "weekly",
          priority: 1,
        };
      })
      .catch((error) => {
        console.error("Error fetching blog links: ", error);
        return null;
      });
  });
  const resolvedBlogLinks = await Promise.all(allBlogsLinks);
  const allLinks = [...resolvedBlogLinks.filter(Boolean), ...singleBlogLinks];
  return allLinks;
};
fetchBlogLinks().then((allLinks) => {
  allLinks.push({ url: "/", changefreq: "monthly", priority: 0.6 });
  allLinks.push({ url: "/contact-us", changefreq: "monthly", priority: 0.6 });
  allLinks.push({ url: "/about-us", changefreq: "monthly", priority: 0.6 });
  allLinks.push({ url: "/disclaimer", changefreq: "monthly", priority: 0.6 });
  allLinks.push({
    url: "/privacy-policy",
    changefreq: "monthly",
    priority: 0.6,
  });
  allLinks.push({
    url: "/cookie-policy",
    changefreq: "monthly",
    priority: 0.6,
  });
  allLinks.push({
    url: "/terms-and-conditions",
    changefreq: "monthly",
    priority: 0.6,
  });
  allLinks.push({ url: "/write-for-us", changefreq: "monthly", priority: 0.6 });
  allLinks.push({
    url: "/terms-and-services",
    changefreq: "monthly",
    priority: 0.6,
  });
  allLinks.push({
    url: "/services",
    changefreq: "monthly",
    priority: 0.6,
  });
  allLinks.push({ url: "/blog", changefreq: "weekly", priority: 1 });
  const stream = new SitemapStream({
    hostname: "https://www.foodtechnologylabs.com/",
  });
  streamToPromise(Readable.from(allLinks).pipe(stream)).then((data) => {
    fs.writeFileSync("./public/sitemap.xml", data.toString());
    console.log("Sitemap generated!");
  });
});
