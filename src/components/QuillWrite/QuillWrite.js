import React, { useState, useEffect } from "react";
import "react-quill/dist/quill.snow.css";
import { useFormik } from "formik";
import { Input, Select } from "@chakra-ui/react";
import styles from "./QuillWrite.module.css";
import FileUpload from "../FileUpload/FileUpload";
import { validationSchema, categoryOptions } from "../../utils";
import ReactQuill from "react-quill";
import { useNavigate, useParams } from "react-router-dom";
import {
  addBlogAsync,
  editBlogAsync,
  fetchBlogByIdAsync,
} from "../../app/blogs/blogsThunk";
import { useDispatch, useSelector } from "react-redux";
import { clearSelectedBlog } from "../../app/blogs/blogsSlice";

const QuillWrite = () => {
  const dispatch = useDispatch();
  const { bid } = useParams();
  const navigate = useNavigate();
  const [url, setUrl] = useState(null);
  const isEditing = !!bid && parseInt(bid, 10) !== 0;
  const imgUrl = url === null ? "../static/images/write.png" : url;
  const selectedBlog = useSelector((state) => state.blogs.selectedBlog);

  useEffect(() => {
    if (bid == 0) dispatch(clearSelectedBlog());
  }, []);

  useEffect(() => {
    if (isEditing && selectedBlog !== null) {
      formik.setValues({
        title: selectedBlog.title,
        category: selectedBlog.category,
        content: selectedBlog.content,
      });
      setUrl(selectedBlog.file_path);
    }
  }, [isEditing, selectedBlog]);

  useEffect(() => {
    if (isEditing) {
      dispatch(fetchBlogByIdAsync(bid));
    }
  }, [bid, isEditing]);

  const formik = useFormik({
    initialValues: {
      title: "",
      category: "",
      content: "",
    },
    validationSchema,
    onSubmit: (values) => {
      if (url === null) {
        alert("Image can't be empty");
        return;
      }
      const formData = new FormData();
      formData.append("title", values.title);
      formData.append("category", values.category);
      formData.append("content", values.content);
      formData.append("file", url);

      if (isEditing) {
        formData.append("id", bid);
        dispatch(editBlogAsync(formData));
        navigate(`/blog/${bid}`);
      } else {
        dispatch(addBlogAsync(formData));
        navigate(`/all`);
      }
    },
  });

  const renderError = (field) => {
    return formik.touched[field] && formik.errors[field] ? (
      <div className={styles.error}>{formik.errors[field]}</div>
    ) : null;
  };

  return (
    <>
      <div className={styles.header}>
        <div>
          <h1 className="subHeading">Write What You Want!</h1>
          <div className={styles.inputField}>
            <label htmlFor="title">Title</label>
            <Input
              type="text"
              id="title"
              name="title"
              placeholder="Title Of Blog"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.title}
            />
            {renderError("title")}
          </div>
          <div className={styles.inputField}>
            <label htmlFor="category">Category</label>
            <Select
              id="category"
              name="category"
              placeholder="Category of Blog"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.category}
            >
              {categoryOptions.map((option) => (
                <option
                  key={option.value}
                  value={option.value}
                  label={option.label}
                />
              ))}
            </Select>
            {renderError("category")}
          </div>
          <FileUpload setUrl={setUrl} />
        </div>
        <img id="preview" src={imgUrl} alt="Write Image" />
      </div>
      <form onSubmit={formik.handleSubmit}>
        <div className={styles.quillContainer}>
          <ReactQuill
            className={styles.quill}
            theme="snow"
            value={formik.values.content}
            onChange={(content) => formik.setFieldValue("content", content)}
          />
          {renderError("content")}
        </div>
        <div className={styles.btns}>
          <button className="button" val="Submit" type="submit">
            Publish Your Blog
          </button>
        </div>
      </form>
    </>
  );
};

export default QuillWrite;
