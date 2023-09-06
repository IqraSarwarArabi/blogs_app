import BlogsSection from "../../components/BlogsSection/BlogsSection";
import NavBar from "../../components/NavBar/NavBar";
import HeroSection from "../../components/HeroSection/HeroSection";
import WriteBlogSection from "../../components/WriteBlogSection/WriteBlogSection";
import Footer from "../../components/Footer/Footer";
import styles from "./Home.module.css";
import { useEffect } from "react";
import { fetchBlogsAsync } from "../../app/blogs/blogsThunk";
import { useDispatch, useSelector } from "react-redux";

export const Home = () => {
  const blogsState = useSelector((state) => state.blogs);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchBlogsAsync());
  }, []);

  return (
    <>
      <NavBar />
      <div className={styles.content}>
        <HeroSection />
        {!blogsState.loading && <BlogsSection blogs={blogsState.blogs} />}
        {blogsState.blogs.length === 0 && (
          <p className="noblogs">
            No Blogs To Show 🥺 <br /> Add some!
          </p>
        )}
        <WriteBlogSection />
      </div>
      <Footer />
    </>
  );
};
