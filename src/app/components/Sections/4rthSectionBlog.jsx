"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import Blog1 from "./images/images/blog-1.jpg";
import Blog2 from "./images/images/blog-2.jpg";
import Blog3 from "./images/images/blog-3.jpg";
import axios from "axios";
const BlogSection = () => {
  const [blogs, setBlogs] = useState([]);
  const getLatest3Blogs = async () => {
    const url = `https://blog.foodtechnologylabs.com/wp-json/wp/v2/posts?per_page=3&page=1&_embed=true`;

    const response = await axios.get(url);
    setBlogs(response.data);
  };

  useEffect(() => {
    getLatest3Blogs();
  }, []);

  return (
    <section className="section blog">
      <div className="container-blog">
        <p className="section-subtitle-blog-p"> -- News And Blog --</p>
        <h3 className="h2 section-title">Bright Side Vegetarianism</h3>
        <ul className="blog-list">
          {blogs.map((item, index) => (
            <li key={index}>
              <div className="blog-card" style={{ height: "88vh" }}>
                <figure className="card-banner">
                  <Image
                    src={item?._embedded["wp:featuredmedia"][0]?.source_url}
                    width="451"
                    height="310"
                    loading="lazy"
                    alt="We automatically search for and apply coupons when."
                    className="w-100"
                  />
                </figure>
                <div className="card-content" style={{ height: "100%" }}>
                  <div className="card-wrapper">
                    <div className="wrapper-item">
                      <ion-icon name="calendar-clear-outline"></ion-icon>
                      <time className="text" dateTime="2022-04-13">
                        {new Date(item?.date).getDate()}{" "}
                        {new Date(item?.date).toLocaleString("en-US", {
                          month: "long",
                        })}{" "}
                        {new Date(item?.date).getFullYear()}
                      </time>
                    </div>
                    <div className="wrapper-item">
                      <ion-icon name="heart-outline"></ion-icon>
                    </div>
                  </div>
                  <h3
                    dangerouslySetInnerHTML={{
                      __html: item?.title.rendered,
                    }}
                    className="h3 card-title"
                    style={{ height: "25%" }}
                  ></h3>
                  <a href="./404.html" className="btn btn-primary">
                    <span>Read More</span>
                    <ion-icon
                      name="chevron-forward"
                      aria-hidden="true"
                    ></ion-icon>
                  </a>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default BlogSection;
