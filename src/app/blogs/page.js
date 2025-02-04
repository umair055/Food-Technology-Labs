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

const postsPerPage = 10;

const Blogs = async ({ searchParams }) => {
  let { page } = await searchParams;
  if (!page) page = 1;

  const url = `https://blog.foodtechnologylabs.com/wp-json/wp/v2/posts?per_page=${postsPerPage}&page=${page}&_embed=true`;

  const response = await axios.get(url);
  const blogs = response.data;
  const totalPages = Math.ceil(response.headers["x-wp-total"] / postsPerPage);

  return (
    <Box sx={{ display: "flex", flexDirection: "column", gap: 2, p: 2 }}>
      {!blogs.length && <h1>No posts found!</h1>}
      {blogs.length > 0 && (
        <Box sx={{ display: "flex", gap: 2, flexWrap: "wrap" }}>
          {blogs.map((item) => (
            <Card sx={{ maxWidth: 345 }} key={item.id}>
              <CardMedia
                sx={{ height: 140 }}
                image={item._embedded["wp:featuredmedia"][0].source_url}
                title={item?.title.rendered}
              />
              <CardContent>
                <Typography
                  dangerouslySetInnerHTML={{
                    __html: item?.title.rendered,
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
                variant={pageNumber === Number(page) ? "contained" : "outlined"}
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
};

export default Blogs;
