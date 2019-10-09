import React from "react";
import "./App.css";
import ImgList from "./components/ImgList";



function App() {

  
  return (
    <div className="App">
      {/* <p>
        Read through the instructions in the README.md file to build your NASA
        app! Have fun !
      </p> */}

      
      <h3>NASA - Astronomy Picture of the Day.</h3>

      <ImgList/>
    </div>
  );
}

export default App;
