import React from 'react'

import './Header.css'

import backgroungImage from '../../bgImg.jpg';
import logo from '../../logo_bg.png';
import aboutPhoto from '../../hands.jpg';
import logo2 from '../../logo_trans.png'

import Person2OutlinedIcon from '@mui/icons-material/Person2Outlined';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import InstagramIcon from '@mui/icons-material/Instagram';

const Header = () => {
  return (
    <div>
    <div className='imgBox'>
      <header className='overlay'>
        <div className='subHeader'>
          <div>
            <img src= { logo } alt="logo" />
          </div>
          <div className='middleHeader'>
            <div className='upperHeader'>
              <p className='contact'>Need care at home? For free consultation Contact us!</p>
                < EmailOutlinedIcon className='iconStyle'/>
                < InstagramIcon className='iconStyle'/>
            </div>
            <div className='headerList'>
              <ul className='navBar'>
                <h1 className='home'>Home</h1>
                <h1 className='home'>About</h1>
                <h1 className='home'>Why Us</h1>
                <h1 className='home'>Contact Us</h1>
              </ul>
            </div>
          </div>
          <div className='buttonDiv'>
            <button className='signBtn'>Sign In  
              < Person2OutlinedIcon/>
            </button>
          </div>
        </div>
        <div className='info'>
            <p>Home Care</p>
            <p className='detail'>Empowering well-being through personalized home care for a dignified and comfortable aging experience.</p>
            <button className='startedBtn'>Get Started</button>
        </div>
      </header>
      <img className='bgImage' src= { backgroungImage } alt="background" />
    </div>
    <body>
      <div className='about'>
      <div className='aboutInfo'>
        <p>
          <h1 className='headings'>About</h1>At Home Care, we are here to help you and your loved ones live comfortably at home. Our dedicated team of caregivers understands the importance of being in a familiar and loving environment as you age. With compassion and expertise, we provide personalized care to meet your unique needs. Whether it's assistance with daily activities, companionship, or healthcare support, we are committed to enhancing your quality of life. Trust us to be your partner in creating a warm and safe home where you can thrive and enjoy every moment.</p>
      </div>
      <img className='aboutPhoto' src={ aboutPhoto } alt="" />
      </div>
      <div className='services'>
        <h1 className='headings'>Why Us</h1>
        <div className='whyBox'>
          <div className='box'>1</div>
          <div className='box'>2</div>
          <div className='box'>3</div>
          </div>
      </div>
    </body>
    <footer className='footer'>
      <img src= { logo2 } alt="" />
      <div>
        <h1>Contact Us</h1>
      </div>
      <div>
        <p>Subscribe to my Newsletter</p>
        <input type="email" name="Email" id="Email" placeholder='Enter your email here' />
        <button className='joinBtn'>Join</button>
        
      </div>
    </footer>
    </div>
  )
}

export default Header
