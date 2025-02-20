"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import axios from "axios";
import Link from "next/link";
import { Button } from "@mui/material";
const BlogSection = () => {
  const [blogs, setBlogs] = useState([]);
  const getLatest3Blogs = async () => {
    const url = `https://blog.foodtechnologylabs.com/wp-json/wp/v2/posts?per_page=6&page=1&_embed=true`;

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
              <div className="blog-card">
                <figure className="card-banner">
                  <Image
                    src={item?._embedded["wp:featuredmedia"][0]?.source_url}
                    width="350"
                    height="250"
                    loading="lazy"
                    alt="We automatically search for and apply coupons when."
                  />
                </figure>
                <div className="card-content">
                  <div className="card-wrapper">
                    <div className="wrapper-item">
                      <ion-icon name="calendar-clear-outline"></ion-icon>
                      <time style={{ fontSize: "16px" }} dateTime="2022-04-13">
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
                  <Link
                    href={`/${item.slug}`}
                    style={{
                      textDecoration: "none",
                      color: "black",
                      fontSize: "24px",
                      fontWeight: "700",
                    }}
                    dangerouslySetInnerHTML={{
                      __html: item?.title?.rendered,
                    }}
                  ></Link>
                  <Button
                    sx={{
                      marginTop: "20px",
                      height: "40px",
                      width: "130px !important",
                      fontSize: "12px !important",
                      textDecoration: "none",
                      padding: "0px !important",
                    }}
                    className="btn"
                    href={`/${item.slug}`}
                  >
                    <span>Read More</span>
                  </Button>
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
