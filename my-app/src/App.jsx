import React from 'react';
import StudentMark from './components/StudentMark';
import Header from './components/Header';
import { Outlet } from 'react-router';

const App = () => {
  return (
    <div>
      <Header />
      <Outlet/>
      {/* <StudentMark /> */}
    </div>
  );
};

export default App;
