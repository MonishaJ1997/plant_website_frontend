import { useEffect, useState } from "react";
import axios from "axios";
import Navbar from "../components/Navbar";
import "./Blog.css";
import Footer from "./Footer";
import { useNavigate } from "react-router-dom";

function Blog() {

  const [blogs, setBlogs] = useState([]);
  const navigate = useNavigate();

  const BASE_URL = "https://plant-website-backend-3y8q.onrender.com";

  useEffect(() => {
    axios.get(`${BASE_URL}/api/blogs/`)
      .then(res => setBlogs(res.data))
      .catch(err => console.log(err));
  }, []);

  return (
    <>
      <Navbar />

      <div className="blog-page">

        {/* HEADER */}
        <div className="blog-header">
          <h2>From Our Blog</h2>
          <p>Latest articles, tips, and plant care stories 🌱</p>
        </div>

        {/* BLOG GRID */}
        <div className="blog-grid">

          {blogs.length === 0 ? (
            <p className="empty">No blogs available</p>
          ) : (

            blogs.map(blog => (

              <div className="blog-card" key={blog.id}>

                {/* IMAGE */}
                <img
                  src={
                    blog.image?.startsWith("http")
                      ? blog.image
                      : `${BASE_URL}${blog.image}`
                  }
                  alt={blog.title}
                />

                {/* CONTENT */}
                <div className="blog-content">

                  <h3>{blog.title}</h3>

                  <span className="date">
                    {new Date(blog.created_at).toDateString()}
                  </span>

                  <p>
                    {blog.description.slice(0, 100)}...
                  </p>

                  <button
                    className="read-btn"
                    onClick={() => navigate(`/blog/${blog.id}`,{ state: blog })}
                  >
                    Read More
                  </button>

                </div>

              </div>

            ))

          )}

        </div>

        {/* EXTRA SECTION */}
        <div className="blog-extra">

          <h2>Why Read Our Blogs? 🌿</h2>

          <div className="extra-grid">

            <div className="extra-box">
              <h3>🌱 Plant Tips</h3>
              <p>Expert guidance for healthy plant growth.</p>
            </div>

            <div className="extra-box">
              <h3>🏡 Home Decor</h3>
              <p>Decorate your home with greenery ideas.</p>
            </div>

            <div className="extra-box">
              <h3>🌍 Eco Living</h3>
              <p>Learn sustainable living practices.</p>
            </div>

          </div>

        </div>

      </div>
       <Footer />
    </>
  );
}

export default Blog;
