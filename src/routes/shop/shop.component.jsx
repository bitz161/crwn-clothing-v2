import { useContext } from "react";
import "./shop.styles.scss";
import { ProductContext } from "../../context/products.context";
import ProductCard from "../../components/product-card/product-card.component";

const Shop = () => {
  const { products } = useContext(ProductContext);
  return (
    <div className="products-container">
      {products.map((product) => {
        const { id } = product;
        return <ProductCard product={product} key={id} />;
      })}
    </div>
  );
};

export default Shop;
