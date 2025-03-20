import React from 'react'
import { LuInstagram } from "react-icons/lu";
import { FaXTwitter } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";

function Footer() {
  return (
    <div>
      <div className="footer text-center">

        <div className="footersub gap-2">
          <a href=""><LuInstagram /></a>
          <a href=""><FaXTwitter /></a>
          <a href=""><FaLinkedin /></a>
          
        </div>
        <p className='ppfoot m-0'>© 2025 Quonsah. All Rights Reserved. | Privacy Policy | Terms & Conditions | Contact Us</p>
        <p className='ppfoot'>Developed by jishnu.m</p>

      </div>

    </div>
  )
}

export default Footer
