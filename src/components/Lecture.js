import React, { Fragment } from "react";
// import { ImageList } from "./Pages";
// import ListeDeroulante from "./ListeDeroulante";
import "../style/style.css";
import { useEffect } from "react";
import { useState } from "react";



const Lecture = () => {
   const [arrayPage, setArrayPage] = useState([])
  useEffect(() => {
    let i = 1;
    let imgNumber = 1;
    let pageNumber = 1;
    let idNumber = 1;
    let temp = [];
    while (i < 20) {
   
      // if (i === 21) {
      //   pageNumber = 1;
      //   idNumber = 1;
      // }
      temp.push({
        imgUrl: `${process.env.REACT_APP_IMG_URL}${imgNumber}.png`,
        num : pageNumber,
        id: idNumber,
        double: i === 16 ? true : false
      })
      pageNumber++;
      imgNumber++;
      idNumber++;
      i++;
    }
  
    setArrayPage(temp)
  }, [])
  return (
    <Fragment>
      {/* <ListeDeroulante imageList={ImageList} /> */}
 
      {arrayPage.map((img) => (
        <div key={img.id} className="page" id={img.id}>
          <img
            src={img.imgUrl}
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
