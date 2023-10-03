import React from 'react'
import './Contact.css'
import contact from '../../images/contact.png'
import number from '../../images/number.png'
import email from '../../images/gmail.png'
import insta from '../../images/insta.png'
const Contact = () => {
  return (
    <div className='contact'>
        <div className='c-up row w-100'>
            <div className='c-up-l'>
                <img src={contact} alt="" />
            </div>
            <div className='c-up-r'>
                <h2>Get in Touch</h2>
                <form>
                    <div class="name">
      <label for="name"></label>
      <input type="text" placeholder="Name" name="name" id="name_input" required />
    </div>

    <div class="email">
      <label for="email"></label>
      <input type="email" placeholder="Email" name="email" id="email_input" required />
    </div>


    <div class="telephone">
      <label for="name"></label>
      <input type="text" placeholder="Phone Number" name="telephone" id="telephone_input" required />
    </div>

    <div class="message">
      <label for="message"></label>
      <textarea name="message" placeholder="Message" id="message_input" cols="30" rows="5" required></textarea>
    </div>

    <div class="submit">
      <input type="submit" value="Submit Now" id="form_button" />
    </div>
                </form>
            </div>
        </div>
        <div className='pl-5 pr-5'>  <hr color='white' /></div>
      
        <div className="c-down w-100">
            
            <div>
                <img src={number} alt="" />
                <p>+91-7011112666</p>
            </div>
            <div>
            <img src={email} alt="" />
                <p> info@Ricoz.in</p>
            </div>
            <div>
            <img src={insta} alt="" />
                <p>Ricoz.in</p>
            </div>
        </div>
    </div>
  )
}

export default Contact