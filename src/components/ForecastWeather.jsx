import {useState,useEffect} from "react"
import {Button} from "react-bootstrap"

const ForecastWeather = ({ query }) => {

  const [forecastData, SetForecastData] = useState([])

  const getForecast = async () => {
      const ApiKey="571489505576ccd245e4e63d17a70936"
    const response = await fetch(
      
        `https://pro.openweathermap.org/data/2.5/forecast/hourly?q=${query}&appid=`+ ApiKey
    );
    try {
        if (response.ok) {
            let data = await response.json()
            
            SetForecastData(data)
            console.log(forecastData)
        }
        else{
            console.log("error fetch")
        }
    } catch (error) {
        console.log("error")
    }
  };
  return <>
<Button onClick={getForecast} >what's about the next days?</Button>
<div>

</div>


</>;
};

export default ForecastWeather;

