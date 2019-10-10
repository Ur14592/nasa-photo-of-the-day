import React from "react";
import styled from 'styled-components';

const APODTitle = styled.h2`
  color: #A1E8AF;
  
`;
const Date = styled.h4`
  color: #A1E8AF;
  
`;

const Image = styled.div`
transition: 0.2s ease-in;
opacity: 0.5;
margin-left: auto;
margin-right: auto;
width: 57.3%;

&:hover {
  opacity: 1;

}
`;
const About = styled.h2`
  color: #3B3B64;
  
`;
const Des = styled.p`
  color: #A1E8AF;
  
`;

const ImgCard = props => {
    return (
      <div className="Img-list " key={props.id}>
        <APODTitle>{props.title}</APODTitle>
        <Date>{props.date}</Date>
        <Image>
          <img src={props.picture} alt="Nasa APOD"/>
        </Image>
          <About>About the picture:</About>
          <Des>{props.description}</Des>
        </div>
    );
  };
export default ImgCard;
