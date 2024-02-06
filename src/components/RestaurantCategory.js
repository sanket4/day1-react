import { useState } from "react";
import MenuItems from "./MenuItems";

const RestaurantCategory = ({ data, showMenu, setShowIndex }) => {
  //   const [showMenu, setShowMenu] = useState(false);
  const handleClick = () => {
    setShowIndex();
  };

  return (
    <div>
      <div className="w-full mx-auto my-4 p-4 bg-gray-100 shadow-lg ">
        <div
          className=" flex justify-between cursor-pointer"
          onClick={handleClick}
        >
          <span className="font-bold text-lg">
            {data.title} ({data.itemCards.length})
          </span>
          {showMenu && <span>⬆️</span>}
          {!showMenu && <span>⬇️</span>}
        </div>
        {showMenu && <MenuItems items={data?.itemCards} />}
      </div>
    </div>
  );
};

export default RestaurantCategory;
