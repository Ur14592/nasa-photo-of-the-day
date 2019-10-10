import React, { useState, useEffect } from "react";
import axios from "axios";
import ImgCard from "./ImgCard";
import styled from 'styled-components';

export const PageTemplate = styled.div`
  background: ${props => (props.primary ? "#FFFFFF" : "#3366CC")};
  color: ${props => (props.primary ? "#FFFFFF" : "#000000")};
  border: 0;
  margin: 5px 10px;
  transition: 0.5s ease-in;
  border: ${props =>
    props.primary ? "2px solid #000000" : "2px solid #2a2223"};
  &:hover {
    border: ${props =>
      props.primary ? "2px solid #FFFFFF" : "2px solid #FFFFFF"};
  }
`;

export default function ImgList() {
    // NOTE: The value given to useState() must be of the same type as your vale is expected to be
    const [imgs, setImg] = useState([]);
  
    useEffect(() => {
      axios
        .get(`https://api.nasa.gov/planetary/apod?api_key=HGL2qxd9AoohvODt6T5BLhTKYIFWK6HLWv8IWDbL
        `)
        .then(response => {
          // console.log("Nasa Pictures", response.data);
          const imgs = response.data;
          // console.log("NASA image", imgs);
          setImg(imgs);
        })
        .catch(error => {
          console.log("The data was not returned", error);
        });
    }, []);
  
    
  


    return (
      <PageTemplate >
            <ImgCard 
              title={imgs.title}
              picture={imgs.url}
              date={imgs.date}
              description={imgs.explanation}
            />

      </PageTemplate>
    );
  }

