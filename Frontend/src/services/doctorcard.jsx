// DoctorCard component
import React, { useEffect } from 'react';
import { Card, CardBody } from 'reactstrap';
import { Link } from 'react-router-dom';
import './doctorcard.css';

const DoctorCard = ({ doctor }) => {
    useEffect(() => {
        window.scrollTo(0, 0);
    });

    const { _id, name, image, specialization, experience } = doctor;

    return (
        <div className="doctor__card">
            <Link to={`/doctor/${_id}`}>
                <Card>
                    <div className="doctor__img">
                        <img src={image} alt="doctor-img" />
                    </div>
                    <CardBody>
                        <div className="card__top d-flex align-items-center justify-content-between">
                            <span className="doctor__location d-flex align-items-center gap-1">
                                <i className="ri-map-2-line"></i> {specialization}
                            </span>
                            
                        </div>
                        <h5 className='doctor__title'>
                            <Link to={`/doctor/${_id}`}>{name}</Link>
                        </h5>

                        <div className="card__bottom d-flex align-items-center justify-content-between mt-3">
                            <h5>{experience}+<span> Year Experience</span></h5>
                        </div>
                    </CardBody>
                </Card>
            </Link>
        </div>
    );
};

export default DoctorCard;
