import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import EquipmentCard from './equipmentcard.js';

const EquipmentListPage = () => {
  const { district, resource } = useParams(); // Extract district and resource from URL
  const [equipments, setEquipments] = useState([]);

  useEffect(() => {
    const fetchEquipments = async () => {
      try {
        const response = await fetch(`http://localhost:4000/api/v1/hospitals/search?resource=${resource}&district=${district}`);
        if (response.ok) {
          const data = await response.json();
          setEquipments(data); // Assuming data is an array of equipment objects
        } else {
          console.error('Failed to fetch equipments:', response.statusText);
        }
      } catch (error) {
        console.error('Error fetching equipments:', error);
      }
    };

    fetchEquipments();
  }, [district, resource]); 

  return (
    <div className="equipment-list">
      {equipments.map(equipment => (
        <EquipmentCard key={equipment._id} equipment={equipment} />
      ))}
    </div>
  );
};

export default EquipmentListPage;
