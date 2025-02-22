import { ArrowRightAlt } from "@mui/icons-material";
import {
  CardActions,
  CardContent,
  CardMedia,
  Typography,
  Button,
  Card,
  Box,
} from "@mui/material";
import axios from "axios";
import Link from "next/link";
import "./singleBlog.css";
import * as cheerio from "cheerio";
const postsPerPage = 10;

export async function generateMetadata({ searchParams, params }) {
  let { category } = (await searchParams) || {};
  let { slug } = (await params) || {};

  if (slug && !category) {
    const response = await axios.get(
      `https://blog.foodtechnologylabs.com/wp-json/wp/v2/posts?slug=${slug}&_embed`
    );
    const title = response.data[0]?.title.rendered || "Blog Post";
    const description = response.data[0]?.yoast_head_json?.description
      ? response.data[0]?.yoast_head_json?.description
      : "Read our latest blog post on Food Technology Labs.";
    const metaImage =
      response.data[0]?.yoast_head_json?.og_image &&
      response.data[0]?.yoast_head_json?.og_image[0]
        ? response.data[0]?.yoast_head_json?.og_image[0].url
        : null;
    return {
      title,
      description,
      metaImage,
      robots: "index, follow",
      alternates: {
        canonical:
          "https://www.foodtechnologylabs.com/" + response.data[0].slug,
      },
    };
  }

  if (category) {
    const categoryResponse = await axios.get(
      `https://blog.foodtechnologylabs.com/wp-json/wp/v2/categories/${category}`
    );
    const categoryName = categoryResponse.data.name || "Blog Category";
    return {
      title: `${categoryName}`,
      description: `Explore blog posts under the ${categoryName} category.`,
      robots: "index, follow",
    };
  }

  return {
    title: "Blog - Food Technology Labs",
    description: "Read our latest articles on Food Technology Labs.",
    robots: "index, follow",
  };
}

const SingleBlog = async ({ searchParams, params }) => {
  let { category, page } = await searchParams;
  let { slug } = await params;
  let url = "";
  let styles;
  if (!page) page = 1;
  if (!category) {
    category = null;
    url = `https://blog.foodtechnologylabs.com/wp-json/wp/v2/posts?slug=${slug}&_embed`;
  } else
    url = `https://blog.foodtechnologylabs.com/wp-json/wp/v2/posts?categories=${category}&per_page=${postsPerPage}&page=${page}&_embed=true`;
  const data = await axios.get(
    "https://blog.foodtechnologylabs.com/what-does-kombucha-taste-like"
  );
  const html = data.data;
  const $ = cheerio.load(html);
  const styleTags = $("style").toString();

  const linkTags = $('link[rel="stylesheet"]').toString();
  styles = styleTags + linkTags;
  const response = await axios.get(url);
  let blog;
  if (!category) {
    const htmlContent = response?.data[0]?.content?.rendered;
    const cleanHtml = htmlContent.replace(/data-src/g, "src");
    blog = {
      content: cleanHtml,
      title: response?.data[0]?.title?.rendered,
      image: response?.data[0]?._embedded["wp:featuredmedia"][0]?.source_url,
    };
  }
  const blogs = response?.data;
  const totalPages = Math.ceil(response.headers["x-wp-total"] / postsPerPage);

  if (category)
    return (
      <Box sx={{ display: "flex", flexDirection: "column", gap: 2, p: 2 }}>
        {!blogs.length && <h1>No posts found!</h1>}
        {blogs.length > 0 && (
          <Box sx={{ display: "flex", gap: 2, flexWrap: "wrap" }}>
            {blogs.map((item) => (
              <Card sx={{ maxWidth: 345 }} key={item.id}>
                <CardMedia
                  sx={{ height: 140 }}
                  image={item?._embedded["wp:featuredmedia"][0]?.source_url}
                  title={item?.title.rendered}
                />
                <CardContent>
                  <Typography
                    dangerouslySetInnerHTML={{
                      __html: item?.title?.rendered,
                    }}
                    gutterBottom
                    variant="h5"
                    component="div"
                  ></Typography>
                  <Typography
                    dangerouslySetInnerHTML={{
                      __html: item?.excerpt.rendered,
                    }}
                    variant="body2"
                    sx={{ color: "text.secondary" }}
                  />
                </CardContent>
                <CardActions sx={{ marginTop: "auto" }}>
                  <Button href={`/${item.slug}`} size="small">
                    Read More
                    <span style={{ marginTop: "5px" }}>
                      <ArrowRightAlt />
                    </span>
                  </Button>
                </CardActions>
              </Card>
            ))}
          </Box>
        )}
        <Box sx={{ display: "flex", justifyContent: "center", mt: 4 }}>
          {Array.from({ length: totalPages }, (_, i) => i + 1).map(
            (pageNumber) => (
              <Link key={pageNumber} href={`?page=${pageNumber}`} passHref>
                <Button
                  variant={
                    pageNumber === Number(page) ? "contained" : "outlined"
                  }
                  sx={{ mx: 1 }}
                >
                  {pageNumber}
                </Button>
              </Link>
            )
          )}
        </Box>
      </Box>
    );
  else
    return (
      <div>
        <Box
          component={"h2"}
          sx={{ textAlign: "center", display: "none" }}
          dangerouslySetInnerHTML={{
            __html: styles,
          }}
        />
        <Box
          component={"h2"}
          sx={{ textAlign: "center" }}
          dangerouslySetInnerHTML={{
            __html: blog?.title,
          }}
        />

        {blog?.image && (
          <Box
            sx={{
              textAlign: "center",
              position: "absolute",
              zIndex: -1,
              width: "100%",
              left: "auto",
              right: "auto",
            }}
          >
            <Box
              sx={{
                width: { xs: "95vw", sm: "95vw", md: "70vw", lg: "70vw" },
                objectFit: "cover",
                aspectRatio: "auto 1024/1024",
                display: "initial",
              }}
              // height={512}
              // width={512}
              src={blog?.image}
              component="img"
              loading="lazy"
            />
          </Box>
        )}

        <Box
          sx={{
            background: "white",
            mt: "45vw",
            ml: "auto",
            mr: "auto",
            width: { xs: "80vw", sm: "85vw", md: "60vw", lg: "60vw" },
            py: 1,
            px: 3,
            borderRadius: 1,
          }}
          dangerouslySetInnerHTML={{
            __html: blog?.content,
          }}
        />
      </div>
    );
};

export default SingleBlog;
