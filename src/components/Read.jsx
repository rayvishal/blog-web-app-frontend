// "use client";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
// "http://localhost:5000/api/blog",

const Create = () => {
  const [data, setData] = useState([]);
  console.log(process.env.REACT_APP_API);

  const btnStyle = {
    padding: "5px 20px",
    marginRight: "12px",
    borderRadius: "6px",
    backgroundColor: "black",
    color: "white",
  };
  async function getData() {
    try {
      const getAllData = await axios.get(
        `${process.env.REACT_APP_API}api/blog`
      );
      setData(getAllData.data);
    } catch (error) {
      console.log(error);
    }
  }
  // console.log(data);
  useEffect(() => {
    getData();
  }, []);
  //   getData();
  async function handleDelete(id) {
    try {
      const deleteBlog = await axios.delete(
        `http://localhost:5000/api/deleteblog/${id}`
      );
      getData();
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <>
      <h2>Blogs</h2>
      <div style={{ marginBottom: "150px" }}>
        {data.length
          ? data.map((e) => (
              <div class="card" style={{ marginBottom: "20px" }}>
                <div class="card-body">
                  <h5 class="card-title">{e.title}</h5>
                  <p class="card-text">
                    {`${e.content}`.substring(0, 200) + "..."}
                  </p>
                  <Link
                    to={`/allblogs/${e._id}`}
                    href="#"
                    class="btn btn-primary"
                  >
                    Read More
                  </Link>
                </div>
                <div style={{ marginTop: "6px" }}>
                  {" "}
                  <Link to={`/updateblog/${e._id}`}>
                    <button style={btnStyle}>UPDATE</button>{" "}
                  </Link>{" "}
                  <button
                    onClick={() => {
                      handleDelete(e._id);
                    }}
                    style={btnStyle}
                  >
                    DELETE
                  </button>
                </div>
              </div>
            ))
          : null}
      </div>
    </>
  );
};

export default Create;
