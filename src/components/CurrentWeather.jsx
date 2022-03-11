import { useState, useEffect } from "react";
import { Card } from "react-bootstrap";

const CurrentWeather = ({ lon,lat }) => {


    const getFullWeather = async () => {
        const ApiKey="571489505576ccd245e4e63d17a70936"
        let response = await fetch(
          `https://api.openweathermap.org/data/2.5/onecall/timemachine?lat=${lat}&lon=${lon}&units=metric&appid=` + ApiKey
        );
        try {
            if (response.ok) {
                let data = await response.json()
                 console.log(data)
                 
            }
            else{
                console.log("error fetch")
            }
        } catch (error) {
            console.log("error")
        }
      }

  return (
    <>
     {/* <div>
      {currentData.name} ({currentData.sys.country}) {currentData.main.temp} ° max{" "}
          {currentData.main.temp_max} ° min {currentData.main.temp_min} °
      </div>
      <div>
          {currentData.weather[0].description}
      </div> */}
      
    </>
  );
}; 

export default CurrentWeather;
