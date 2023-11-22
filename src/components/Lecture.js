import React, { Fragment } from "react";
import { ImageList } from "./Pages";
// import ListeDeroulante from "./ListeDeroulante";
import "../style/style.css";


const Lecture = () => {
  return (
    <Fragment>
      {/* <ListeDeroulante imageList={ImageList} /> */}
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
{/* 
      <div  className="preview">
        <h3>Preview du prochain chapitre par Sam</h3>

        <TwitterTweetEmbed tweetId={"1681643439396454403"} options={{height: '2200px'}} />
      </div> */}
    </Fragment>
  );
};

export default Lecture;
