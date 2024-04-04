import React, { useState } from 'react';
import { useForm } from '@formspree/react';

import '../styles/contact.css';

const ContactUs = () => {
  const [state, handleSubmit] = useForm("xayregel");
  const [formData, setFormData] = useState({
    HospitalName: '',
    DoctorId: '', 
    FirstName: '',
    LastName: '',
    Email: '',
    PhoneNumber: '',
    Address: '',
    How_Can_We_Help: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const submitForm = async (e) => {
    e.preventDefault();
    try {
      await handleSubmit(e);
      // Reset the form after successful submission
      setFormData({
        HospitalName: '',
        DoctorId: '',
        FirstName: '',
        LastName: '',
        Email: '',
        PhoneNumber: '',
        Address: '',
        How_Can_We_Help: ''
      });
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <section className="section">
        <div className="container">
          <div className="section-title">
            <h2>Contact Us</h2>
            <p>"Connect for Care: Your Health is Our Priority!"</p>
          </div>
          <div className="contact-form">
            <form onSubmit={submitForm}>
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="HospitalName">Hospital Name</label>
                  <input
                    type="text"
                    id="HospitalName"
                    name="HospitalName"
                    value={formData.HospitalName}
                    onChange={handleChange}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="DoctorId">Doctor ID</label>
                  <input
                    type="text"
                    id="DoctorId"
                    name="DoctorId"
                    value={formData.DoctorId}
                    onChange={handleChange}
                  />
                </div>
              </div>
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="FirstName">First Name</label>
                  <input
                    type="text"
                    id="FirstName"
                    name="FirstName"
                    value={formData.FirstName}
                    onChange={handleChange}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="LastName">Last Name</label>
                  <input
                    type="text"
                    id="LastName"
                    name="LastName"
                    value={formData.LastName}
                    onChange={handleChange}
                  />
                </div>
              </div>
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="Email">Your Email</label>
                  <input
                    type="email"
                    id="Email"
                    name="Email"
                    value={formData.Email}
                    onChange={handleChange}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="PhoneNumber">Phone Number</label>
                  <input
                    type="tel"
                    id="PhoneNumber"
                    name="PhoneNumber"
                    value={formData.PhoneNumber}
                    onChange={handleChange}
                  />
                </div>
              </div>
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="Address">Your Address</label>
                  <input
                    type="text"
                    id="Address"
                    name="Address"
                    value={formData.Address}
                    onChange={handleChange}
                  />
                </div>
              </div>
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="How_Can_We_Help">How can we help?</label>
                  <textarea
                    id="How_Can_We_Help"
                    name="How_Can_We_Help"
                    value={formData.How_Can_We_Help}
                    onChange={handleChange}
                  ></textarea>
                </div>
              </div>
              <div className="form-row center-button">
                <button type="submit">Submit</button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactUs;