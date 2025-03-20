import React from 'react'
import { LuInstagram } from "react-icons/lu";
import { FaXTwitter } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";

function Footer() {
  return (
    <div>
      <div className="footer text-center">

        <div className="footersub gap-2">
          <a href="https://www.instagram.com/jishnu?igsh=MTA5cG5jZzkxO=="><LuInstagram /></a>
          <a href="https://x.com/quonsah?t=J9NEgcXjm-KTaAJ0B_uv"><FaXTwitter /></a>
          <a href="https://www.linkedin.com/in/jisha9700a324?Apage%3Ad_flagship3_profile_view_base_contact_details%3B4kJ5ugxUTnKK92009chomw%3D%3D"><FaLinkedin /></a>
          
        </div>
        <p className='ppfoot m-0'>© 2025 Quonsah. All Rights Reserved. | Privacy Policy | Terms & Conditions | Contact Us</p>
        <p className='ppfoot'>Developed by jishnu.m</p>

      </div>

    </div>
  )
}

export default Footer
