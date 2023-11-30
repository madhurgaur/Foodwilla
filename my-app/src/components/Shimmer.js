import { shimmer_card_unit } from "../Constant";

const CardShimmer = () => {
    return (
      <div className="shimmer-card">
        <div className="shimmer-img stroke animate"></div>
        <div className="shimmer-title stroke animate"></div>
        <div className="shimmer-tags stroke animate "></div>
        <div className="shimmer-details stroke animate "></div>
      </div>
    );
  };
  const Shimmer = () => {
    return (
      <div className="shimmer-container">
        {/* create a new Array instance using Array() constructor and map through every element of array */}
        {Array(shimmer_card_unit).fill("").map((element, index) => {
          return <CardShimmer key={index} />;
        })}
      </div>
    );
  };
  export default Shimmer;