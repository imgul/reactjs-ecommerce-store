import { useContext, createContext } from "react";

const AppContext = createContext();

const useProductContext = () => {
  return useContext(AppContext);
};

const author = {
  name: "Gulzaib",
  address: "Lahore",
};

const AppProvider = ({ children }) => {
  return (
    <AppContext.Provider value={{ author }}>{children}</AppContext.Provider>
  );
};

export { AppProvider, AppContext, useProductContext };
