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
        `${REACT_APP_API}api/singleblog/${id}`
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
          <h1 style={{ marginBottom: "20px" }}>{data.title}</h1>
          <h6>{data.content}</h6>
        </>
      ) : null}
    </div>
  );
};

export { BlogDetail };
