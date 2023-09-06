import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import styles from "./Blog.module.css";
import { BlogContent } from "../../components/BlogContent/BlogContent";
import { fetchBlogByIdAsync } from "../../app/blogs/blogsThunk";
import { useDispatch, useSelector } from "react-redux";

export const Blog = () => {
  const { id } = useParams();
  const blog = useSelector((state) => state.blogs.selectedBlog);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchBlogByIdAsync(id));
  }, [id]);

  return (
    <>
      <div className={styles.content}>
        {blog !== null && <BlogContent blog={blog} />}
      </div>
    </>
  );
};
