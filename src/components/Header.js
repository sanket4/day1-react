import { Link } from "react-router-dom";
import { LOGO_URL } from "../utils/constants";
import { useState } from "react";
import useOnlineStatus from "../utils/useOnlineStatus";

const Header = () => {
  const [btnName, setBtnName] = useState("Login");
  const onlineStatus = useOnlineStatus();

  return (
    <div className="flex justify-between shadow-lg">
      <div className="logo-container">
        <img className="w-44" src={LOGO_URL}></img>
      </div>
      <div className="nav-items">
        <ul className="flex p-6 m-6">
          <li className="p-3  hover:border rounded-lg border-gray-300">
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
          <li className="p-3  hover:border rounded-lg border-gray-300">Cart</li>
          <button
            className="ml-4 px-3 py-2 bg-green-100 rounded-lg shadow-lg hover:border border-gray-300"
            onClick={() => {
              btnName === "Login" ? setBtnName("Logout") : setBtnName("Login");
            }}
          >
            {btnName}
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Header;
