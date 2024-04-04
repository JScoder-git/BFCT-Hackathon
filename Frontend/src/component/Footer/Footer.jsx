import React from 'react';
import './footer.css';
import { Row, Col, ListGroup, ListGroupItem } from 'reactstrap';
import { Link, useLocation } from 'react-router-dom';
import logo from '../../assets/images/logo.png';

const quick_links = [
  {
    path: '/specialist',
    display: 'Specialist '
  },
  {
    path: '/equipments',
    display: 'Equipments'
  },
  {
    path: '/feedback',
    display: 'Feedback'
  },
  {
    path: '/contact',
    display: 'Contact Us'
  },
];
const quick__links2 = [
  {
    path: '/privacy-policy',
    display: 'Privacy Policy'
  },
  {
    path: '/cancellation-policy',
    display: 'Cancellation Policy'
  },
  {
    path: '/tnc',
    display: 'Terms & Conditions'
  },
  {
    path: '/disclaimer',
    display: 'Disclaimer'
  },
];

const Footer = () => {

  const location = useLocation(); 

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };


  return (
    <footer className='footer'>
        <Row>
          <Col lg='3' className='about_tripit'>
            <div className='logo'>
              <img src={logo} alt='' />
              <p>RescuePoint" where hospitals across India come together to share crucial data and resources to enhance patient care. Hospitals input information about equipment shortages, allowing others to step in with surplus supplies. </p>
              <div className='social__link d-flex align-items-center gap-4'>
                <span>
                  <a href="https://www.instagram.com/btw_its_sahil_" target="_blank" rel="noopener noreferrer">
                    <i class="ri-instagram-line"></i>
                  </a>
                </span>
                <span>
                  <a href="https://www.facebook.com/sahilserrka" target="_blank" rel="noopener noreferrer">
                    <i class="ri-facebook-line"></i></a>
                </span>
                <span>
                  <a href="https://www.linkedin.com/in/jscoderr/" target="_blank" rel="noopener noreferrer">
                    <i class="ri-linkedin-line"></i>
                  </a>
                </span>
                <span>
                  <a href="sindhantchandwal@gmail.com" target="_blank" rel="noopener noreferrer">
                    <i class="ri-mail-line"></i>
                  </a>
                </span>
                
              </div>
            </div>
          </Col>
          <Col lg='2' className='discover'>
            <h5 className='footer__link-title'>Discover</h5>
            <ListGroup className='footer__quick-link'>
              {quick_links.slice(0, quick_links.length).map((item, index) => (
                <ListGroupItem key={index} className='ps-0 border-0'>
                  {/* Check if the target path matches the current path */}
              {item.path === location.pathname ? (
                // If the paths match, use an anchor tag to scroll to the top of the page
                <a href="#top" onClick={scrollToTop}>{item.display}</a>
              ) : (
                // If the paths don't match, use a Link component
                <Link to={item.path}>{item.display}</Link>
              )}
                </ListGroupItem>
              ))}
            </ListGroup>
          </Col>
          <Col lg='2' className='quick_links'>
            <h5 className='footer__link-title'>Quick Links</h5>
            <ListGroup className='footer__quick-link'>
              {quick__links2.map((item, index) => (
                <ListGroupItem key={index} className='ps-0 border-0'>
                  <Link to={item.path}>{item.display}</Link>
                </ListGroupItem>
              ))}
            </ListGroup>
          </Col>
          <Col lg='3' className='contact_us'>
            <h5 className='footer__link-title'>Contacts</h5>
            <ListGroup className='footer__quick-link'>
              <ListGroupItem className='ps-0 border-0 d-flex align-item-center gap-3'>
                <h6 className='mb-0 d-flex align-item-center gap-2'>
                  <span><i class="ri-map-pin-2-fill"></i></span>
                  Address:
                </h6>
                <p className='mb-0'>Chandigarh University,Mohali(Punjab) 140413</p>
              </ListGroupItem>
              <ListGroupItem className='ps-0 border-0 d-flex align-item-center gap-3'>
                <h6 className='mb-0 d-flex align-item-center gap-2'>
                  <span><i class="ri-mail-line"></i></span>
                  Email:
                </h6>
                <p className='mb-0'>rescuepoint@gmail.com</p>
              </ListGroupItem>
              <ListGroupItem className='ps-0 border-0 d-flex align-item-center gap-3'>
                <h6 className='mb-0 d-flex align-item-center gap-2'>
                  <span><i class="ri-phone-line"></i></span>
                  Mobile:
                </h6>
                <p className='mb-0'>+91 7889143859</p>
              </ListGroupItem>
            </ListGroup> 
          </Col>
          <Col lg='12' className='text-center'>
            <p className='copyright'>
              Copyright 2024 by Rescue Point. All Rights Reserved.
            </p>
          </Col>
        </Row>
    </footer>
  );
};

export default Footer;