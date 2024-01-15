import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useState } from "react";
import axios from "axios";

const BlogDetail = () => {
  const [data, setData] = useState([]);
  const [comment, setComment] = useState("");
  const [commentArray, setCommentArray] = useState([]);
  const { id } = useParams();
  async function getData() {
    try {
      const getSingleData = await axios.get(
        `${process.env.REACT_APP_API}api/singleblog/${id}`
      );
      setData(getSingleData.data);
    } catch (error) {
      console.log(error);
    }

    console.log(data);
  }
  async function getSingleComment() {
    const getSingleDataComment = await axios.get(
      `${process.env.REACT_APP_API}api/singleblog/${id}`
    );
    console.log(getSingleDataComment.data);
    setCommentArray(getSingleDataComment.data.comments);
  }
  useEffect(() => {
    getData();
    getSingleComment();
  }, []);
  async function handleComment(e) {
    e.preventDefault();
    try {
      console.log(comment);
      const response = await axios.post(
        `${process.env.REACT_APP_API}api/comment/${id}`,
        comment,
        { headers: { "Content-Type": "text/plain" } }
      );
      getSingleComment();
      // const getSingleDataComment = await axios.get(
      //   `${process.env.REACT_APP_API}api/singleblog/${id}`
      // );
      // console.log(getSingleDataComment.data);
      // setCommentArray(getSingleDataComment.data.comments);
      console.log(data.comments);
    } catch (error) {
      console.log(error);
    }
    console.log(commentArray);
  }
  return (
    <div style={{ marginBottom: "200px" }}>
      {data ? (
        <>
          <h1 style={{ marginBottom: "20px", marginTop: "10px" }}>
            {data.title}
          </h1>
          <hr></hr>
          <p
            style={{
              lineHeight: "200%",
              marginTop: "30px",
              padding: "0px 70px",
              // marginBottom: "200px",
              whiteSpace: "pre-wrap",
              textAlign: "justify",
              textDecoration: "underline",
            }}
          >
            {data.content}
          </p>
          {/* this is a commnet area */}
          <form onSubmit={handleComment}>
            <div className="mb-3">
              <label htmlFor="commentTextarea" className="form-label">
                Your Comment
              </label>
              <textarea
                className="form-control"
                id="commentTextarea"
                rows="4"
                value={comment}
                onChange={(e) => {
                  setComment(e.target.value);
                }}
              ></textarea>
            </div>
            <button type="submit" className="btn btn-primary">
              Submit Comment
            </button>
          </form>
          {/* <div> */}
          {/* this is a end area */}
          {/* show comments start */}
          {commentArray.length}
          <p
            style={{
              display: "inline-block",
              paddingLeft: "10px",
              fontSize: "large",
              fontWeight: "bold",
            }}
          >
            Comments
          </p>
          <div style={{ marginTop: "30px" }}>
            {commentArray.length
              ? commentArray.map((e) => (
                  <ul key={e.key}>
                    <li>{e}</li>
                  </ul>
                ))
              : null}
            {/* show comments end */}
          </div>
        </>
      ) : null}
    </div>
  );
};

export { BlogDetail };
