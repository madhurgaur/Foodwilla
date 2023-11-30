import React from "react";
import { Link } from "react-router-dom";
// import { restaurantLists } from "../Constant";
import RestaurantCard from "./RestaurantCard";
// import { swiggy_api_URL } from "../Constant";
import restaurants from "./data";
import Shimmer from "./Shimmer";
import { useState } from "react";
import toprestro from "./toprestro";
// import { useEffect } from "react";
// import { IMG_CDN_URL } from "../Constant";


const Body = () => {
  const [searchText, setSearchText] = useState("");
  // const [showShimmer, setShowShimmer] = useState(true);
  const [filteredRestraunt, setfilteredRestraunt] = useState(restaurants);
  const [allRestaurants, setallRestaurants] = useState(restaurants);
  const [toprest,setToprest]=useState(toprestro);


  function filterData(searchText) {
    const filterData = allRestaurants.filter((restro) =>
      restro?.info?.name.toLowerCase().includes(searchText.toLowerCase())
    );
    console.log(filterData);
    return filterData;
  }
  // setTimeout(() => {
  //   <Shimmer/>
  // }, "5000");
  //restro just act as variable name given to all incoming restraunts

  // useEffect(() => {
  //   //Api Call
  //   getRestraunts();
  // }, []);

  //main thing for fetch
  // async function getRestraunts() {
  //   const data = await fetch(
  //     "https://www.swiggy.com/dapi/restaurants/list/v5?lat=26.7672817&lng=83.37493219999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
  //   );
  //   const json = await data.json();

  //way1
  // const array = json.data.cards;
  // for (let i = 0; i < array.length; i++) {
  //   const element = array[i];
  //   const cardel = element.card.card;
  //   if (cardel["gridElements"]) {
  //     const found = cardel.gridElements.infoWithStyle.restaurants;
  //     console.log(found);
  //     setfilteredRestraunt(found);
  //     setallRestaurants(found);
  //   }
  // }

  //way 2
  //   console.log(json.data);
  //   setallRestaurants(
  //     json.data.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants
  //   );
  //   setfilteredRestraunt(
  //     json.data.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants
  //   );
  //   if (data.status === 200) {
  //     setShowShimmer(false);
  //   }
  // }

  // setallRestaurants(restaurants);
  // setfilteredRestraunt(restaurants);

  // console.log(restaurants.info.id)
  console.log( restaurants?.info?.id)
  return (
    <>
      <div className="search-container">
        <input
          type="text"
          className="search-input"
          placeholder="Search"
          value={searchText}
          onChange={(e) => {
            setSearchText(e.target.value);
          }}
        />
        {/* <h1>{searchClicked}</h1> */}
        <button
          className="search-btn"
          onClick={() => {
            const data = filterData(searchText);
            console.log(data);
            setfilteredRestraunt(function(){
              return data;
            });
            console.log(filteredRestraunt);
          }}
        >
          Search
        </button>
      </div>
      {/* {showShimmer && <Shimmer />} */}

      {allRestaurants?.length !== 0 && (
        <>
          <div className="restaurant-list">
            {filteredRestraunt &&
              filteredRestraunt.map((restro) => {
                return(<Link className="cardLink"
                  to={"/restaurant/" + restro?.info?.id }
                  key={restaurants?.info?.id} >
                  
                <RestaurantCard {...restro.info} key={restro.info.id} /> 
                  </Link> )
              })}
          </div>

          <div>
            <hr/>
            <h2 className="topRestroheading">Top Picks Restaurant for You</h2>
           <div className="topRestro">{
            toprest.map((restro)=>{
              return(
                <RestaurantCard  {...restro.top} key={restro.top.id}/>
              )
            })
           }</div>

          </div>
        </>
      )}
    </>
  );
};
export default Body;

// const [searchClicked , setSearchClicked]= useState("false")
// {()=>{
//     //    if(searchClicked==="true"){
//     //     setSearchClicked("false")
//     //    }else{
//     //     setSearchClicked("true")
//     //    }
// searchClicked==="true"?setSearchClicked("false"):setSearchClicked("true")
// https://www.swiggy.com/dapi/restaurants/list/v5?lat=25.98002568581261&lng=79.44358672946692&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING
