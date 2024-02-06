import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import { CDN_URL } from "../utils/constants";
import RestaurantCategory from "./RestaurantCategory";
import { useState } from "react";

const RestaurantMenu = () => {
  const { resId } = useParams();
  const [showIndex, setShowIndex] = useState(null);

  const resInfo = useRestaurantMenu(resId);
  if (resInfo === null) {
    return <Shimmer />;
  }
  const { name, cuisines, costForTwoMessage } =
    resInfo?.cards[0]?.card?.card?.info;

  const { itemCards } =
    resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card;

  const categories =
    resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
      (cat) =>
        cat?.card?.card?.["@type"] ==
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );

  return (
    <div className="res-card max-w-[800px] max-h-[800px] mb-0 mt-5 mx-auto">
      <div className="title m-4 p-4">
        <h1 className="font-bold py-2 text-lg">{name}</h1>
        <h2 className="font-semibold text-base py-2">
          {cuisines.join(", ")} - {costForTwoMessage}
        </h2>
        <h2 className="font-bold py-2">Menu</h2>
        <div className="">
          {showIndex}
          {categories.map((category, index) => (
            <RestaurantCategory
              key={category?.card?.card?.title}
              data={category?.card?.card}
              showMenu={index === showIndex ? true : false}
              setShowIndex={() => {
                setShowIndex(index);
              }}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
export default RestaurantMenu;
