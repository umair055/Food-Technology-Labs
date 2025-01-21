import Image from "next/image";
import React from "react";
import Blog1 from "./images/images/blog-1.jpg";
import Blog2 from "./images/images/blog-2.jpg";
import Blog3 from "./images/images/blog-3.jpg";
const BlogSection = () => {
  return (
    <section className="section blog">
      <div className="container-blog">
        <p className="section-subtitle-blog-p"> -- News And Blog --</p>
        <h3 className="h2 section-title">Bright Side Vegetarianism</h3>
        <ul className="blog-list">
          <li>
            <div className="blog-card">
              <figure className="card-banner">
                <Image
                  src={Blog1}
                  width="451"
                  height="310"
                  loading="lazy"
                  alt="We automatically search for and apply coupons when."
                  className="w-100"
                />
              </figure>
              <div className="card-content">
                <div className="card-wrapper">
                  <div className="wrapper-item">
                    <ion-icon name="calendar-clear-outline"></ion-icon>
                    <time className="text" dateTime="2022-04-13">
                      13 April, 2022
                    </time>
                  </div>
                  <div className="wrapper-item">
                    <ion-icon name="heart-outline"></ion-icon>
                    <span className="text">58 Million</span>
                  </div>
                </div>
                <h3 className="h3 card-title">
                  <a href="./404.html">
                    We automatically search for and apply coupons when.
                  </a>
                </h3>
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

          <li>
            <div className="blog-card">
              <figure className="card-banner">
                <Image
                  src={Blog2}
                  width="451"
                  height="310"
                  loading="lazy"
                  alt="How to get more traffic in your website of ecommerce."
                  className="w-100"
                />
              </figure>
              <div className="card-content">
                <div className="card-wrapper">
                  <div className="wrapper-item">
                    <ion-icon name="calendar-clear-outline"></ion-icon>
                    <time className="text" dateTime="2022-04-13">
                      13 April, 2022
                    </time>
                  </div>
                  <div className="wrapper-item">
                    <ion-icon name="heart-outline"></ion-icon>
                    <span className="text">58 Million</span>
                  </div>
                </div>
                <h3 className="h3 card-title">
                  <a href="./404.html">
                    How to get more traffic in your website of ecommerce.
                  </a>
                </h3>
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

          <li>
            <div className="blog-card">
              <figure className="card-banner">
                <Image
                  src={Blog3}
                  width="451"
                  height="310"
                  loading="lazy"
                  alt="25 Rules and regulation to be successful in your business."
                  className="w-100"
                />
              </figure>
              <div className="card-content">
                <div className="card-wrapper">
                  <div className="wrapper-item">
                    <ion-icon name="calendar-clear-outline"></ion-icon>
                    <time className="text" dateTime="2022-04-13">
                      13 April, 2022
                    </time>
                  </div>
                  <div className="wrapper-item">
                    <ion-icon name="heart-outline"></ion-icon>
                    <span className="text">58 Million</span>
                  </div>
                </div>
                <h3 className="h3 card-title">
                  <a href="./404.html">
                    25 Rules and regulation to be successful in your business.
                  </a>
                </h3>
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
        </ul>
      </div>
    </section>
  );
};

export default BlogSection;
