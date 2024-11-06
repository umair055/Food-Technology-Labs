import React from "react";
import { useLocation, useParams } from "react-router-dom";
import Blogs from "./blogs";
import SingleBlog from "./singleBlog";

const BlogsIndex = () => {
  const location = useLocation();
  const { slug } = useParams();
  const queryParams = new URLSearchParams(location.search);
  if (queryParams.toString() || (slug && slug === "blog")) {
    return <Blogs />;
  } else {
    return <SingleBlog />;
  }
};

export default BlogsIndex;
