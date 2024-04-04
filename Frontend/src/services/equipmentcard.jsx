import React, { useEffect } from 'react';
import { Card, CardBody } from 'reactstrap';
import { Link } from 'react-router-dom';
import './equipmentcard.css'; 


const EquipmentCard = ({ equipment, addMargin }) => {

  useEffect(() => {
    window.scrollTo(0, 0);
  });


  const { _id, name, picture, type, quantity } = equipment;

  const equipmentCardStyle = {
    margin: addMargin ? '0 8px' : '0',
  };

  return (
    <div className='equipment__card' style={equipmentCardStyle}>
      <Link to={`/equipments/${_id}`}>
        <Card className='equipment__card--border'>
          <div className='equipment__img'>
            <img src={picture} alt='equipment-img' />
          </div>

          <CardBody>
              <div className='card__top d-flex align-items-center justify-content-between'>
                <span className='equipment__duration d-flex align-items-center gap-1'>
                  <i className='ri-time-line'></i> {type} 
                </span>
              </div>

              <h5 className='equipment__title'>
                <Link to={`/equipments/${_id}`}>{name}</Link>
              </h5>

              <div className='card__bottom d-flex align-items-center justify-content-between mt-3'>
                <h5>{quantity}<span> Per Piece</span></h5>
              </div>
            </CardBody>

        </Card>
      </Link>
    </div>
  );
};

export default EquipmentCard;
