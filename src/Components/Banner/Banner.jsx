import React from 'react'
import './Banner.css'
import banner1 from '../../images/banner1.png'
import banner2 from '../../images/banner2.png'

const Banner = () => {
  return (
    <div className='banner'>
        <div className="b-left">
<h1>Discover Top Tech <br/>Professionals in Minutes.</h1>
<p>Streamline Your Business Needs with Ricoz's All-in-<br/>One Tech Service Hub.</p>
       <button>Get Started</button>
        </div>
        <div className="b-right">
            <img src={banner1} alt="" />
            <img src={banner2} alt="" />
        </div>
    </div>
  )
}

export default Banner