import React from 'react';
// Here we import the Navbar.css file to grant access to some additional classNames
import './About.css';
import proPic from '../../assets/images/Profile.jpg'
import Skill from "../Skills"

function About() {
  return (
    <div className="about">
      <div>
        <img src={proPic} className="profile" alt='ProfPic'/>
      </div>
      <div>
        <div className='welcome'>
          <h1>Hi, I'm Jin Kang,</h1>
        </div>
        <div className='short'>
          <p>as aspiring software engineer</p>
        </div>
        <div className='description'>
          <h2>About Me</h2>
          <p>I graduated from University of North Carolina at Greensboro with a BS in Mathematics with Statistics and a minor in Computer Science during my college year.
            I have experience using Java and Python to solve problems during college years. And I currently enrolled in Georgia Tech Coding Bootcamp to galvanize and reduce the gap betweem CS minor and software developer.
            Besides, I'm passionate and willing to learn any new skills or techniques.
          </p>
          <p>In my free time, I enjoy playing baseball, soccer, and video games. Also, I spend time with my family.</p>
        </div>
      <Skill />
    </div>
  </div>
  );
}

export default About;