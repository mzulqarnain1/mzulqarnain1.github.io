import React from "react";
import "./BlogCard.scss";

export default function BlogCard({blog}) {
  function openUrlInNewTab(url) {
    if (url !== undefined) {
      var win = window.open(url, "_blank");
      win.focus();
    }
  }

  return (
    <div onClick={() => openUrlInNewTab(blog.url)}>
      <div className="blog-container">
        <a className="blog-card" href="#blog">
          <h3 className="blog-title">{blog.title}</h3>
          <p className="small">{blog.description}</p>
          <div className="go-corner">
            <div className="go-arrow">→</div>
          </div>
        </a>
      </div>
    </div>
  );
}
