import { createAsyncThunk } from "@reduxjs/toolkit";

const API_URL = process.env.REACT_APP_BASE_URL;

export const addBlogAsync = createAsyncThunk(
  "blogs/addBlogAsync",
  async (blogData) => {
    try {
      const response = await fetch(`${API_URL}/insertBlog.php`, {
        method: "POST",
        body: blogData,
      });
      if (response.ok) {
        const data = await response.json();
        return data;
      } else {
        throw new Error("Error adding the blog post");
      }
    } catch (error) {
      throw new Error(`Error adding the blog post: ${error.message}`);
    }
  }
);

export const editBlogAsync = createAsyncThunk(
  "blogs/editBlogAsync",
  async (formData) => {
    try {
      const response = await fetch(
        `${API_URL}/updateBlog.php?id=${formData.get("id")}`,
        {
          method: "POST",
          body: formData,
        }
      );

      if (response.ok) {
        return formData.get("id");
      } else {
        throw new Error("Error updating the blog post");
      }
    } catch (error) {
      throw new Error(`Error updating the blog post: ${error.message}`);
    }
  }
);

export const fetchBlogsAsync = createAsyncThunk(
  "blogs/fetchBlogsAsync",
  async () => {
    try {
      const response = await fetch(`${API_URL}/getAllBlogs.php`);
      if (response.ok) {
        const data = await response.json();
        return data;
      } else {
        throw new Error("Error fetching blogs");
      }
    } catch (error) {
      throw new Error(`Error fetching blogs: ${error.message}`);
    }
  }
);

export const fetchBlogByIdAsync = createAsyncThunk(
  "blog/fetchBlogByIdAsync",
  async (id) => {
    try {
      const response = await fetch(`${API_URL}/getById.php?id=${id}`);
      if (response.ok) {
        const data = await response.json();
        return data;
      } else {
        throw new Error("Error fetching the blog post");
      }
    } catch (error) {
      throw new Error(`Error fetching the blog post: ${error.message}`);
    }
  }
);
