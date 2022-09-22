import React from "react";
import { Link } from "react-router-dom";

import "./Footer.css";

const Footer = () => {
  return (
    <div>
      <footer className="footer-area footer--light">
        <div className="footer-big">
          <div className="container">
            <div className="row">
              <div className="col-md-3 col-sm-12">
                <div className="footer-widget">
                  <div className="widget-about">
                    <h4 className="footer-widget-title">Company Locate</h4>
                    <p>
                      It is a long established fact that a reader will be
                      distracted by the readable content of a page when looking
                      at its layout. The point of using Lorem Ipsum is that it
                      has a more-or-less normal distribution of letters,
                    </p>
                    <ul className="contact-details">
                      <li>
                        <i className="fa fa-phone" aria-hidden="true"></i> Call Us:
                        <Link to="/tel:344-755-111">344-755-111</Link>
                      </li>
                      <li>
                        <i className="fa fa-envelope " aria-hidden="true"></i>
                        <Link to="/mailto:support@aazztech.com" className="mx-2">
                          support@aazztech.com
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-md-3 col-sm-4">
                <div className="footer-widget">
                  <div className="footer-menu footer-menu--1">
                    <h4 className="footer-widget-title">Popular Category</h4>
                    <ul>
                      <li>
                        <Link to="/#">Wordpress</Link>
                      </li>
                      <li>
                        <Link to="/#">Plugins</Link>
                      </li>
                      <li>
                        <Link to="/#">Joomla Template</Link>
                      </li>
                      <li>
                        <Link to="/#">Admin Template</Link>
                      </li>
                      <li>
                        <Link to="/#">HTML Template</Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="col-md-3 col-sm-4">
                <div className="footer-widget">
                  <div className="footer-menu">
                    <h4 className="footer-widget-title">Our Company</h4>
                    <ul>
                      <li>
                        <Link to="/#">About Us</Link>
                      </li>
                      <li>
                        <Link to="/#">How It Works</Link>
                      </li>
                      <li>
                        <Link to="/#">Affiliates</Link>
                      </li>
                      <li>
                        <Link to="/#">Testimonials</Link>
                      </li>
                      <li>
                        <Link to="/#">Contact Us</Link>
                      </li>
                      <li>
                        <Link to="/#">Plan &amp; Pricing</Link>
                      </li>
                      <li>
                        <Link to="/#">Blog</Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="col-md-3 col-sm-4">
                <div className="footer-widget">
                  <div className="footer-menu no-padding">
                    <h4 className="footer-widget-title">Help Support</h4>
                    <ul>
                      <li>
                        <Link to="/#">Support Forum</Link>
                      </li>
                      <li>
                        <Link to="/#">Terms &amp; Conditions</Link>
                      </li>
                      <li>
                        <Link to="/#">Support Policy</Link>
                      </li>
                      <li>
                        <Link to="/#">Refund Policy</Link>
                      </li>
                      <li>
                        <Link to="/#">FAQs</Link>
                      </li>
                      <li>
                        <Link to="/#">Buyers Faq</Link>
                      </li>
                      <li>
                        <Link to="/#">Sellers Faq</Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mini-footer">
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <div className="copyright-text">
                  <p>
                    © 2022
                    <Link to="/#">rajtech.com</Link>. All rights reserved. Created by
                    <Link to="/#">RajTech</Link>
                  </p>
                </div>

                <div className="go_top">
                  <span className="icon-arrow-up"></span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
