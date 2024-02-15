import { CDN_URL } from "../utils/constants";

const RestaurantCard = (props) => {
  const { name, cuisines, avgRating, costForTwo, sla, cloudinaryImageId } =
    props.resData.info;
  return (
    <div
      data-testid="resCard"
      className="res-card m-4 p-4 w-[250px] h-[400px] shadow-lg rounded-lg hover:border border-gray-300"
    >
      <img
        className="card-img rounded-lg w-56 h-40"
        alt="Koko chinese"
        src={CDN_URL + cloudinaryImageId}
      ></img>
      <h3 className="font-bold py-2 text-lg">{name}</h3>
      <h4 className="font-semibold text-base py-2">{cuisines.join(", ")}</h4>
      <h4 className="font-bold">⭐ {avgRating}</h4>
      <h4 className="font-bold">{costForTwo}</h4>
      <h4 className="font-bold">{sla.slaString}</h4>
    </div>
  );
};

export const withPromotedLabel = (RestaurantCard) => {
  return (props) => {
    return (
      <div>
        <label className="absolute bg-red-400 text-white rounded-lg m-2 p-2">
          {props?.resData?.info?.aggregatedDiscountInfoV3?.header}
        </label>
        <RestaurantCard {...props} />
      </div>
    );
  };
};

export default RestaurantCard;
