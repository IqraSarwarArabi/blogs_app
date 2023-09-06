import React from "react";
import styles from "./BlogContent.module.css";
import InnerHTML from "dangerously-set-html-content";
import { Link } from "react-router-dom";

export const BlogContent = ({ blog }) => {
  return (
    <div className={styles.blogContainer}>
      <h1 className="subHeading">{blog.title}</h1>
      <p className={styles.blogCategory}>Category: {blog.category}</p>
      <p className={styles.blogCreationDate}>Published on: {blog.created_at}</p>
      <div className={styles.blogContent}>
        <div className={styles.blogImageContainer}>
          <img
            className={styles.blogImage}
            src={blog.file_path}
            alt={blog.title}
          />
        </div>
        <div className={styles.blogBody}>
          <InnerHTML html={blog.content} />
        </div>
      </div>
      <Link to={`/write/${blog.id}`}>
        <button className="button">Edit Blog</button>
      </Link>
    </div>
  );
};
