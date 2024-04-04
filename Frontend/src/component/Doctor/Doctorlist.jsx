import React from 'react';
import DoctorCard from '../../services/doctorcard.jsx'; // Assuming DoctorCard component is available
import { Col } from 'reactstrap';
import useFetch from '../../hooks/useFetch.js';
import { BASE_URL } from '../../utils/config.js';
import Slider from 'react-slick';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const FeaturedDoctorList = () => {
  const { data: featuredDoctors, loading, error } = useFetch(
    `${BASE_URL}/doctor`
  );

  const sliderSettings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  const sliderContainerStyle = {
    position: 'relative',
  };

  const sliderArrowContainerStyle = {
    position: 'absolute',
    top: '100%', // Position the buttons just below the slider
    left: '50%', // Center the buttons horizontally
    transform: 'translateX(-50%)',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: 'fit-content',
    padding: '10px', // Optional padding for the button container
    color: '#0d5c75',
  };

  const arrowStyle = {
    fontSize: '40px',
    color: '#0d5c75',
    cursor: 'pointer',
    borderRadius: '50%',
    width: '50px',
    height: '50px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    boxShadow: '0 9px 4px rgba(0, 0, 0, 0.1)',
    transition: 'background-color 0.3s ease-in-out',
  };

  const arrowStyleHover = {
    ...arrowStyle,
    backgroundColor: '#0d5c75',
  };

  const gapStyle = {
    padding: '0 10px', // Adjust the gap size as needed
  };

  return (
    <div style={sliderContainerStyle}>
      {loading && <h4>Loading...</h4>}
      {error && <h4>{error}</h4>}
      {!loading && !error && featuredDoctors?.length > 0 && (
        <>
          <div>
            <Slider {...sliderSettings}>
              {featuredDoctors.map((doctor, index) => (
                <div style={gapStyle} key={doctor._id}>
                  <Col>
                    <DoctorCard doctor={doctor} addMargin={true} />
                  </Col>
                </div>
              ))}
            </Slider>
          </div>
          <div style={sliderArrowContainerStyle}>
            <div
              style={arrowStyle}
              onClick={() => {
                document.querySelector('.slick-prev').click();
              }}
              onMouseEnter={() => {
                Object.assign(arrowStyle, arrowStyleHover);
              }}
              onMouseLeave={() => {
                Object.assign(arrowStyle, { ...arrowStyle, backgroundColor: '' });
              }}
            >
              &#8249;
            </div>
            <div
              style={arrowStyle}
              onClick={() => {
                document.querySelector('.slick-next').click();
              }}
              onMouseEnter={() => {
                Object.assign(arrowStyle, arrowStyleHover);
              }}
              onMouseLeave={() => {
                Object.assign(arrowStyle, { ...arrowStyle, backgroundColor: '' });
              }}
            >
              &#8250;
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default FeaturedDoctorList;
