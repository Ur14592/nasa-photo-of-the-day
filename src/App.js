import React from "react";
import "./App.css";
import ImgList from "./components/ImgList";
import styled from 'styled-components';



function App() {
  const Wrapper = styled.section`
  padding: .4em;
  background: #9CADBA;
`;
  const Title = styled.h1`
  color:#A1E8AF;
  
  `;



  return (
    <Wrapper className="App">
      {/* <p>
        Read through the instructions in the README.md file to build your NASA
        app! Have fun !
      </p> */}

      
      <Title>NASA - Astronomy Picture of the Day</Title>

      <ImgList/>
    </Wrapper>
  );
}

export default App;
