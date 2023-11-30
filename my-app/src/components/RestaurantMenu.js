// import { useEffect } from "react";
import { useParams } from "react-router-dom";
import restaurantM from "./ConstantRestmenu";
import Menucard from "./Menucard";

function RestaurantMenu() {
  const { id } = useParams();
  // const[restaurantM]=useState(restaurantM);

  // useEffect(()=>{
  //     getRestaurantInfo();
  // },[])

  // async function getRestaurantInfo(){
  //     const data = await fetch(

  //     );
  //     const json = await data.json()
  // }
  var a = { id };
  console.log(a);
  var b = a.id;
  console.log(b);


  const data =restaurantM;
  //      or  below code
  // const data = restaurantM.filter(function (item) {
  //   if (item.id == b) {
  //     console.log("found");
  //     return item;
  //   }
  // });
  var menuItem = data[b-1]?.menu;
  var restroName= data[b-1]?.name;
  console.log(data);
  console.log(menuItem);
  return (
    <div>
      <h1>
        Hello Madhur id is {b} {restroName}
      </h1>
      <p>{menuItem.name}</p>
      <div>
        {menuItem.map((restromenu) => {
          return <Menucard {...restromenu} />;
        })}
      </div>
    </div>
  );
}
export default RestaurantMenu;
