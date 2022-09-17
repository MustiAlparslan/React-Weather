import React, {  useState } from "react";
import toast from "react-hot-toast";
import { useData } from "../context/DataContext";

function Forms() {
  const [city, setCity] = useState("");
  const { setCityName, api } = useData();
  const [error,setError] = useState('false')

  const handleSubmit = (e) => {
    e.preventDefault();
    if(city.length > 0){
      setCityName(city);
      localStorage.setItem("city", city);
      setCity('')
      setError(false)    
    }else{
      setError(true)    
      toast.error('Lütfen Şehir Girin!')
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit} className="w-[500px] h-[390px] flex gap-2 items-center ">
           <input
              className="placeholder-black w-full border h-9 px-2 rounded outline-none bg-gray-300 opacity-80"
              type="text"
              value={city}
              placeholder="Şehir Giriniz.."
              onChange={(e) => setCity(e.target.value)}
            />
      </form>
    </div>
  );
}

export default Forms;
