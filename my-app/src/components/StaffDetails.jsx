// src/components/StudentView.jsx
import React from 'react';
import './Staffdetails.css';

const StaffDetails = () => {
  const grades = {
    Mark1: '90',
    Mark2: '87',
    Mark3: '87',
    Mark4: '79',
    Mark5:'98',
    Total:'489'
   
  };

  return (
    <div className="student-view-container">
      <center><h3>Your Grade is A</h3></center>
      <p>Java: {grades.Mark1}</p>
      <p>Machine Learning: {grades.Mark2}</p>
      <p>Data Structures: {grades.Mark3}</p>
      <p>Engineering Maths: {grades.Mark4}</p>
      <p>Agile Methodology: {grades.Mark5}</p> 
      <p>Total: {grades.Total}</p>
      
    </div>
  );
};

export default StaffDetails;
 