import React from "react";
import './Footer.css';

function Footer() {
    return (
        <div class='footer-container'>
            <section>
                <p>Thanks for using AdMan!</p>
            </section>
            <div className="container">
          <div className="down-below">
            <div className="contact">
              <a id="email" href="mailto:bazilkhn@gmail.com" title="Email me">
                bazilkhn@gmail.com
              </a>
            </div>
            <ul className="links">
              <li>
                <a
                  href="https://github.com/youthbazzy"
                  title="@youthbazzy on GitHub"
                >
                  <i className="fa fa-github fa-xl" />
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/in/bazil-k-9592a7b6/"
                  title="Bazil Khan's resume on LinkedIn"
                >
                  <i className="fa fa-linkedin" />
                </a>
              </li>
            </ul>
            <div className="info">
              <p>Copyright © Bazil Khan</p>
            </div>
          </div>
        </div>
        </div>
    )
}

export default Footer;