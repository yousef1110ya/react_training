import React from 'react';
import './Login.css';
import LetterGlitch from '../Background/LitterGlitch';
import PixelCard from './Card';
// import Aurora from '../Background/Aurora';
import FuzzyText from '../texts/FuzzyText';
  

  




export default function Login() {
  return(
      <div className="login-wrapper">
          <div className="background">
              <LetterGlitch
  glitchSpeed={50}
  centerVignette={true}
  outerVignette={false}
  smooth={true}
        />
      {/* <Aurora
  colorStops={["#3A29FF", "#FF94B4", "#FF3232"]}
  blend={0.5}
  amplitude={1.0}
  speed={0.5}
/> */}
      </div>
      <div className="anotherwrapper">
      <div className="cardwrapper">
        <PixelCard variant="pink">
      <div className="logincard">
          <FuzzyText 
  baseIntensity={0.2} 
  // hoverIntensity={hoverIntensity} 
  // enableHover={enableHover}
>
  login
</FuzzyText>
      <form>
        <label>
          <p>Username</p>
          <input type="text" />
        </label>
        <label>
          <p>Password</p>
          <input type="password" />
        </label>
        <div>
          <button type="submit">Submit</button>
        </div>
      </form>
          </div>
        </PixelCard>
        </div>
        </div>
        
              
      
    </div>
  )
}