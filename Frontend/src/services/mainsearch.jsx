import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Container, Row } from 'reactstrap';
import { BASE_URL } from '../utils/config.js';
import '../services/mainsearch.css';

const MainSearch = () => {
  const [state, setState] = useState('');
  const [district, setDistrict] = useState('');
  const [resource, setResource] = useState('');
  const [need, setNeed] = useState('');
  const [dueDate, setDueDate] = useState('');
  const [needRecommendations, setNeedRecommendations] = useState([]);
  const [searchResults, setSearchResults] = useState([]);
  const navigate = useNavigate();

  const stateRecommendations = ['Punjab', 'Haryana', 'Himachal Pradesh', 'Jammu and Kashmir', 'Meghalaya'];

  const resourceToNeeds = {
    'Human Organ': ['lungs', 'liver', 'eyes', 'kidney', 'heart'],
    'Medicine': ['Rituximab', 'Fentanyl', 'Dopamine', 'Infliximib', 'plerixafor', 'VitaminK1'],
    'Specialist': ['Cardiologist', 'Neurologist', 'Hematologist', 'Nephrologist', 'Dermatologist', 'Psychiatrist'],
    'Equipments': ['Ventilator', 'Pacemaker', 'Pulseoximeter', 'Dialysis Machine', 'ECG Machine', 'Defibrillator']
  };

  useEffect(() => {
    if (resource) {
      setNeedRecommendations(resourceToNeeds[resource] || []);
    } else {
      setNeedRecommendations([]);
    }
  }, [resource]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(`${BASE_URL}/hospitals/search?resource=${need}&district=${district}`);
      if (response.ok) {
        const data = await response.json();
        setSearchResults(data); // Update search results state with fetched data
        navigate(`/search-results?resource=${need}&district=${district}`, { stateData: data });
      } else {
        console.error('Error fetching search results:', response.statusText);
      }
    } catch (error) {
      console.error('Error fetching search results:', error);
    }
  };



  return (
    <section className='customSection'>
      <Container className='customCont'>
        <Row>
            <div className='custom__content'>
              
              <form onSubmit={handleSubmit}>
              
                <h2 className='heade'>Request Your Medical Interventions</h2>
                <p>Discover real-time availability of essential medical resources personalized to your needs for peace of mind.</p>
                <div className='custom__input'>
                  <input
                    type="text"
                    placeholder='State'
                    value={state}
                    onChange={(e) => setState(e.target.value)}
                    list="stateRecommendations" // Connect input to datalist
                  />
                  <datalist id="stateRecommendations">
                    {/* Render the first 5 state recommendations */}
                    {stateRecommendations.slice(0, 5).map((recommendation, index) => (
                      <option key={index} value={recommendation} />
                    ))}
                  </datalist>
                  <input
                    type="text"
                    placeholder="District"
                    value={district}
                    onChange={(e) => setDistrict(e.target.value)}
                    list="districtRecommendations" // Connect input to datalist
                  />
                  <datalist id="districtRecommendations">
                    {/* Render the list of districts in Punjab */}
                    {[
                      "Amritsar",
                      "Barnala",
                      "Bathinda",
                      "Faridkot",
                      "Fatehgarh Sahib (Sirhind-Fategarh)",
                      "Fazilka",
                      "Ferozepur",
                      "Gurdaspur",
                      "Hoshiarpur",
                      "Jalandhar",
                      "Kapurthala",
                      "Ludhiana",
                      "Mansa",
                      "Moga",
                      "Muktsar",
                      "Pathankot",
                      "Patiala",
                      "Rupnagar (Ropar)",
                      "Sahibzada Ajit Singh Nagar (Mohali)",
                      "Sangrur",
                      "Shahid Bhagat Singh Nagar (Nawanshahr)",
                      "Tarn Taran"
                    ].map((districtName, index) => (
                      <option key={index} value={districtName} />
                    ))}
                  </datalist>
                  <input
                    type="text"
                    placeholder="Resource"
                    value={resource}
                    onChange={(e) => setResource(e.target.value)}
                    list="resourceRecommendations" // Connect input to datalist
                  />
                  <datalist id="resourceRecommendations">
                    {/* Render the list of resource recommendations */}
                    {[
                      "Human Organ",
                      "Medicine",
                      "Specialist",
                      "Equipments"
                    ].map((resourceName, index) => (
                      <option key={index} value={resourceName} />
                    ))}
                  </datalist>
                  <input
                    type="text"
                    placeholder="Need"
                    value={need}
                    onChange={(e) => setNeed(e.target.value)}
                    list="needRecommendations" // Connect input to datalist
                  />
                  <datalist id="needRecommendations">
                    {/* Render the list of need recommendations based on selected resource */}
                    {needRecommendations.map((needRecommendation, index) => (
                      <option key={index} value={needRecommendation} />
                    ))}
                  </datalist>
                  <input
                    type="date"
                    placeholder="Due Date (optional)"
                    value={dueDate}
                    onChange={(e) => setDueDate(e.target.value)}
                  />
                  <button type='submit' className='btn custom__btn'>
                    Submit
                  </button>
                </div>
              </form>
            </div>
          
        </Row>
      </Container>
    </section>
  );
};

export default MainSearch;