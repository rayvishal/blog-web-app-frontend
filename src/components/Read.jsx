// "use client";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const Create = () => {
  const [data, setData] = useState([]);

  let str =
    "The apple mango is a friendship and a banana is a monster because it is banana and apple is the king which i like the mosnt indeed";
  const btnStyle = {
    padding: "5px 20px",
    marginRight: "12px",
    borderRadius: "6px",
    backgroundColor: "black",
    color: "white",
  };
  async function getData() {
    try {
      const getAllData = await axios.get("http://localhost:5000/api/blog");
      setData(getAllData.data);
    } catch (error) {
      console.log(error);
    }
  }
  console.log(data);
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
      <div className="container">
        <div className="row row-cols-1 row-cols-sm-2 row-cols-md-4">
          {data.length
            ? data.map((e) => (
                <div key={e.id} className="card" style={{ width: "18rem" }}>
                  <div className="card-body">
                    <h5 className="card-title">{e.title}</h5>
                    <p className="card-text">
                      {`${e.content}`.substring(0, 100) + "..."}
                    </p>
                    <Link
                      to={`/allblogs/${e._id}`}
                      // to="/allblogs/:id"

                      className="btn btn-primary"
                    >
                      Read More
                    </Link>
                    <div style={{ marginTop: "6px" }}>
                      <button style={btnStyle}>UPDATE</button>
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
                </div>
              ))
            : null}
        </div>
      </div>
    </>
  );
};

export default Create;
