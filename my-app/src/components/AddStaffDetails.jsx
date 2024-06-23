// src/components/StudentView.jsx
import React from 'react';
import './Staffdetails.css';

const AddStaffDetails = () => {
  const grades = {
    Staffname: 'Nandhika',
    Age: '30',
    Experience: '5 Years',
    Address: 'Ambur',
    PhoneNo:'9889898898',
    
   
  };

  return (
    <div className="student-view-container">
      <center><h3>STAFF DETAILS</h3></center>
      <p>Staff Name: {grades.Staffname}</p>
      <p>Age: {grades.Age}</p>
      <p>Experience: {grades.Experience}</p>
      <p>Address: {grades.Address}</p>
      <p>Phone No: {grades.PhoneNo}</p> 
      
    </div>
  );
};

export default AddStaffDetails;
 