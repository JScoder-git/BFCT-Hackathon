import React from 'react';
import '../styles/home.css';
import { useForm } from '@formspree/react';

import { Container, Row, Col, Card, CardBody, CardTitle, CardText } from 'reactstrap';
import MainSearch from '../services/mainsearch';
import FeaturedDoctorList from '../component/Doctor/Doctorlist';
import FeaturedEquipmentLists from '../component/Equipment/Equipmentlist';
import CounterAnimation from '../Pages/counter/CounterAnimation';
import CounterAnimation2 from '../Pages/counter/CounterAnimation2';
import CounterAnimation3 from '../Pages/counter/CounterAnimation3';
import CounterAnimation4 from '../Pages/counter/CounterAnimation4';
import end from '../assets/images/11.png';

const Home = () => { 
  const primaryColor = '#0D5C75';
  const titleStyle = {
    color: primaryColor,
    paddingBottom: '10px',
    fontWeight: '700',
  };

  return (
    <div className='background-image'>
      <section className='home-section d-flex flex-column'>
        <div className='search-bar-container'>
          <MainSearch />
        </div>
      </section>

      <section style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'flex-start', height: '100vh', padding: '20px' }}>
        <div className='motos' style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', gap: '20px' }}>
          <div className="card" style={{ backgroundColor: '#00ADEF', border: '1px solid #CCCCCC', boxShadow: '0px 2px 4px rgba(0, 173, 239, 1)' , borderRadius: '50px 50px 50px 50px'  }}>
            <h3>Save Lives, Be a Donor</h3>
            <p>By promoting awareness and facilitating registrations, we aim to bridge the gap between those in need and those willing to give the gift of life.</p>
          </div>
          <div className="card" style={{ backgroundColor: '#00ADEF', border: '1px solid #CCCCCC', boxShadow: '0px 2px 4px rgba(0, 173, 239, 1)' , borderRadius: '50px 50px 50px 50px'}} >
            <h3>Providing Tools for Better Healthcare</h3>
            <p>By connecting with reliable suppliers, we ensure hospitals have access to cutting-edge equipment to enhance patient care and outcomes.</p>
          </div>
          <div className="card" style={{ backgroundColor: '#00ADEF', border: '1px solid #CCCCCC', boxShadow: '0px 2px 4px rgba(0, 173, 239, 1)', borderRadius: '50px 50px 50px 50px' }} >
            <h3>Expertise, Empathy, Excellence in Healthcare</h3>
            <p>By partnering with trusted professionals, we strive to guarantee access to quality healthcare services for all.</p>
          </div>
          <div className="card" style={{ backgroundColor: '#00ADEF', border: '1px solid #CCCCCC', boxShadow: '0px 2px 4px rgba(0, 173, 239, 1)', borderRadius: '50px 50px 50px 50px' }} >
            <h3>Every Drop Counts, Every Life Matters</h3>
            <p>We ensure a steady supply of life-saving blood products for patients in need. Through this collaboration, we aim to support critical medical procedures and emergency interventions.</p>
          </div>
          <div className="card" style={{ backgroundColor: '#00ADEF', border: '1px solid #CCCCCC', boxShadow: '0px 2px 4px rgba(0, 173, 239, 1)', borderRadius: '50px 50px 50px 50px' }}>
            <h3>Life-Changing Solutions, One Injection Away</h3>
            <p>By connecting with reliable suppliers, we guarantee access to a wide range of injectable medications for various medical needs.</p>
          </div>
        </div>
        <div>
          <img src="https://medhave.com/wp-content/themes/sytech/assets/img/about_banner.svg" alt="" className="lazyloaded" data-ll-status="loaded" />
        </div>
      </section>

      <section className="background-image2">
      <Container>
        <Row>
        <h2 className='featured__tour-title title-with-line' style={{"textAlign":"center","marginBottom":"30px","color":"#ffffff, borderRadius: '50px 50px 50px 50px'"}}>
                OUR DATA
              </h2>
          <Col lg="6">
          
            <Card className="motto-card" style={{ backgroundColor: '#00ADEF' }}>
              <CardBody>
                <div className="content-wrapper">
                  <div className="text-wrapper">
                    <CardTitle>Hospital in Network</CardTitle>
                    <CardText>We have lots of hospitalsin our network</CardText>
                  </div>
                  <div className="counter-animation-wrapper">
                    <CounterAnimation />
                  </div>
                </div>
              </CardBody>
            </Card>
          </Col>
          <Col lg="6" className='mb-5 text-center'>
            <Card className="motto-card" style={{ backgroundColor: '#00ADEF' }}>
              <CardBody>
                <div className="content-wrapper">
                  <div className="text-wrapper">
                    <CardTitle>Pledge Taker</CardTitle>
                    <CardText>Lots of Pledge taker for donation of organs</CardText>
                  </div>
                  <div className="counter-animation-wrapper">
                    <CounterAnimation2 />
                  </div>
                </div>
              </CardBody>
            </Card>
          </Col>
        </Row>
        <Row>
          <Col lg="6">
            <Card className="motto-card2" style={{ backgroundColor: '#00ADEF' }}>
              <CardBody>
                <div className="content-wrapper">
                  <div className="text-wrapper">
                    <CardTitle>Acceptance Percentage</CardTitle>
                    <CardText>how many resources are used by our network</CardText>
                  </div>
                  <div className="counter-animation-wrapper">
                    <CounterAnimation3 />
                  </div>
                </div>
              </CardBody>
            </Card>
          </Col>
          <Col lg="6">
            <Card className="motto-card2" style={{ backgroundColor: '#00ADEF' }}>
              <CardBody>
                <div className="content-wrapper">
                  <div className="text-wrapper">
                    <CardTitle>Trustworthy NGOs</CardTitle>
                    <CardText>we have lots of ngos in our contact</CardText>
                  </div>
                  <div className="counter-animation-wrapper">
                    <CounterAnimation4 />
                  </div>
                </div>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>
    </section>

      <section className='background-image3'>
        <Container>
          <Row>
            <Col lg='12' className='mb-5 text-center'>
              <h2 className='featured__tour-title title-with-line' style={titleStyle}>
                Specialist Team
              </h2>
            </Col>
            <FeaturedDoctorList />
          </Row>
        </Container>
      </section>

      <section className='background-image4'>
        <Container>
          <Row>
            <Col lg='12' className='mb-5 text-center'>
              <h2 className='featureds__tour-title2 title-with-line' style={titleStyle}>
                Mostly used Equipments
              </h2>
            </Col>
            <FeaturedEquipmentLists />
          </Row>
        </Container>
      </section>
      <section className='background-image5 feedback-section'>
      <Container>
        <Row>
          <Col lg='12' className='text-center'>
            <h2 className='gallery__title1 title-with-line' >
              Feedback section
            </h2>
            <form id="feedback-form" className="feedback-form" action="https://formspree.io/f/xayregel" method="POST">
  <div className="form-group">
    <label htmlFor="feedbackBy">Hospital Name:</label>
    <input type="text" id="feedbackBy" name="hospitalName" required />
  </div>
  <div className="form-group">
    <label htmlFor="doctorName">Doctor's Name:</label>
    <input type="text" id="doctorName" name="doctorName" required />
  </div>
  <div className="form-group">
    <label htmlFor="registerNumber">Doctor's Register Number:</label>
    <input type="text" id="registerNumber" name="registerNumber" required />
  </div>
  <div className="form-group">
    <label htmlFor="feedbackText">Feedback:</label>
    <textarea id="feedbackText" name="feedbackText" rows="4" required></textarea>
  </div>
  <button type="submit">Submit Feedback</button>
</form>

            <div id="feedback-message" className="feedback-message"></div>
          </Col>
        </Row>
      </Container>

      <script>
        {`
          document.addEventListener('DOMContentLoaded', function() {
            const form = document.getElementById('feedback-form');
            const messageDiv = document.getElementById('feedback-message');

            form.addEventListener('submit', function(event) {
              event.preventDefault();

              const formData = new FormData(form);

              fetch('http://localhost:4000/api/v1/feedback', {
                method: 'POST',
                body: formData
              })
              .then(response => response.json())
              .then(data => {
                if (data.success) {
                  messageDiv.innerHTML = '<p>Feedback submitted successfully!</p>';
                  form.reset();
                } else {
                  messageDiv.innerHTML = '<p>There was an error submitting your feedback. Please try again later.</p>';
                }
              })
              .catch(error => {
                console.error('Error:', error);
                messageDiv.innerHTML = '<p>There was an error submitting your feedback. Please try again later.</p>';
              });
            });
          });
        `}
      </script>
      <img class="lazy" src={end} alt="Healthcare Illustration" />
    </section>

      
    </div>
  );
};

export default Home;
