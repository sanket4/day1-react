import { CDN_URL } from "../utils/constants";

const RestaurantCard = (props) => {
  const { name, cuisines, avgRating, costForTwo, sla, cloudinaryImageId } =
    props.resData.info;
  return (
    <div className="res-card m-4 p-4 w-[250px] h-[450px] shadow-lg rounded-lg hover:border border-gray-300">
      <img
        className="card-img rounded-lg w-56 h-40"
        alt="Koko chinese"
        src={CDN_URL + cloudinaryImageId}
      ></img>
      <h3 className="font-bold py-2 text-lg">{name}</h3>
      <h4 className="font-semibold text-base py-2">{cuisines.join(", ")}</h4>
      <h4 className="font-bold">⭐ {avgRating}</h4>
      <h4 className="font-bold">{costForTwo}</h4>
      <h4 className="font-bold">{sla.deliveryTime} minutes</h4>
    </div>
  );
};

export default RestaurantCard;
