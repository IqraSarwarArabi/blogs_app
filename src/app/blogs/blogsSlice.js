import { createSlice } from "@reduxjs/toolkit";
import {
  addBlogAsync,
  editBlogAsync,
  fetchBlogsAsync,
  fetchBlogByIdAsync,
} from "./blogsThunk";

const initialState = {
  blogs: [],
  loading: false,
  error: null,
  selectedBlog: null,
};

const blogSlice = createSlice({
  name: "blog",
  initialState,
  reducers: {
    clearSelectedBlog: (state) => {
      state.selectedBlog = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchBlogsAsync.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchBlogsAsync.fulfilled, (state, action) => {
        state.loading = false;
        state.blogs = action.payload;
      })
      .addCase(fetchBlogsAsync.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      .addCase(addBlogAsync.fulfilled, (state, action) => {
        state.blogs.push(action.payload);
        state.selectedBlog = action.payload;
      })
      .addCase(editBlogAsync.fulfilled, (state, action) => {
        const updatedBlog = action.payload;
        const index = state.blogs.findIndex(
          (blog) => blog.id === updatedBlog.id
        );
        if (index !== -1) {
          state.blogs[index] = updatedBlog;
        }
      })
      .addCase(fetchBlogByIdAsync.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchBlogByIdAsync.fulfilled, (state, action) => {
        state.loading = false;
        state.selectedBlog = action.payload;
      })
      .addCase(fetchBlogByIdAsync.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export default blogSlice.reducer;
export const { clearSelectedBlog } = blogSlice.actions;
