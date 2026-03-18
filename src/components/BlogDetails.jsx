import { useEffect, useState } from "react";
import { useParams, useNavigate, useLocation } from "react-router-dom";
import axios from "axios";
import Navbar from "../components/Navbar";
import "./BlogDetails.css";
import { FaArrowLeft } from "react-icons/fa";
import Footer from "./Footer";

function BlogDetails() {

  const { id } = useParams();
  const navigate = useNavigate();
  const location = useLocation();

  const BASE_URL = "http://127.0.0.1:8000";

  // ✅ INSTANT DATA FROM PREVIOUS PAGE
  const [blog, setBlog] = useState(location.state || null);

  // ✅ FETCH ONLY IF NO STATE (refresh case)
  useEffect(() => {
    if (!blog) {
      axios.get(`${BASE_URL}/api/blogs/${id}/`)
        .then(res => setBlog(res.data))
        .catch(err => console.log(err));
    }
  }, [id]);

  // ❌ NO loading text (just avoid crash)
  if (!blog) return null;

  return (
    <>
      <Navbar />

      <div className="blog-details">

        {/* BACK BUTTON */}
        <FaArrowLeft 
          className="back-btn"
          onClick={() => navigate(-1)}
        />

        {/* IMAGE */}
        <img
          src={
            blog.image?.startsWith("http")
              ? blog.image
              : `${BASE_URL}${blog.image}`
          }
          alt={blog.title}
          className="details-img"
          loading="lazy"
        />

        {/* CONTENT */}
        <div className="details-content">

          <h1>{blog.title}</h1>

          <span className="date">
            {new Date(blog.created_at).toDateString()}
          </span>

          <p className="full-text">
            {blog.description}
          </p>

        </div>

      </div>

      <Footer />
    </>
  );
}

export default BlogDetails;
