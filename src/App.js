import Home from "./components/pages/Home";
import Map from "./components/pages/Map";
import {Routes, Route, Link} from "react-router-dom" 
import { useData } from "./context/DataContext";
import { useEffect } from "react";
import axios from "axios";
import toast, { Toaster } from "react-hot-toast";

function App() {
  const {setApi,setCityName,cityName,setUrlCity, urlCity} = useData()

  
  const GetApi = async (cityName) => {
    const apiKey = ""; // Your OpenWeathermap api 
    const lang = "tr";
    await axios({
      method: "post",
      url: `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&lang=${lang}&appid=${apiKey}`,
    })
      .then((result) => {
        setApi([result.data]);
      })
      .catch((err) => {
        console.log(err)
        toast.error('Hatalı Girdiniz!')
      });
  }
  
  

  useEffect(() => {
    GetApi(cityName)
  },[cityName])

  const Error = () => {
    return <div className="text-white  text-center ">
      <div className="text-4xl">Not Found!</div>
      <Link to='/'>Anasayfa</Link>
    </div>
}
  
  return (
    <>
      <Toaster/>
      <Routes>
        <Route exact path="" element={<Home/>}/>
        <Route path="/map" element={<Map/>}/>
        <Route path="*" element={<Error/>}/>
      </Routes>
    </>
  );
}

export default App;
