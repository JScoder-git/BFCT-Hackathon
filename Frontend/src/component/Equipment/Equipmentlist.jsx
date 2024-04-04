import React, { useRef } from 'react';
import EquipmentCard from '../../services/equipmentcard.jsx'; // Import EquipmentCard component
import useFetch from '../../hooks/useFetch.js';
import { BASE_URL } from '../../utils/config.js';
import Slider from 'react-slick';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const FeaturedEquipmentLists = () => { // Change component name

  const { data: featuredEquipments, loading, error } = useFetch(
    `${BASE_URL}/equipments` // Adjust the endpoint for fetching equipment data
  );

  const sliderRef = useRef(null);

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
    top: '100%',
    left: '50%',
    transform: 'translateX(-50%)',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: 'fit-content',
    padding: '10px',
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
    padding: '0 200px',
  };

  const goToPrevSlide = () => {
    sliderRef.current.slickPrev();
  };

  const goToNextSlide = () => {
    sliderRef.current.slickNext();
  };

  return (
    <div style={sliderContainerStyle}>
      {loading && <h4>Loading.............</h4>}
      {error && <h4>{error}</h4>}
      {!loading && !error && featuredEquipments?.length > 0 && (
        <>
          <div>
            <Slider ref={sliderRef} {...sliderSettings}>
              {featuredEquipments.map((equipment, index) => (
                <div style={gapStyle} key={equipment._id}>
                  <EquipmentCard equipment={equipment} addMargin={true} /> {/* Render EquipmentCard */}
                </div>
              ))}
            </Slider>
          </div>
          <div style={sliderArrowContainerStyle}>
            <div
              style={arrowStyle}
              onClick={goToPrevSlide}
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
              onClick={goToNextSlide}
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

export default FeaturedEquipmentLists;
