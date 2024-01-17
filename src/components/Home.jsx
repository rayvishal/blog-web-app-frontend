import React, { useEffect } from "react";
import Banner from "./Banner";
import Pagination from "./Pagination";
import { Link } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
const Home = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  //User is currently on this page
  const [currentPage, setCurrentPage] = useState(1);
  const [recordsPerPage] = useState(5);
  const indexOfLastRecord = currentPage * recordsPerPage;
  const indexOfFirstRecord = indexOfLastRecord - recordsPerPage;

  const currentRecords = data.slice(indexOfFirstRecord, indexOfLastRecord);
  const nPages = Math.ceil(data.length / recordsPerPage);
  // console.log(nPages);

  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_API}api/blog`)
      .then((res) => {
        setData(res.data);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  // console.log(data);
  // getAllData();
  // console.log("hello");
  const card = {
    height: "320px",
    width: "400px",
    backgroundColor: "white",
    flex: "1 0 30%",
    margin: "10px",
    border: "9px solid white",
  };
  const mainCard = { display: "flex", flexDirection: "row", flexWrap: "wrap" };
  // let array = [3, 4, 5, 8, 3, 6, 7, 3, 9];
  return (
    <>
      <div
        style={{
          marginTop: "0px",
          // marginBottom: "10px",
          backgroundColor: "#b7dfb8",
          // height: "85vh",
          paddingBottom: "20px",
        }}
      >
        <h1 style={{ wordWrap: "break-word" }}>Blog with the best</h1>
        <div style={{ margin: "auto" }}>
          <p style={{ fontSize: "large", padding: " 5px 15px" }}>
            More bloggers and independent creators choose Blog.com than any
            other blogging tool. Tap into intuitive, flexible tools that put
            writers, bloggers, and creators first.
          </p>
        </div>
        {/* card */}
        <div style={mainCard}>
          {currentRecords.length
            ? currentRecords.map((e) => (
                <div style={card}>
                  <h1>{`${
                    e.title.length <= 50
                      ? e.title
                      : e.title.substring(0, 50) + "..."
                  }`}</h1>
                  {/* <h1>{`${e.title}`.length<=55?`${e.title}`.substring(0, 55):{e.title}}</h1> */}
                  <p style={{ wordWrap: "break-word" }}>
                    {`${e.content}`.substring(0, 100) + "..."}
                  </p>
                  <div style={{ display: "flex", justifyContent: "center" }}>
                    <Link to={`/allblogs/${e._id}`}>
                      <button
                        style={{
                          padding: "6px 8px",
                          borderRadius: "8px",
                          backgroundColor: "#0d6efd",
                          border: "2px solid white",
                          color: "white",
                          display: "block",
                          // marginLeft: "40%",
                          alignItems: "center",
                        }}
                      >
                        Read More
                      </button>
                    </Link>
                  </div>

                  <img
                    style={{ height: "20px", display: "inline-block" }}
                    src="data:image/png;base64,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"
                  ></img>
                  <p style={{ display: "inline-block" }}>{e.comments.length}</p>
                </div>
              ))
            : null}
        </div>

        <Pagination
          nPages={nPages}
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
        />
        <Link to={"/createblog"}>
          <button
            className="hover"
            style={{
              padding: "10px 7px",
              fontSize: "large",
              fontWeight: "bold",
              borderRadius: "8px",
              fontFamily: "monospace",
            }}
          >
            Start a blog
          </button>
        </Link>
      </div>
    </>
  );
};

export default Home;
