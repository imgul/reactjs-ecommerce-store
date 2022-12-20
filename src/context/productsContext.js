import { createContext } from "react";

const AppContext = createContext();

const AppProvider = ({ children }) => {
  const author = {
    name: "Gulzaib",
    address: "Lahore",
  };
  return (
    <AppContext.Provider value={{ author }}>{children}</AppContext.Provider>
  );
};

export { AppProvider, AppContext };
