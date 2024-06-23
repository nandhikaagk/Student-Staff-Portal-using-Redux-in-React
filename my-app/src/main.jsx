// src/main.jsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import store from './store';
import App from './App';
import './index.css';
import StudentMark from './components/StudentMark';
import { BrowserRouter,Route,Routes } from 'react-router-dom'
import StaffDetails from './components/StaffDetails';
import AddStaffDetails from './components/AddStaffDetails';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  <Provider store={store}>
  <BrowserRouter>
     <Routes>
       <Route path='/' element={<App/>}>
          <Route path='/student' element={<StudentMark/>} />
          <Route path='/staff' element={<StaffDetails/>} />
          <Route path='/staffdetails' element={<AddStaffDetails/>} />
       </Route>
       
       
     </Routes>
   </BrowserRouter>
  </Provider>
  
 
 
</React.StrictMode>,
);
