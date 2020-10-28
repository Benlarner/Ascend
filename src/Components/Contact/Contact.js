import React from 'react'
import './Contact.scss';

function Contact() {
    return (
        <section className = "contact opening">
                <div className = "contact__container">
                  <h2 className = "contact__sub">How Can We <span className = "blue">Help You</span></h2>
                  <div className = "contact__submit">
                      <form className = "contact__form" action="mailto:larnerbenjamin@gmail.com" id="usrform" method="POST" enctype="text/plain">
                        <input className = "contact__details" type="text" placeholder="Full Name"></input>
                        <input className = "contact__details" type="text" placeholder="Email Address"></input>
                        <input className = "contact__details" type="text" placeholder="Subject"></input>
                        <input className = "contact__button" type="submit" value = "Submit"></input>
                      </form>
                      <textarea  name="comment" id="usrform" cols="34" rows="12" placeholder="Leave me a message"></textarea>
                  </div>
                </div>
        </section>
    )
}

export default Contact
