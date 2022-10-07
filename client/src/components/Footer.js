import React from "react";
import './Footer.css';

function Footer() {
    return (
        <div class='footer-container'>
            <section>
                <p>Thanks for using AdMan!</p>
            </section>
            <div className="container">
          <div className="contact-information">
            <div className="email-contact">
              <a id="email" href="mailto:bazilkhn@gmail.com" title="Email me">
                bazilkhn@gmail.com
              </a>
            </div>
            <ul className="social-links">
              <li className="social-link">
                <a href="https://github.com/youthbazzy" title="@youthbazzy on GitHub">
                  <i className="fa fa-github fa-xl" />
                </a>
              </li>
              <li className="social-link">
                <a href="https://www.linkedin.com/in/bazil-k-9592a7b6/" title="Bazil Khan on LinkedIn">
                  <i className="fa fa-linkedin" />
                </a>
              </li>
            </ul>
          </div>
          <div className="copyright-info">
              <p>Copyright © Bazil Khan</p>
            </div>
        </div>
        </div>
    )
}

export default Footer;