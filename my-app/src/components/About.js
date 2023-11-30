import React from "react";
// import { Link } from "react-router-dom";
import { Link } from "react-router-dom";
// import {  useParams } from "react-router-dom";
function About() {
  // const params = useParams();
  // console.log(params);
  return (
    <>
    <div className="aboutContainer">
      {/* <p>{params.id} </p> */}
      <div className="aboutleft">
        
          <h1>Get the best  <br/>food in your town <br/><span>Tasty and Healthy</span></h1>

          <h2>
            "We doesn't deliver only food we deliver love with it"
          </h2>
         
      </div>
      <div className="aboutright">
        <img   src= "/Restroimages/pizza.webp" alt="img"/>
      </div>
    </div>
    <div className="aboutdev">
      <Link to="/aboutDeveloper">
        About Developer
      </Link>
    </div>
    </>
  );
}
export default About;