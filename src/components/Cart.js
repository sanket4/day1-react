import { useSelector } from "react-redux";
import MenuItems from "./MenuItems";

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);
  return (
    <div className="text-center m-5 p-5">
      <MenuItems items={cartItems} />
    </div>
  );
};

export default Cart;
