import React from "react";
import { useLocation } from "react-router-dom";
import Blogs from "./blogs";
import SingleBlog from "./singleBlog";

const BlogsIndex = () => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  if (queryParams.toString()) {
    return <Blogs />;
  } else {
    return <SingleBlog />;
  }
};

export default BlogsIndex;
