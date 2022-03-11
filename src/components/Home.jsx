import { Form, Container, Col, Row, Button } from "react-bootstrap";
import {useState, useEffect} from "react"
import CurrentWeather from "./CurrentWeather";
import ForecastWeather from "./ForecastWeather";

const Home = ({ query, setQuery }) => {
    const [lat, setLat] = useState("")
    const [lon, setLon] = useState("")
     

     useEffect(() => {
        getGeo()
    }, [query])
   
    const getGeo = async () => {
      const ApiKey="571489505576ccd245e4e63d17a70936"
      let response = await fetch(
        `http://api.openweathermap.org/geo/1.0/direct?q=${query}&appid=` + ApiKey
      );
      try {
          if (response.ok) {
              let data = await response.json()
               setLat(data[0].lat)
               setLon(data[0].lon)
              
              console.log(data)
               
          }
          else{
              console.log("error fetch")
          }
      } catch (error) {
          console.log("error")
      }
    }

     console.log(lat,lon)
  return (
    <div>
      <Container>
        <Form>
          <Form.Control
            type="search"
            value={query}
            onChange={(e) => {
              setQuery(e.target.value);
            }}
            placeholder="select your city"
          ></Form.Control>
        </Form>
        <Button onClick={getGeo}>Search</Button>
      </Container>
      <Container>
        <Row>
          <Col md={6}>
            Now
            { <CurrentWeather lat={lat} lon={lon} /> }
          </Col>
          <Col md={6}>
            {<ForecastWeather lat={lat} lon={lon}  /> }
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Home;
