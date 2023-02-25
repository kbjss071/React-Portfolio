/* eslint-disable react/jsx-no-target-blank */
import React from 'react';
import weather from '../../assets/images/WeatherDashboard.PNG'
import dailyDose from '../../assets/images/profile-page.png'
import troogle from '../../assets/images/Troogle_Index.png'
import noteTaker from '../../assets/images/Notetaker.PNG'
import employeeTracker from '../../assets/images/employeeTracker.PNG'
import socialNetworkAPI from '../../assets/images/socialNetworkAPI.PNG'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import './Portfolio.css';


function Portfolio() {

  return (
    <div>
      <div>
        <h1 className='portfolioTitle'>Portfolio</h1>
      </div>
      <div className="portfolio">
        <Card style={{ width: '24rem' }}>
        <Card.Img className="photo" variant="top" src={weather} style={{ width: '24rem' }}/>
          <Card.Body>
            <Card.Title>Weather DashBoard</Card.Title>
            <Card.Text>
              An weather application which fetches data from a weather api <a href="https://openweathermap.org/api" target="_blank">OpenWeather API</a>.
            </Card.Text>
            <Button variant="primary"><a className='anchor' href="https://github.com/kbjss071/weatherDashboard" target="_blank">Github</a></Button>
            <Button variant="info"><a className='anchor' href="https://kbjss071.github.io/weatherDashboard/" target="_blank">App Link</a></Button>
          </Card.Body>
        </Card>

      <Card style={{ width: '24rem' }}>
        <Card.Img className="photo" variant="top" src={dailyDose} style={{ width: '24rem' }}/>
          <Card.Body>
            <Card.Title>Daily Does of Code</Card.Title>
            <Card.Text>
              A full-stack application that allows user to sign up or sign in to access daily coding challenges for junior developer.
            </Card.Text>
            <Button variant="primary"><a className='anchor' href="https://github.com/kbjss071/daily-dose-of-code" target="_blank">Github</a></Button>
            <Button variant="info"><a className='anchor' href="https://daily-challenges-kbjss071.herokuapp.com/" target="_blank">App Link</a></Button>
          </Card.Body>
        </Card>

      <Card style={{ width: '24rem' }}>
        <Card.Img className="photo" variant="top" src={troogle} style={{ width: '24rem' }}/>
          <Card.Body>
            <Card.Title>Troogle</Card.Title>
            <Card.Text>
              A interactive website that allows user to search for hotels in destination. And the app provides a currency calculator.
            </Card.Text>
            <Button variant="primary"><a className='anchor' href="https://github.com/kbjss071/travel-website" target="_blank">Github</a></Button>
            <Button variant="info"><a className='anchor' href="https://kbjss071.github.io/travel-website/" target="_blank">App Link</a></Button>
          </Card.Body>
        </Card>

      <Card style={{ width: '24rem' }}>
        <Card.Img className="photo" variant="top" src={noteTaker} style={{ width: '24rem' }}/>
          <Card.Body>
            <Card.Title>NoteTaker</Card.Title>
            <Card.Text>
              An website application that allows user to get, save, and delete their notes.
            </Card.Text>
            <Button variant="primary"><a className='anchor' href="https://github.com/kbjss071/NoteTaker" target="_blank">Github</a></Button>
            <Button variant="info"><a className='anchor' href="https://notetaker-kbjss071.herokuapp.com/" target="_blank">App Link</a></Button>
          </Card.Body>
        </Card>

      <Card style={{ width: '24rem' }}>
        <Card.Img className="photo" variant="top" src={employeeTracker} style={{ width: '24rem' }}/>
          <Card.Body>
            <Card.Title>Employee Tracker</Card.Title>
            <Card.Text>
              A backend application using MySQL that allows user to interact with SQL database.
            </Card.Text>
            <Button variant="primary"><a className='anchor' href="https://github.com/kbjss071/EmployeeTracker" target="_blank">Github</a></Button>
          </Card.Body>
        </Card>

      <Card style={{ width: '24rem' }}>
          <Card.Img className="photo" variant="top" src={socialNetworkAPI} style={{ width: '24rem' }}/>
          <Card.Body>
            <Card.Title>Social Network API</Card.Title>
            <Card.Text>
              A backend API using MongoDB that allows user to interact with NoSQL database by using API design platform.
            </Card.Text>
            <Button variant="primary"><a className='anchor' href="https://github.com/kbjss071/SocialNetworkAPI" target="_blank">Github</a></Button>
          </Card.Body>
        </Card>
    
    
      </div>
    </div>
  );
}

export default Portfolio;