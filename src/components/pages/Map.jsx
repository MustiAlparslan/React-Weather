import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import TurkeyMap from "turkey-map-react";
import { useData } from "../../context/DataContext";
import NavBar from "../NavBar";
import Weather from "./Weather";

function Map() {
  const { setCityName } = useData();
  const [name, setName] = useState("")
  const navigate = useNavigate()
  

  const handleClick = (name) => {
    setCityName(name.name);
    localStorage.setItem('city', name.name)
  };


  return (
    <div className="h-screen flex flex-col">
      <NavBar/>
      <div className="max-w-[700px] w-full  m-auto">
        <TurkeyMap
          customStyle={{ idleColor: 'rgb(156 156 216)',  hoverColor: "#dc3522"}}
          onClick={(name) => handleClick(name)}
        />
      </div>
      <Weather/>
    </div>
  );
}

export default Map;
