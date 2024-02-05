import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import { CDN_URL } from "../utils/constants";

const RestaurantMenu = () => {
  const { resId } = useParams();

  const resInfo = useRestaurantMenu(resId);
  if (resInfo === null) {
    return <Shimmer />;
  }
  const { name, cuisines, costForTwoMessage } =
    resInfo?.cards[0]?.card?.card?.info;

  const { itemCards } =
    resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card;

  console.log("itemCards", itemCards);

  return (
    <div className="res-card max-w-[800px] max-h-[800px] mb-0 mt-5 mx-auto">
      <div className="title m-4 p-4">
        <h1 className="font-bold py-2 text-lg">{name}</h1>
        <h2 className="font-semibold text-base py-2">
          {cuisines.join(", ")} - {costForTwoMessage}
        </h2>
        <h2 className="font-bold py-2">Menu</h2>
      </div>

      {itemCards.map((item) => (
        <div className="grid grid-rows-1 grid-flow-col" key={item.card.info.id}>
          <div className="grid grid-cols-3 gap-2 m-4 p-4  shadow-lg rounded-lg border border-gray-300">
            <div className="col-span-2">
              <h4 className="font-bold py-2">{item.card.info.name}</h4>
              <h4 className="font-bold py-2">
                Cost - Rs.{" "}
                {item.card.info.defaultPrice / 100 ||
                  item.card.info.price / 100}{" "}
              </h4>
              <h4 className="font-normal py-2">{item.card.info.description}</h4>
            </div>
            <div className="">
              <img
                className="w-56 h-40 rounded-xl p-2"
                src={CDN_URL + item.card.info.imageId}
              ></img>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};
export default RestaurantMenu;
