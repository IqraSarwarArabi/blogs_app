import Footer from "../components/Footer/Footer";
import NavBar from "../components/NavBar/NavBar";
import { Home } from "./Home/Home";
import { Write } from "./Write/Write";
import { AllBlogs } from "./AllBlogs/AllBlogs";
import { Blog } from "./Blog/Blog";

export const HomePage = () => {
  return (
    <>
      <NavBar />
      <Home />
      <Footer />
    </>
  );
};

export const WritePage = () => {
  return (
    <>
      <NavBar />
      <Write />
      <Footer />
    </>
  );
};

export const AllBlogsPage = () => {
  return (
    <>
      <NavBar />
      <AllBlogs />
      <Footer />
    </>
  );
};

export const BlogPage = () => {
  return (
    <>
      <NavBar />
      <Blog />
      <Footer />
    </>
  );
};
