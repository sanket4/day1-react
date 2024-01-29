import RestaurantCard from "./RestaurantCard";
import resObject from "../utils/mockData";

const Body = () => {
  return (
    <div className="body">
      <div className="searchBar">Search</div>
      <div className="res-container">
        {resObject.map((res) => (
          <RestaurantCard key={res.info.id} resData={res} />
        ))}
      </div>
    </div>
  );
};

export default Body;
