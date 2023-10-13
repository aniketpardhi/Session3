import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import { useEffect, useState } from "react";
import "./Weather.css";
import PlaceIcon from "@mui/icons-material/Place";
import TimerIcon from "@mui/icons-material/Timer";
import wind_icon from "../Assest/wind.png";
import humidity_icon from "../Assest/humidity.png";
import iconss from "../Assest/drizzle.png";

function WeatherApp() {
  const apiKey = "566f723880a1d3473a7bf9df6658c473";
  const [inputCity, setInputCity] = useState("");
  const [data, setData] = useState([]);

  const getWetherDetails = (cityName) => {
    if (!cityName) return;
    const apiURL =
      "https://api.openweathermap.org/data/2.5/weather?q=" +
      cityName +
      "&appid=" +
      apiKey;
    axios
      .get(apiURL)
      .then((res) => {
        console.log("response", res.data);
        setData(res.data);
      })
      .catch((err) => {
        console.log("err", err);
      });
  };

  const handleChangeInput = (e) => {
    console.log("value", e.target.value);
    setInputCity(e.target.value);
  };

  const handleSearch = () => {
    getWetherDetails(inputCity);
  };

  return (
    <>
      <div className="container-box">
        <div className="box">
          <div className="searchBox">
            <div className="inputbox">
              <input
                type="text"
                placeholder="Search For city"
                onChange={handleChangeInput}
              />
            </div>
            <div className="button">
              <button onClick={handleSearch}>Search</button>
            </div>
          </div>

          <div className="icon">
            <div className="icon-location">
              <PlaceIcon style={{ fontSize: "38px", color: "white" }} />
              <div className="location-name">
                <h5>{data.name}</h5>
              </div>
            </div>
            <div className="icon-time">
              <TimerIcon style={{ fontSize: "38px", color: "white" }} />
              <div className="time">
                <h5>4:00 am</h5>
              </div>
            </div>
          </div>

          <div className="temp">
            <h3>{(data?.main?.temp - 273.15).toFixed(2)} °C</h3>
            <h4>Mostly Clear</h4>
          </div>
          <div className="status">
            <div className="speed">
              <img src={wind_icon} alt="" />
              <h3></h3>
            </div>

            <div className="humidity">
              <img src={humidity_icon} alt="" />
              
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default WeatherApp;
 
