import React from "react";

const BlogPage = () => {
  return (
    <section>

      {/* ⭐ BREADCRUMB SECTION (Matches Screenshot Style) */}
      <section className="breadcrumb-wrapper">

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

        `}</style>

        <div className="breadcrumb-overlay"></div>

        <div className="breadcrumb-content">
          <h1 className="breadcrumb-title">
            Our <span>Blogs</span>
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
            <img className="blog-image" src="/14.png" alt="Blog 1" />
            <div className="blog-content">
              <h3 className="blog-title">The Future of Education in India</h3>
              <p className="blog-desc">
                Education is evolving rapidly with technology, innovation, and new policies. Here's what the future looks like.
              </p>
              <a className="read-more" href="#">Read More →</a>
            </div>
          </div>

          <div className="blog-card">
            <img className="blog-image" src="/14.png" alt="Blog 2" />
            <div className="blog-content">
              <h3 className="blog-title">How AI Is Transforming Colleges</h3>
              <p className="blog-desc">
                Artificial Intelligence is transforming teaching methods, analytics, and the overall academic ecosystem.
              </p>
              <a className="read-more" href="#">Read More →</a>
            </div>
          </div>

          <div className="blog-card">
            <img className="blog-image" src="/14.png" alt="Blog 3" />
            <div className="blog-content">
              <h3 className="blog-title">Top Skills Students Need in 2025</h3>
              <p className="blog-desc">
                Explore the most important skills every student must learn for future career success.
              </p>
              <a className="read-more" href="#">Read More →</a>
            </div>
          </div>

        </div>
      </section>
    </section>
  );
};

export default BlogPage;
