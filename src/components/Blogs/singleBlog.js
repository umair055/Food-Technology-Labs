import axios from "axios";
import React from "react";
import { useSearchParams } from "react-router-dom";
import "./singleBlog.css";
import { Box } from "@mui/material";
import zIndex from "@mui/material/styles/zIndex";

const SingleBlog = () => {
  const [blog, setBlog] = React.useState(null);
  let [searchParams, setSearchParams] = useSearchParams();
  const getData = () => {
    axios
      .get(
        `https://posts.foodtechnologylabs.com/wp-json/wp/v2/posts/${searchParams.get(
          "id"
        )}`
      )
      .then((res) => {
        console.log(res.data);
        const htmlContent = res.data.content?.rendered;
        const cleanHtml = htmlContent.replace(/data-src/g, "src");
        setBlog({
          content: cleanHtml,
          title: res.data.title.rendered,
          image: res.data.featured_image_src_large[0],
        });
      });
  };

  React.useEffect(() => getData(), []);
  return (
    <div>
      <Box sx={{ textAlign: "center" }}>
        <h2>{blog?.title}</h2>
      </Box>

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
          sx={{ width: { xs: "95vw", sm: "95vw", md: "70vw", lg: "70vw" } }}
          src={blog?.image}
          component="img"
        ></Box>
      </Box>
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
