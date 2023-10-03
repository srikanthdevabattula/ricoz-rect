import React from 'react'
import './Features.css'
import {Swiper, SwiperSlide} from 'swiper/react'
import 'swiper/css'
import arrow from '../../images/arrow.png'
import arrow2 from '../../images/arrow2.png'
import card1 from '../../images/card1.png'
import card2 from '../../images/card2.png'
import card3 from '../../images/card3.png'
import Cards from './Fcards.jsx'

const Features = () => {
  return (
    <div className='features '>
        <div className='container'>
        <div className="f-top"><h2>Explore Our Platform's Unique Features</h2>
        <div className='imgdiv'>
        <img src={arrow2} alt="" />
        <img src={arrow} alt="" /></div></div>
        <div className="f-cards">

        <Swiper
        spaceBetween={30}
        slidesPerView={3}
        grabCursor={true}
        className='portfolio-slider'
        >
           <SwiperSlide>
            <Cards card1={card1} 
            heading='Wide Range of Services' 
            para='Find everything from web development to marketing under one roof. Our platform offers a diverse array of tech services'
            />
           </SwiperSlide>
           <SwiperSlide>
            <Cards card1={card3} 
            heading='Instant Search' 
            para='Get connected to top tech professionals within moments. Our intuitive search function ensures quick access.'
            />
           </SwiperSlide>
           <SwiperSlide>
            <Cards card1={card2} 
            heading='Quality Scoring' 
            para='We maintain high service standards. Our unique scoring system ensures you receive top-notch quality from professionals.'
            />
           </SwiperSlide>
           <SwiperSlide>
            <Cards card1={card3} 
            heading='Integrated Tools' 
            para='Enhance collaboration with built-in tools. Our platform integrates messaging, CRM, and calendars for seamless communication.'
            />
           </SwiperSlide>
           <SwiperSlide>
            <Cards card1={card3} 
            heading='Refer and Earn' 
            para='Spread the word and be rewarded. Invite others to join, and both you and your referrals can enjoy the benefits of our refer-and-earn.'
            />
           </SwiperSlide>
            
        </Swiper>
        </div>
    </div>
    </div>
  )
}

export default Features