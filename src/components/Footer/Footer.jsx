import React from 'react'
import './Footer.css'
import user_icon from '../../assets/user_icon.svg'

const Footer = () => {
  return (
    <div id= 'footer'  className="footer">
        <div className="footer-top">
            <div className="footer-top-left">
            <p> I'm frontend Developer from Pakistan, with 1+ year of experience in Private companies. </p>
            </div>
            <div className="footer-top-right">
                <div className="footer-email-input">
                    <img src={user_icon} alt="user" loading='lazy' />
                    <input type="email" placeholder='Enter your email' />
                </div>
                <div className="footer-subscribe">subscribe</div>

            </div>
            </div>
            <hr/>
            <div className="footer-bottom">
                <p className="footer--bottom-left">@ 2025 Bushra Aslam.All rights reserved.</p>
                <div className="footer-bottom-right">
                    <p>Term of Services</p>
                    <p>Privacy Policy</p>
                    <p>Connect with me</p>
                </div>
            </div>
        </div>

  )
}

export default Footer
