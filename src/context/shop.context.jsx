import { createContext, useState } from "react";
import SHOP_DATA from "../shop-data.json";

export const ShopContext = createContext({
  shopData: [],
});

export const ShopProvider = ({ children }) => {
  const [shopData, setShopData] = useState([...SHOP_DATA]);
  const value = { shopData };
  return <ShopContext.Provider value={value}>{children}</ShopContext.Provider>;
};
