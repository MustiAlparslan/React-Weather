import { createContext, useContext, useState } from "react";

const Context = createContext();
export const DataProvider = ({ children }) => {
    const [cityName , setCityName] = useState(localStorage.getItem('city') || 'Adana')
    const [api , setApi] = useState([])
    const [icon, setIcon]  = useState('')

  const data = { cityName,setCityName,api,setApi, icon,setIcon};

  return <Context.Provider value={data}>{children}</Context.Provider>;
};

export const useData = () => useContext(Context);