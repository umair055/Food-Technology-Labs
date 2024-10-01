import { ArrowRightAlt } from "@mui/icons-material";
import {
  CardActions,
  CardContent,
  CardMedia,
  Typography,
  Button,
  Card,
  Box,
  Pagination,
  CircularProgress,
} from "@mui/material";
import axios from "axios";
import React from "react";
import { useNavigate, useParams, useSearchParams } from "react-router-dom";
import { NAVIGATION_ROUTE } from "../../constants";

const Blogs = () => {
  const navigate = useNavigate();
  const [searchParams, setSearchParams] = useSearchParams();
  const [blogs, setBlogs] = React.useState([]);
  const [totalPosts, setTotalPosts] = React.useState(0);
  const [currentPage, setCurrentPage] = React.useState(1);
  const [loading, setLoading] = React.useState(false);
  const postsPerPage = 10;
  const getData = (page = 1) => {
    setLoading(true);
    axios
      .get(
        `https://blog.foodtechnologylabs.com/wp-json/wp/v2/posts?categories=${searchParams.get(
          "category"
        )}&per_page=${postsPerPage}&page=${page}`
      )
      .then((res) => {
        const total = res.headers["x-wp-total"];
        setTotalPosts(parseInt(total, 10));
        setBlogs(res.data);
      })
      .catch((error) => {})
      .finally(() => {
        setLoading(false);
      });
  };

  const handleReadMore = (slug) => {
    navigate(`${NAVIGATION_ROUTE.singleBlog}/${slug}`);
  };

  // Handle pagination change
  const handlePageChange = (event, value) => {
    setCurrentPage(value);
    getData(value);
  };

  React.useEffect(() => {
    getData(currentPage);
  }, [searchParams, currentPage]);

  return (
    <Box sx={{ display: "flex", flexDirection: "column", gap: 2, p: 2 }}>
      {loading && (
        <Box sx={{ display: "flex", justifyContent: "center", mt: 2 }}>
          <CircularProgress />
        </Box>
      )}
      {!blogs.length && !loading && <h1>No posts found!</h1>}
      {!loading && blogs.length > 0 && (
        <Box sx={{ display: "flex", gap: 2, flexWrap: "wrap" }}>
          {blogs.map((item) => (
            <Card sx={{ maxWidth: 345 }} key={item.id}>
              <CardMedia
                sx={{ height: 140 }}
                image={item?.featured_image_src_large[0]}
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
                <Button onClick={() => handleReadMore(item.slug)} size="small">
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
      {!loading && blogs.length > 0 && (
        <Pagination
          count={Math.ceil(totalPosts / postsPerPage)}
          page={currentPage}
          onChange={handlePageChange}
          color="primary"
          sx={{ display: "flex", justifyContent: "center", marginTop: 2 }}
        />
      )}
    </Box>
  );
};

export default Blogs;
