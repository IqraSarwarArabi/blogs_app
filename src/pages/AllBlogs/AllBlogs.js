import React, { useEffect } from "react";
import NavBar from "../../components/NavBar/NavBar";
import Footer from "../../components/Footer/Footer";
import BlogCard from "../../components/BlogCard/BlogCard";
import styles from "./AllBlogs.module.css";
import { useDispatch, useSelector } from "react-redux";
import { fetchBlogsAsync } from "../../app/blogs/blogsThunk";

export const AllBlogs = () => {
  const blogsState = useSelector((state) => state.blogs);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchBlogsAsync());
  }, []);

  return (
    <>
      <NavBar />
      <div className={styles.content}>
        <h1 className="subHeading">Our Blogs!</h1>
        <div className={styles.blogs}>
          {!blogsState.loading &&
            blogsState.blogs.map((blog) => (
              <BlogCard
                title={blog.title}
                content={blog.content}
                src={blog.file_path}
                id={blog.id}
                key={blog.id}
              />
            ))}
          {blogsState.blogs.length === 0 && (
            <p className="noblogs">
              {" "}
              No Blogs To Show 🥺 <br /> Add some!
            </p>
          )}
        </div>
      </div>
      <Footer />
    </>
  );
};
