import { CDN_URL } from "../utils/constants";

const MenuItems = ({ items }) => {
  return (
    <div>
      {items.map((item) => (
        <div className="grid grid-rows-1 grid-flow-col" key={item.card.info.id}>
          <div className="grid grid-cols-3 gap-2 m-4 p-4  shadow-lg rounded-lg border bg-gray-50 border-gray-300">
            <div className="col-span-2">
              <h4 className="font-bold py-2">{item.card.info.name}</h4>
              <h4 className="font-bold py-2">
                ₹
                {item.card.info.defaultPrice / 100 ||
                  item.card.info.price / 100}{" "}
              </h4>
              <h4 className="font-normal py-2">{item.card.info.description}</h4>
            </div>
            <div className="">
              <div className="absolute mx-16 my-32">
                <button className=" w-20 text-green-700 font-semibold border border-gray-300 hover:shadow-lg bg-white p-2 rounded-lg">
                  Add +
                </button>
              </div>
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

export default MenuItems;
