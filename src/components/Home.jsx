import React from "react";
import Banner from "./Banner";
import { Link } from "react-router-dom";
const Home = () => {
  return (
    <>
      <div
        style={{
          marginTop: "0px",
          // marginBottom: "10px",
          backgroundColor: "#b7dfb8",
          height: "85vh",
          // marginBottom: "100px",
        }}
      >
        <p style={{ color: "#AA336A", display: "inline-block" }}>Crafting</p>
        <p style={{ color: "	#598BAF", display: "inline-block" }}>
          . FEBREARY 12,2016
        </p>

        <h1 style={{ wordWrap: "break-word" }}>
          Blog with the best
          {/* Whatever is begun in anger ends in shame */}
        </h1>
        <div style={{ margin: "auto" }}>
          <p style={{ fontSize: "large", padding: " 5px 15px" }}>
            More bloggers and independent creators choose Blog.com than any
            other blogging tool. Tap into intuitive, flexible tools that put
            writers, bloggers, and creators first.
            {/* Now when I had mastered the language of this water and had come to
            know every trifling feature that bordered the great river as
            familiarly as I knew the letters of the alphabet, I had made a
            valuable acquisition. I still keep in mind a certain wonderful
            sunset which I witnessed when and steamboating */}
          </p>
        </div>

        <div>
          {/* <Banner
            title="I like to reinvest myself"
            art="SCIENCE"
            date=". FEBRUARY12,2016"
          /> */}
          <Banner
            title="Everything is design"
            art="ART"
            date=". FEBRUARY12,2016"
          />
          <Banner
            title="It’s all about experience"
            art="LIFE"
            date=". FEBRUARY12,2016"
          />
          {/* <Banner
          title="This is not my code"
          art="CODING"
          date=". FEBRUARY12,2016"
        /> */}
          <Banner
            title="Support human activity"
            art="ADVOCACY"
            date=". FEBRUARY12,2016"
          />
        </div>
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
