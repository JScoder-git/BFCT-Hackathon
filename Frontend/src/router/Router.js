import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Home from './../Pages/Home';
import Login from '../Pages/Login';
import Register from '../Pages/Register';
import AwarenessPage from './../Pages/Awareness';
import Network from '../Pages/network';
import ContactUs from './../Pages/Contact';
import DoctorList from '../Pages/doctor';
import EquipmentList from '../Pages/equipments';
import SearchResultList from '../Pages/resultpage';

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/home" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/network" element={<Network />} />
      <Route path="/awareness" element={<AwarenessPage />} />
      <Route path="/contact" element={<ContactUs />} />
      <Route path="/doctor" element={<DoctorList />} />
      <Route path="/equipments" element={<EquipmentList />} />
      <Route path="/search-results" element={<SearchResultList />} />
    </Routes>
  );
};

export default Router;
