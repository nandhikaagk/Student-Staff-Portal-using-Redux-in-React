import React from 'react';
import './Header.css';
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="header">
         <div className="title">KEC Student & Staff Portal</div>
      <div className="left-buttons">
        <Link to='/student' className="button-link">Staff</Link>
        <Link to='/staff' className="button-link1">Student</Link>&nbsp;&nbsp;
        <Link to='/staffdetails' className="button-link2">Staff Details</Link>
      </div>
     
    </header>
  );
};

const App = () => {
  return (
    <div>
      <Header />
      
    </div>
  );
};

export default App;
