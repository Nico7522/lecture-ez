import React, { Fragment } from "react";
import { ImageList } from "./Pages";
import ListeDeroulante from "./ListeDeroulante";
import "../style/style.css";
import { TwitterVideoEmbed } from "react-twitter-embed";

const Lecture = () => {
  return (
    <Fragment>
      <ListeDeroulante imageList={ImageList} />
      {ImageList.map((img) => (
        <div key={img.id} className="page" id={img.id}>
          <img
            src={img.image}
            alt={img.id}
            className={img.double ? "d" : "image"}
          />
          <p className="num-page">{img.num}</p>
        </div>
      ))}

      <div className="preview">
        <h3>Preview du prochain chapitre</h3>
        <TwitterVideoEmbed
          id={"1679147795687809024"}
          options={{
            height: "100px"
          }}
          className="video-preview"
        />
      </div>
    </Fragment>
  );
};

export default Lecture;
