import React from 'react'
import './Stories.css'
import scard1 from '../../images/scard1.png'
import scard2 from '../../images/scard2.png'
import scard3 from '../../images/scard3.png'
import stars from '../../images/stars.png'
const Stories = () => {
  return (
    <div className='stories'>
<h1>Real Stories from Real Professionals</h1>
<div className='s-down row'>
    <div className="s-card">
        <img src={scard1} alt="" />
        <h3>"I recommend this to All"</h3>
        <p>Ricoz connected me with amazing clients. The quality scoring system ensures I work on exciting projects while maintaining my reputation.</p>
        <img src={stars} alt="" />
    </div>
    <div className="s-card">
        <img src={scard2} alt="" />
        <h3>“The Support is Awesome”</h3>
        <p>As a freelancer, Ricoz's instant search feature saves me time. It's a one-stop platform for all my degital marketing needs.</p>
        <img src={stars} alt="" />
    </div>
    <div className="s-card">
        <img src={scard3} alt="" />
        <h3>“A Game Changer For Us”</h3>
        <p>I've learned and earned on Ricoz. The courses are well-designed, and the integrated tools streamline communication with clients.</p>
        <img src={stars} alt="" />
    </div>
</div>
    </div>
  )
}

export default Stories