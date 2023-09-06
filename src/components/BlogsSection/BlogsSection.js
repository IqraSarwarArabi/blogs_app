import BlogCard from "../BlogCard/BlogCard";
import styles from "./BlogsSection.module.css";

function BlogsSection({ blogs }) {
  return (
    <div className={styles.container}>
      <h1 className="subHeading">Our Trending Blogs</h1>
      <div className={styles.cards}>
        {blogs.map((blog) => (
          <BlogCard
            title={blog.title}
            content={blog.content}
            src={blog.file_path}
            id={blog.id}
            key={blog.id}
          />
        ))}
      </div>
    </div>
  );
}

export default BlogsSection;
