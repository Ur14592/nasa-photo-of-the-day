import React, { useState, useEffect } from "react";
import axios from "axios";
import ImgCard from "./ImgCard";


export default function ImgList() {
    // NOTE: The value given to useState() must be of the same type as your vale is expected to be
    const [imgs, setImg] = useState([]);
  
    useEffect(() => {
      axios
        .get(`https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY`)
        .then(response => {
          // console.log("Nasa Pictures", response.data);
          const imgs = response.data;
          console.log("NASA image", imgs);
          setImg(imgs);
        })
        .catch(error => {
          console.log("The data was not returned", error);
        });
    }, []);
  
    return (
      <div className="img">
            <ImgCard
              title={imgs.title}
              picture={imgs.url}
              date={imgs.date}
              description={imgs.explanation}
            />

      </div>
    );
  }

