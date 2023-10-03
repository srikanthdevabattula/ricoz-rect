import React from 'react'
import './Unlock.css'
import ulc1 from '../../images/ulc1.png'
import ulc2 from '../../images/ulc2.png'
import ulc3 from '../../images/ulc3.png'
const Unlock = () => {
  return (
    <div>
        <div className='unlock'>
            <div className="u-top">
               <div className='t-right'> <h1>Unlock New Skills with Our Courses</h1>
                <p>Learn and Grow at Your Own Pace</p></div>
                <button>Explore More</button>
            </div>
            <div className="u-down row">
                <div className='ulcard'>
                    <img src={ulc1} alt="" />
                    <h3>Web Development Mastery</h3>
                    <h1>₹ 60,000</h1>
                    <p>Master the art of web development with our comprehensive course. Learn coding, design, and deployment.</p>
                    <a href="/">Learn more → </a>
                </div>
            
                <div className='ulcard'>
                    <img src={ulc2} alt="" />
                    <h3>Digital Marketing Fundamentals</h3>
                    <h1>₹ 80,000</h1>
                    <p>Navigate the Digital Landscape. Explore the world of digital marketing. Acquire skills in SEO, social media, and online advertising.</p>
                    <a href="/">Learn more → </a>
                </div>
                <div className='ulcard'>
                    <img src={ulc3} alt="" />
                    <h3>Graphic Design Fundamentals</h3>
                    <h1>₹ 60,000</h1>
                    <p>Unleash your creativity with graphic design. Learn layout, typography, and visual communication.</p>
                    <a href="/">Learn more → </a>
                </div>
                </div>
        </div>
    </div>
  )
}

export default Unlock