import React from 'react'
import "./footer.css"
import twitter from "../../assets/twitter.png"
import facebook from "../../assets/facebook.png"
import linkedin from "../../assets/linkedin.png"
import pinterest from "../../assets/pinterest.png"
import instagram from "../../assets/instagram.png"
import language from "../../assets/language.png"
import coin from "../../assets/coin.png"
import accsessibility from "../../assets/accessibility.png"

const Footer = () => {
  return (
    <div className='footer'>
      <div className='container'>
        <div className='top'>
          <div className='item'>
          <h2>Categories</h2>
            <span>Graphics & Design</span>
            <span>Digital Marketing</span>
            <span>Writing & Translation</span>
            <span>Video & Animation</span>
            <span>Music & Audio</span>
            <span>Programming & Tech</span>
            <span>Data</span>
            <span>Business</span>
            <span>Lifestyle</span>
            <span>Photography</span>
            <span>Sitemap</span>
          </div>
          
          <div className="item">
            <h2>About</h2>
            <span>Press & News</span>
            <span>Partnerships</span>
            <span>Privacy Policy</span>
            <span>Terms of Service</span>
            <span>Intellectual Property Claims</span>
            <span>Investor Relations</span>
            <span>Contact Sales</span>
          </div>

          <div className="item">
            <h2>Support</h2>
            <span>Help & Support</span>
            <span>Trust & Safety</span>
            <span>Selling on Liverr</span>
            <span>Buying on Liverr</span>
          </div>

          <div className="item">
            <h2>Community</h2>
            <span>Customer Success Stories</span>
            <span>Community hub</span>
            <span>Forum</span>
            <span>Events</span>
            <span>Blog</span>
            <span>Influencers</span>
            <span>Affiliates</span>
            <span>Podcast</span>
            <span>Invite a Friend</span>
            <span>Become a Seller</span>
            <span>Community Standards</span>
          </div>

          <div className="item">
            <h2>More From Fiverr</h2>
            <span>Liverr Business</span>
            <span>Liverr Pro</span>
            <span>Liverr Logo Maker</span>
            <span>Liverr Guides</span>
            <span>Get Inspired</span>
            <span>Liverr Select</span>
            <span>ClearVoice</span>
            <span>Liverr Workspace</span>
            <span>Learn</span>
            <span>Working Not Working</span>
          </div>
        </div>

        <hr />
        <div className='bottom'>
          <div className='left'>
            <h2>Fiverr</h2>
            <span>&copy; Fiverr International Ltd. 2023</span>
          </div>
          <div className='right'>
            <div className='social'>
              <img src={twitter} alt="" />
              <img src={facebook} alt="" />
              <img src={linkedin} alt="" />
              <img src={pinterest} alt="" />
              <img src={instagram} alt="" />
            </div>
            <div className='link'>
            <img src={language} alt="" />
            <span>English</span>
            </div>

            <div className='link'>
           <img src={coin} alt="" />
           <span>USD</span>
            </div>

            <img src={accsessibility} alt="" />
          </div>
        </div>
     </div>
    </div>
  )
}

export default Footer
