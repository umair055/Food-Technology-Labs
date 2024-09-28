import axios from "axios";
import React from "react";
import "./singleBlog.css";
import { Box, CircularProgress, Typography } from "@mui/material";
import { useParams } from "react-router-dom";

const SingleBlog = () => {
  const [blog, setBlog] = React.useState(null);
  const [loading, setLoading] = React.useState(true); // Loading state
  const [error, setError] = React.useState(null); // Error state
  const { slug } = useParams();

  const getData = () => {
    axios
      .get(
        `https://blog.foodtechnologylabs.com/wp-json/wp/v2/posts?slug=${slug}`
      )
      .then((res) => {
        if (res.data.length > 0) {
          const htmlContent = res.data[0].content?.rendered;
          const cleanHtml = htmlContent.replace(/data-src/g, "src");
          document.title = res.data[0].title.rendered;
          setBlog({
            content: cleanHtml,
            title: res.data[0].title.rendered,
            image: res.data[0].featured_image_src_large[0],
          });
        } else {
          setError("No blog found.");
        }
      })
      .catch(() => {
        setError("An error occurred while fetching the blog.");
      })
      .finally(() => {
        setLoading(false); // Stop loading once data is fetched or an error occurs
      });
  };

  React.useEffect(() => {
    getData();
  }, [slug]);

  if (loading) {
    return (
      <Box sx={{ textAlign: "center", mt: 4 }}>
        <CircularProgress />
        <Typography variant="body1" sx={{ mt: 2 }}>
          Loading...
        </Typography>
      </Box>
    );
  }

  if (error) {
    return (
      <Box sx={{ textAlign: "center", mt: 4 }}>
        <Typography variant="h6" color="error">
          {error}
        </Typography>
      </Box>
    );
  }

  return (
    <div>
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
            }}
            src={blog.image}
            component="img"
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
