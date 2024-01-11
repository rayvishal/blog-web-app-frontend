import React from "react";
import { useParams } from "react-router-dom";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

import { useEffect } from "react";
const Update = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [data, setData] = useState("");
  const { id } = useParams();
  const navigate = useNavigate();

  async function getValue() {
    const getSingleData = await axios.get(
      `${process.env.REACT_APP_API}api/singleblog/${id}`
    );
    setTitle(getSingleData.data.title);
    setContent(getSingleData.data.content);
    console.log("Hello from vishal");
  }
  useEffect(() => {
    getValue();
  }, []);
  const handleUpdate = async (e) => {
    e.preventDefault();
    try {
      const update = await axios.patch(
        `${process.env.REACT_APP_API}api/update/${id}`,
        { title: title, content: content }
      );
      console.log("Update");
      navigate("/allblogs");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="container mt-4">
      <h2>Blog Form</h2>
      <form onSubmit={handleUpdate}>
        <div className="form-group">
          <label for="blogTitle">Blog Title</label>
          <input
            type="text"
            className="form-control"
            id="blogTitle"
            placeholder="Enter blog title"
            value={title}
            onChange={(e) => {
              setTitle(e.target.value);
            }}
          />
        </div>
        <div className="form-group">
          <label for="blogContent">Blog Content</label>
          <textarea
            className="form-control"
            id="blogContent"
            rows="8"
            placeholder="Enter blog content"
            value={content}
            onChange={(e) => {
              setContent(e.target.value);
            }}
          ></textarea>
        </div>
        <button type="submit" className="btn btn-primary">
          Update
        </button>
      </form>
    </div>
  );
};

export default Update;
