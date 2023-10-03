import React from 'react'
import logo from '../../images/ricoz.png'
import './End.css'
import social from '../../images/social.png'
const End = () => {
  return (
    <div className='end-com'>
    <div className="end row">
        <div className="end-left">
            <img src={logo} alt="" />
            <div className='end-services'>
                <h5>Company</h5>
                <ul>
                    <li>About Us</li>
                    <li>Services</li>
                    <li>Courses</li>
                    <li>Contact Us</li>
                </ul>
            </div>
            <div className='end-services'>
                <h5>Services</h5>
                <ul>
                    <li>Web Development</li>
                    <li>Performance Marketing</li>
                    <li>Socal Media Marketing</li>
                    <li>App Development</li>
                    <li>Graphic Design</li>
                    <li>UI/UX Design</li>
                </ul>
            </div>
        </div>
        <div className="end-right">
            <div>
                <h6>Email Us</h6>
                <a href='/'>Ricoz1234@gmail.com</a>
                <br />
                <br></br>
                <h6>Contact Us</h6>
                <p>+91 9098885099</p>
                <br />
                <img src={social} alt="" />
            </div>
            <div>
                <h4 className='eh4'>SUBSCRIBE TO NEWSLETTER</h4>
                <br />
                
                <div class="input-group mb-3">
  <input type="text" class="form-control end-mail" placeholder=" Enter email" aria-label="" aria-describedby="basic-addon2" />
  <div class="input-group-append">
    <span class="input-group-text s-btn" id="basic-addon2 ">@</span>
  </div>
</div> </div>
            
        </div>
    </div>
    <div className='hr-d'>
    <hr color='white'/>
    <p>© 2023 Ricoz. All Rights Reserved.</p>
    </div>
    </div>
  )
}

export default End