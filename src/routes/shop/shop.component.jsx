import { useContext } from "react";
import "./shop.styles.scss";
import { ProductContext } from "../../context/products.context";

const Shop = () => {
  const { products } = useContext(ProductContext);
  return (
    <div>
      {products.map(({ id, name, imageUrl, price }) => {
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
