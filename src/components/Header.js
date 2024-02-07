import { Link } from "react-router-dom";
import { LOGO_URL } from "../utils/constants";
import { useContext, useState } from "react";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";

const Header = () => {
  const [btnName, setBtnName] = useState("Login");
  const userName = useContext(UserContext);
  const onlineStatus = useOnlineStatus();

  const cartItems = useSelector((store) => store.cart.items);
  console.log(cartItems);

  return (
    <div className="flex justify-between shadow-lg">
      <div className="logo-container">
        <img className="w-44" src={LOGO_URL}></img>
      </div>
      <div className="nav-items">
        <ul className="flex p-6 m-6">
          <li className="p-3  rounded-lg border-gray-300">
            Online Status : {onlineStatus ? "🟢" : "🔴"}
          </li>
          <li className="p-3  hover:border rounded-lg border-gray-300">
            <Link to="/">Home</Link>
          </li>
          <li className="p-3   hover:border rounded-lg border-gray-300">
            <Link to="/about">About Us</Link>
          </li>
          <li className="p-3  hover:border rounded-lg border-gray-300">
            <Link to="/contact">Contact Us</Link>
          </li>
          <li className="p-3  hover:border rounded-lg border-gray-300">
            <Link to="/grocery">Grocery</Link>
          </li>
          <li className="p-3 border rounded-lg font-bold border-gray-300">
            <Link to="/cart"> Cart - ({cartItems.length} items)</Link>
          </li>
          <button
            className="ml-4 px-3 py-2 bg-green-100 rounded-lg shadow-lg hover:border border-gray-300"
            onClick={() => {
              btnName === "Login" ? setBtnName("Logout") : setBtnName("Login");
            }}
          >
            {btnName}
          </button>
          <li className="p-3 font-bold hover:border rounded-lg border-gray-300">
            <div>User - {userName?.loggedInUser} </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
