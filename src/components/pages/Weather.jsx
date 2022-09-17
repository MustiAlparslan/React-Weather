import React, { useEffect, useState} from "react";
import { useData } from "../../context/DataContext";
import { WiDaySunny, WiDaySunnyOvercast  } from "weather-icons-react";
import {MdArrowDropUp} from "react-icons/md"
import NavBar from "../NavBar";
import { Navigate } from "react-router-dom";

function Weather() {
  const { api, setUrlCity } = useData();
  const [active, setActive] = useState(false)

  const formatter = (value) => {
    return Math.round(value.toString().substring(0, 2));
  };

  const handleClick = () => {
    setActive(active == false ? true : false)
  }
 

  return (
      <div  className={`${active ? 'relative h-14 transition-all	duration-500 ease-in-out  from-[#000000] bg-gradient-to-t to-[#001433] opacity-50 mt-auto' : "relative w-full text-white  h-40 mt-auto  from-[#0e0e0f] bg-gradient-to-t to-[#052b5f] flex items-center px-14  opacity-60 transition-all	duration-500 	 ease-in"}   `}>
        <div className=" absolute z-20 right-10 top-[-6px] cursor-pointer" onClick={handleClick}>
            <span className="flex h-6 w-6">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#eed1a7] opacity-75"></span>
              <span className="hover:bg-gray-100 relative inline-flex rounded-full h-6 w-6 bg-gray-500"></span>
            </span>
        </div>
        { !active &&
          api?.map((itm) => (
          <div
            key={itm.id}
            className="w-full flex items-center justify-between"
          >
            <div className="flex  items-center justify-center gap-4">
              <div className="flex flex-col">
                <div className="flex items-center">
                  <h2 className="text-6xl text-semibold">
                    {formatter(itm.main.temp)}
                  </h2>
                  <div>
                    <p className="text-2xl pt-2 text-semibold">°C</p>
                    <p className="first-letter:capitalize">{itm.weather[0]?.description}</p>
                  </div>
                </div>
                <div>
                  <p className="text-3xl font-light">
                    {itm.name}
                    <span className="ml-2 text-xs font-thin italic">
                      {itm.sys.country}
                    </span>
                  </p>
                </div>
              </div>
              <img
                src={`https://openweathermap.org/img/wn/${itm.weather[0]?.icon}@2x.png`}
                alt={itm.weather[0]?.icon}
              />
            </div>
            <div>
              <p className="p-1 border-b-[1px] border-[#ccc] my-3 ">Nem  {itm.main.humidity}°C</p>
              <p className="p-1 border-b-[1px] border-[#ccc] my-3 "><span className="text-xs">Min</span> {formatter(itm.main.temp_min)}°C    |    <span className="text-xs">Max</span> {formatter(itm.main.temp_max)}°C</p>
            </div>
          </div>
        ))}
      </div>
  );
}

export default Weather;
