import React from "react";
import { Link } from "react-router-dom";
import allsectionbg from "../assets/allsectionbg.jpg";
import SEO from "./SEO";

const BlogPage = () => {
  return (
    <section>
      <SEO
        title="Knowledge Insights & Articles | ISMR Pune Blogs"
        description="Read latest thought leadership articles, industry insights, and management trends written by faculty and students at ISMR Pune."
        canonical="https://ismrpune.edu.in/blogs"
      />

      {/* ⭐ BREADCRUMB SECTION (Matches Screenshot Style) */}
      <section className="breadcrumb-wrapper" style={{
        backgroundImage: `url(${allsectionbg})`,
        backgroundPosition: "center",
        backgroundSize: "cover",
      }}>

        <style>{`
          /* -------------------- BREADCRUMB SECTION -------------------- */
          .breadcrumb-wrapper {
            width: 100%;
            height: 300px;
            background: url("assets/Homeimg/loann.jpg") center/cover no-repeat;
            position: relative;
            display: flex;
            align-items: center;
            justify-content: center;
            margin-bottom: 40px;
          }

          .breadcrumb-overlay {
            position: absolute;
            width: 100%;
            height: 100%;
            background: rgba(3, 34, 79, 0.75); 
            top: 0;
            left: 0;
          }

          .breadcrumb-content {
            position: relative;
            color: white;
            text-align: center;
            z-index: 2;
          }

          .breadcrumb-title {
            font-size: 42px;
            font-weight: 700;
            margin-bottom: 8px;
          }

          .breadcrumb-title span {
            color: #f7c200;
          }

          .breadcrumb-path {
            font-size: 16px;
            opacity: 0.95;
          }

          .breadcrumb-path span {
            color: #f7c200;
          }

          /* -------------------- BLOG SECTION -------------------- */
          .blog-container {
            width: 100%;
            padding: 40px 20px;
            background: #f8f9fa;
            font-family: Arial, sans-serif;
          }

          .blog-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
            gap: 25px;
            padding: 10px 20px;
          }

          .blog-card {
            background: #fff;
            border-radius: 12px;
            overflow: hidden;
            box-shadow: 0px 4px 10px rgba(0,0,0,0.1);
            transition: all 0.3s ease-in-out;
          }

          .blog-card:hover {
            transform: translateY(-6px);
            box-shadow: 0px 6px 18px rgba(0,0,0,0.15);
          }

          .blog-image {
            width: 100%;
            height: 180px;
            object-fit: cover;
          }

          .blog-content {
            padding: 18px;
          }

          .blog-title {
            font-size: 20px;
            font-weight: bold;
            margin-bottom: 10px;
            color: #333;
          }

          .blog-desc {
            font-size: 14px;
            color: #666;
            line-height: 1.5;
          }

          .read-more {
            display: inline-block;
            margin-top: 12px;
            color: #0066cc;
            text-decoration: none;
            font-weight: bold;
          }

          .read-more:hover {
            text-decoration: underline;
          }
            a{
                text-decoration: none;
                }

        `}</style>

        <div className="breadcrumb-overlay"></div>

        <div className="breadcrumb-content" >
          <h1 className="breadcrumb-title">
            <span>Blogs</span>
          </h1>
          <p className="breadcrumb-path">
            Home • <span>Blogs</span>
          </p>
        </div>
      </section>

      {/* ⭐ BLOG CONTENT SECTION */}
      <section className="blog-container">
        <div className="blog-grid">

          <div className="blog-card">
            <img className="blog-image" src="/Marketing-Across-Generations.jpg" alt="Blog 1" />
            <div className="blog-content">
              <Link to="/blogs/Marketing-Across-Generations"> <h3 className="blog-title">Marketing Management</h3></Link>
              <Link to="/blogs/Marketing-Across-Generations"> <p className="blog-desc">
                Marketing Across Generations: How Brands Talk Differently to Baby Boomers, Gen Z & Gen Alpha
              </p></Link>
              <div className="blog-footer d-flex justify-content-between align-items-center">
                <a className="read-more" href="#">    By: Prof Sandeep D Chaudhary</a>
                <p className="pt-4"><b>Date : </b> 14 January 2025</p>
              </div>
            </div>
          </div>

          <div className="blog-card">
            <img className="blog-image" src="/Bionics.png" alt="Blog 2" />
            <div className="blog-content">
              <Link to="/blogs/Future-Interface-of-Marketing">  <h3 className="blog-title">The Future Interface of Marketing</h3></Link>
              <Link to="/blogs/Future-Interface-of-Marketing">  <p className="blog-desc">
                The world of marketing is no longer limited to creative advertisements, catchy taglines, or persuasive sales pitches
              </p></Link>
              <div className="blog-footer d-flex justify-content-between align-items-center">
                <a className="read-more" href="#">    By: Prof Sandeep D Chaudhary</a>
                <p className="pt-4"><b>Date : </b> 14 January 2026</p>
              </div>
            </div>
          </div>

          <div className="blog-card">
            <img className="blog-image" src="/Predictivemarketing .jpg" alt="Blog 3" />
            <div className="blog-content">
              <Link to="/blogs/Predictive-Marketing-Explained"><h3 className="blog-title">Predictive Marketing Explained</h3></Link>
              <Link to="/blogs/Predictive-Marketing-Explained"> <p className="blog-desc">
                Predictive Marketing Explained: How Brands Anticipate What Customers Want Next
              </p></Link>
              <div className="blog-footer d-flex justify-content-between align-items-center">
                <a className="read-more" href="#">By: Prof Sandeep D Chaudhary</a>
                <p className="pt-4"><b>Date : </b>14 January 2025</p>
              </div>
            </div>
          </div>

        </div>
      </section>
    </section>
  );
};

export default BlogPage;
