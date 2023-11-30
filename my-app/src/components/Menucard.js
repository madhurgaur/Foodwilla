import React from "react";
function Menucard(props){
    return (<>
        <div className="menu-item">
        <img src="/Restroimages/subway.jpeg" alt="Dish 1"/>
        <div className="menu-item-details">
            <h3>{props.name}</h3>
            <p>{props.description}</p>
        </div>
        <div className="menu-item-price">{props.price}</div>
    </div>
    <div key={props.id}>
        
        <h1>{props.name}</h1>
        
        <h2>?{props.description}</h2>
        <p>{props.id}</p>
        <p>{props.price}</p>

    </div>
   </> )
}
export default Menucard