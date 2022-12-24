import { useEffect, useContext, createContext } from "react";
import axios from "axios";

const AppContext = createContext();

const API = "https://api.pujakaitem.com/api/products";

const useProductContext = () => {
  return useContext(AppContext);
};

const author = {
  name: "Gulzaib",
  address: "Lahore",
};

const AppProvider = ({ children }) => {
  const getProducts = async (url) => {
    const res = await axios.get(url);
    const products = await res.data;
    console.log(
      "🚀 ~ file: productsContext.js:21 ~ getProducts ~ products",
      products
    );
  };

  useEffect(() => {
    getProducts(API);
  }, []);

  return (
    <AppContext.Provider value={{ author }}>{children}</AppContext.Provider>
  );
};

export { AppProvider, AppContext, useProductContext };
