import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useState } from "react";
import axios from "axios";

const BlogDetail = () => {
  const [data, setData] = useState([]);
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
  useEffect(() => {
    getData();
  }, []);
  return (
    <div>
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
              marginBottom: "200px",
              whiteSpace: "pre-wrap",
              textAlign: "justify",
              textDecoration: "underline",
            }}
          >
            {data.content}
          </p>
        </>
      ) : null}
    </div>
  );
};

export { BlogDetail };
