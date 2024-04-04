import React, { useEffect } from 'react'; 

import "../styles/equipments.css";

import EquipmentCard from '../services/equipmentcard';
import {Container, Row, Col} from "reactstrap";
import useFetch from '../hooks/useFetch.js'
import {BASE_URL} from '../utils/config.js'

const EquipmentList = () => {
    useEffect(()=>{
        window.scrollTo(0,0)
    })

    const {data:equipment, loading, error} = useFetch(`${BASE_URL}/equipments`)
    return (
    <>
        <section className="back_inter">
            <Container>
                <Row>
                    <Col lg="12">
                        <h1>EMERGENCY EQUIPMENTS</h1>
                    </Col>
                </Row>
            </Container>
        </section>
        
        <section className='pt-0'>
            <Container>
                {loading && <h4 className='text-center pt-5'>Loading............</h4>}
                {error && <h4 className='text-center pt-5'>{error}</h4>}
                {
                    !loading && !error && <Row>
                    {equipment?.map(equipment => (
                        <Col lg ="3" md = '6' sm ='6' className='mb-4' key = {equipment._id}>
                            <EquipmentCard equipment={equipment} />
                        </Col>
                    ))}
                </Row>
                }
            </Container>
        </section>
    </>
    );
};

export default EquipmentList;
