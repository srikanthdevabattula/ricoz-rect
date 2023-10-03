import React from 'react'
import './WhyChoose.css'
import wc from '../../images/whychoose.png'
import wcr from '../../images/wcr.png'
const WhyChoose = () => {
  return (
    <div className='wc-main'>
        
        <div className='heading'>
        <h2>Why Choose Ricoz?</h2>
        </div>
        <div className='wc-down row'>

            <div className='wc-left'>
                <img src={wc} alt="" className='wcls'/>
            </div>
            <div className='wc-right'>
                <img src={wcr} alt="" className='wcrs' />
            </div>
        </div>
    </div>
  )
}

export default WhyChoose