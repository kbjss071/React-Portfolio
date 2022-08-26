import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import weather from '../assets/images/WeatherDashboard.PNG'
import {Link} from "react-dom"
import '../styles/Portfolio.css';


function Portfolio() {
  return (
    <div className="portfolio">
      <Card style={{ width: '24rem' }}>
      <Card.Img variant="top" src={weather} style={{ width: '24rem' }}/>
      <Card.Body>
        <Card.Title>Weather DashBoard</Card.Title>
        <Card.Text>
          An weather application which fetches data from a weather api <a href="https://openweathermap.org/api" target="_blank">OpenWeather API</a>.
        </Card.Text>
        <Button variant="primary">Github</Button>
        <Button variant="info">App Link</Button>
      </Card.Body>
    </Card>
    <Card style={{ width: '24rem' }}>
      <Card.Img variant="top" src={weather} style={{ width: '24rem' }}/>
      <Card.Body>
        <Card.Title>Weather DashBoard</Card.Title>
        <Card.Text>
          An application using <a href="https://openweathermap.org/api" target="_blank">OpenWeather API to forecast weather in a city</a>
        </Card.Text>
        <Button variant="primary">Github</Button>
        <Button variant="info">App Link</Button>
      </Card.Body>
    </Card>
    <Card style={{ width: '24rem' }}>
      <Card.Img variant="top" src={weather} style={{ width: '24rem' }}/>
      <Card.Body>
        <Card.Title>Weather DashBoard</Card.Title>
        <Card.Text>
          An application using <a href="https://openweathermap.org/api" target="_blank">OpenWeather API to forecast weather in a city</a>
        </Card.Text>
        <Button variant="primary">Github</Button>
        <Button variant="info">App Link</Button>
      </Card.Body>
    </Card>
    <Card style={{ width: '24rem' }}>
      <Card.Img variant="top" src={weather} style={{ width: '24rem' }}/>
      <Card.Body>
        <Card.Title>Weather DashBoard</Card.Title>
        <Card.Text>
          An application using <a href="https://openweathermap.org/api" target="_blank">OpenWeather API to forecast weather in a city</a>
        </Card.Text>
        <Button variant="primary">Github</Button>
        <Button variant="info">App Link</Button>
      </Card.Body>
    </Card>
    <Card style={{ width: '24rem' }}>
      <Card.Img variant="top" src={weather} style={{ width: '24rem' }}/>
      <Card.Body>
        <Card.Title>Weather DashBoard</Card.Title>
        <Card.Text>
          An application using <a href="https://openweathermap.org/api" target="_blank">OpenWeather API to forecast weather in a city</a>
        </Card.Text>
        <Button variant="primary">Github</Button>
        <Button variant="info">App Link</Button>
      </Card.Body>
    </Card>
    <Card style={{ width: '24rem' }}>
      <Card.Img variant="top" src={weather} style={{ width: '24rem' }}/>
      <Card.Body>
        <Card.Title>Weather DashBoard</Card.Title>
        <Card.Text>
          An application using <a href="https://openweathermap.org/api" target="_blank">OpenWeather API to forecast weather in a city</a>
        </Card.Text>
        <Button variant="primary">Github</Button>
        <Button variant="info">App Link</Button>
      </Card.Body>
    </Card>
    
    </div>
  );
}

export default Portfolio;