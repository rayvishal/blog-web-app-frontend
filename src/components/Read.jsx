// "use client";

import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
// "http://localhost:5000/api/blog",

const Read = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  // console.log(process.env.REACT_APP_API);
  // console.log(data);
  const [value, setValue] = useState(true);
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
      setLoading(false);
      setData(getAllData.data);
      console.log("run");
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
      if (window.confirm("Press Ok to confirm it")) {
        const deleteBlog = await axios.delete(
          `${process.env.REACT_APP_API}api/deleteblog/${id}`
        );
        getData();
      } else {
        // null;
      }
    } catch (error) {
      console.log(error);
    }
  }
  const handleToggle = async () => {
    if (value) {
      const sortedData = [...data].sort((fstObj, scdObj) => {
        return fstObj.title.localeCompare(scdObj.title);
      });
      setData(sortedData);

      setValue(!value);
    } else {
      getData();
      setValue(!value);
    }

    // console.log(sortedData);
    // setData()
  };
  console.log(data);

  return (
    <>
      <h6 style={{ fontFamily: "revert-layer" }}>
        To sort the blog alphabetically Click the toggle below
      </h6>
      <label
        className="switch"
        onChange={() => {
          handleToggle();
        }}
      >
        <input type="checkbox" />
        <span className="slider round"></span>
      </label>
      <h2>Blogs</h2>
      {loading ? <h1>Loading...</h1> : null}

      <div style={{ marginBottom: "150px" }}>
        {data.length
          ? data.map((e) => (
              <div className="card" style={{ marginBottom: "20px" }}>
                <div className="card-body">
                  <h5 className="card-title">{e.title}</h5>
                  <p className="card-text">
                    {`${e.content}`.substring(0, 200) + "..."}
                  </p>
                  <Link
                    to={`/allblogs/${e._id}`}
                    href="#"
                    className="btn btn-primary"
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

export default Read;
