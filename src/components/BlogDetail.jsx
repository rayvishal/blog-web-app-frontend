import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useState } from "react";
import axios from "axios";

const BlogDetail = () => {
  const [data, setData] = useState([]);
  const [comment, setComment] = useState("");
  const [commentArray, setCommentArray] = useState([]);
  const { id } = useParams();
  const [loading, setLoading] = useState(true);
  async function getData() {
    try {
      const getSingleData = await axios.get(
        `${process.env.REACT_APP_API}api/singleblog/${id}`
      );
      setLoading(false);
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
    // setLoading(false);
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
    <>
      {loading ? <h1>Loading..</h1> : null}

      <div style={{ paddingBottom: "200px" }}>
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
                // textDecoration: "",
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
                  placeholder="Write your comment here"
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
            <div style={{ display: "flex", paddingLeft: "10px" }}>
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
            </div>

            <div
              style={{
                marginTop: "30px",
                display: "flex",
                flexDirection: "column",
                textAlign: "justify",
                paddingLeft: "10px",
              }}
            >
              {commentArray.length
                ? commentArray.map((e) => (
                    // <ul key={e.key}>
                    // <li>
                    <div>
                      <p style={{ marginBottom: "0px" }}>{e}</p>
                      <div style={{ marginTop: "0px" }}>
                        <img
                          style={{ height: "20px", marginRight: "100px" }}
                          src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJQAAACUCAMAAABC4vDmAAAAZlBMVEUAAAD///+MjIzAwMDNzc1sbGyUlJRjY2P8/Pz5+fnV1dU9PT3m5ub29vbi4uJISEhOTk4zMzOnp6eysrIlJSXt7e26urotLS14eHigoKDb29sICAgaGho4ODgfHx9XV1cSEhKAgICwRfg+AAADS0lEQVR4nO3c6ZKqMBAF4EYEJLIqKIiKvv9Ljoy4IFyyTCSn6nJ+j6lPbGLMdCALMGQaMJQZJZoZJZoZJZr/ArUKtlfPKzYs/MMgmlHMqeie2A2UR9GLKo/0SuqqXi2tKJe6qZl51JY+c7FNo/ye6ZaNYdRyCEVbsyh7EHVcAqKI5O/BCVDXFSCKdoioFBElPS9MgkpyQJRsVU2DchBRFCGi5L5sJkIViKi11P03Eao6AKLkimoq1MIQqr8afovUTKUP5TtjqNgMKjiNoTKZRZU+1GbMRGQGtR5H+SZQ0bjJDKoEROUxIGr4l6hh1OgkZQjFK3M6GpgSPjeBejnJjKYHFXAmKaJ6ehRnNifJpacWlM+9UOROjtpxTdMv8vKEa5p+OTy65LxnL7V/rQOV8VGe1M6ZBtToMriN1BL9iQptt3D4Kdzl53sOUgFUPDak/fmj/o7yS36ttqniXfdrbCH6yn8ndXZhD8WESb+p36uWuzwQS1ZGXRQTqNRO4tcAodz7GUm68d9Qh738AM+tAQ0f3jNr9kJxl0IDedxNAlOURLLtA6U0bsX0X6gm7uqOUrlQz0ulG3Ufl/hLocFkX0JR2aDYWem1VfAlVPMPJrIr/h8OhX0J1WyFkOr9s/wWimxElIOIOgWAqDMDRN1IM0pwaEDUBRGVHQBRKeKUkOSAKGcFiCoRv2YOgKgacOnS9IHBodIIENU0VuChFogoBxF1QkRdVoAoQkSdEVEJYk0ViCgXEHVkgKgkBEQ1PYVoqNjHQ11+t73AUPfeWSxUu5OKhTojotruBSwU5Me3RkTViKgrIqpERNmAqH0EiKpDQFRbUlioHBD17LECQmURIOpRUUioYoWHct66XVBQzntXDwqqc7ANBbUDRB0ZIGqfA6K6J1hAUBtEVA6Icnw8VPVx1BwClViAqM9uZwRUr4cXABX3Doooo7R1mu37D+ow3pOXDrTPm+5eTIZa+skqlAZri5N3LIxHGn4+AKm1SZ/bQgjZ1lXOttfb/kRZngJKrhNfNjdUJF9V8V8eTySEsphs7/da6sCJGso61FImT/JBEWooy9+IN+DHO+lHoqihmtuoLDx+ivLw3XLqoKAyo0Qzo0Qzo0Qzo0TzA2c5Ppy1iFPrAAAAAElFTkSuQmCC"
                        ></img>
                        <p style={{ display: "inline-block" }}>Reply</p>
                      </div>
                      <hr></hr>
                    </div>

                    // </li>
                    // </ul>
                  ))
                : null}
              {/* show comments end */}
            </div>
          </>
        ) : null}
      </div>
    </>
  );
};

export { BlogDetail };
// {data ? (
//   <>
//     <h1 style={{ marginBottom: "20px", marginTop: "10px" }}>
//       {data.title}
//     </h1>
//     <hr></hr>
//     <p
//       style={{
//         lineHeight: "200%",
//         marginTop: "30px",
//         padding: "0px 70px",
//         // marginBottom: "200px",
//         whiteSpace: "pre-wrap",
//         textAlign: "justify",
//         // textDecoration: "",
//       }}
//     >
//       {data.content}
//     </p>
//     {/* this is a commnet area */}
//     <form onSubmit={handleComment}>
//       <div className="mb-3">
//         <label htmlFor="commentTextarea" className="form-label">
//           Your Comment
//         </label>
//         <textarea
//           className="form-control"
//           id="commentTextarea"
//           rows="4"
//           value={comment}
//           onChange={(e) => {
//             setComment(e.target.value);
//           }}
//         ></textarea>
//       </div>
//       <button type="submit" className="btn btn-primary">
//         Submit Comment
//       </button>
//     </form>
//     {/* <div> */}
//     {/* this is a end area */}
//     {/* show comments start */}
//     {commentArray.length}
//     <p
//       style={{
//         display: "inline-block",
//         paddingLeft: "10px",
//         fontSize: "large",
//         fontWeight: "bold",
//       }}
//     >
//       Comments
//     </p>
//     <div style={{ marginTop: "30px" }}>
//       {commentArray.length
//         ? commentArray.map((e) => (
//             <ul key={e.key}>
//               <li>{e}</li>
//             </ul>
//           ))
//         : null}
//       {/* show comments end */}
//     </div>
//   </>
// ) : null}
