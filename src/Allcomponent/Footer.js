import React from 'react'
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <div>
        <footer className="footer_style_2 mt-5">
        <div className="container-fuild">
          <div className="row">
            <div className="map_section">
              <div id="map"></div>
            </div>  
            <div className="footer_blog">
              <div className="row">
                <div className="col-md-6">
                  <div className="main-heading left_text">
                    <h2>It Next Theme</h2>
                  </div>
                  <p>Tincidunt elit magnis nulla facilisis. Dolor sagittis maecenas. Sapien nunc amet ultrices, dolores sit ipsum velit purus aliquet, massa fringilla leo orci.</p>
                  <ul className="social_icons">
                    <li className="social-icon fb"><Link to="#"><i className="fa fa-facebook" aria-hidden="true"></i></Link></li>
                    <li className="social-icon tw"><Link to="#"><i className="fa fa-twitter" aria-hidden="true"></i></Link></li>
                    <li className="social-icon gp"><Link to="#"><i className="fa fa-google-plus" aria-hidden="true"></i></Link></li>
                  </ul>
                </div>
                <div className="col-md-6">
                  <div className="main-heading left_text">
                    <h2>Additional links</h2>
                  </div>
                  <ul className="footer-menu">
                    <li><Link to="it_about.html"><i className="fa fa-angle-right"></i> About us</Link></li>
                    <li><Link to="it_term_condition.html"><i className="fa fa-angle-right"></i> Terms and conditions</Link></li>
                    <li><Link to="it_privacy_policy.html"><i className="fa fa-angle-right"></i> Privacy policy</Link></li>
                    <li><Link to="it_news.html"><i className="fa fa-angle-right"></i> News</Link></li>
                    <li><Link to="it_contact.html"><i className="fa fa-angle-right"></i> Contact us</Link></li>
                  </ul>
                </div>
                <div className="col-md-6">
                  <div className="main-heading left_text">
                    <h2>Services</h2>
                  </div>
                  <ul className="footer-menu">
                    <li><Link to="it_data_recovery.html"><i className="fa fa-angle-right"></i> Data recovery</Link></li>
                    <li><Link to="it_computer_repair.html"><i className="fa fa-angle-right"></i> Computer repair</Link></li>
                    <li><Link to="it_mobile_service.html"><i className="fa fa-angle-right"></i> Mobile service</Link></li>
                    <li><Link to="it_network_solution.html"><i className="fa fa-angle-right"></i> Network solutions</Link></li>
                    <li><Link to="it_techn_support.html"><i className="fa fa-angle-right"></i> Technical support</Link></li>
                  </ul>
                </div>
                <div className="col-md-6">
                  <div className="main-heading left_text">
                    <h2>Contact us</h2>
                  </div>
                  <p>123 Second Street Fifth Avenue,<br/>
                    Manhattan, New York<br/>
                    <span style={{fontSize:"16px"}}><Link     to="tel:+9876543210">+987 654 3210</Link></span></p>
                  <div className="footer_mail-section">
                    <form>
                      <fieldset>
                      <div className="field">
                        <input placeholder="Email" type="text" />
                        <button className="button_custom"><i className="fa fa-envelope" aria-hidden="true"></i></button>
                      </div>
                      </fieldset>
                    </form>
                  </div>
                </div>
              </div>
            </div>
            <div className="cprt">
              <p>ItNext © Copyrights 2019 Design by html.design</p>
            </div>
          </div>
        </div>
      </footer>

    </div>
    
  )
}

export default Footer;