// DoctorList component
import React, { useEffect } from 'react';
import { Container, Row, Col } from 'reactstrap';
import useFetch from '../hooks/useFetch.js';
import { BASE_URL } from '../utils/config.js';
import DoctorCard from '../services/doctorcard.jsx';
import '../styles/doctor.css';

const DoctorList = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    });

    const { data: doctors, loading, error } = useFetch(`${BASE_URL}/doctor`);

    return (
        <>
            <section className="back_inter">
                <Container>
                    <Row>
                        <Col lg="12">
                            <h1>OUR TOP SPECIALIST</h1>
                        </Col>
                    </Row>
                </Container>
            </section>
            <section>
                <Container>
                    <Col lg="4">
                        <h3>Conatact with our Top Specialist for your </h3>
                    </Col>
                </Container>
            </section>
            <section className="pt-0">
                <Container>
                    {loading && <h4 className="text-center pt-5">Loading............</h4>}
                    {error && <h4 className="text-center pt-5">{error}</h4>}
                    {!loading && !error && (
                        <Row>
                            {doctors?.map(doctor => (
                                <Col lg="3" md="6" sm="6" className="mb-4" key={doctor._id}>
                                    <DoctorCard doctor={doctor} />
                                </Col>
                            ))}
                        </Row>
                    )}
                </Container>
            </section>
        </>
    );
};

export default DoctorList;
