import React, { Fragment, useState } from "react";
import { ImageList } from "./Pages";
import ListeDeroulante from "./ListeDeroulante";
import "../style/style.css";

const Lecture = () => {
  return (
    <Fragment>
      <ListeDeroulante imageList={ImageList} />
      {ImageList.map((img) => (
        <div key={img.image} className="page" id={img.id}>
          <img src={img.image} className={img.double ? "d" : "image"} />
          <p  className="num-page">{img.num}</p>
        </div>
      ))}
    </Fragment>
  );
};

export default Lecture;
