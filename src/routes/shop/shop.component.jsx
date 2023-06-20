import { useContext } from "react";
import "./shop.styles.scss";
import { ShopContext } from "../../context/shop.context";

const Shop = () => {
  const { shopData } = useContext(ShopContext);
  return (
    <div>
      {shopData.map(({ id, name, imageUrl, price }) => {
        return (
          <div key={id}>
            <h1>{name}</h1>
          </div>
        );
      })}
    </div>
  );
};

export default Shop;
