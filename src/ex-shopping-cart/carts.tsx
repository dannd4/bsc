import { useShoppingCartContext } from "./shopping-cart.context";

export default function Carts() {
  const { carts } = useShoppingCartContext();

  return (
    <ul>
      {carts.map((item) => (
        <li>
          {item.name} - {item.quantity} * {item.price} = {item.quantity * item.price}
        </li>
      ))}
    </ul>
  );
}
