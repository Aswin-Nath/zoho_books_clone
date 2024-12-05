import React from 'react';
import { Routes, Route, Navigate } from "react-router-dom";  // Remove BrowserRouter from imports
import Home from './component/Home';
import SideBar from './component/SideBar';
import "./styles.css";
// import Items from "./component/items/Items";
import Banking from './component/Banking';
import NewItems from './component/items/NewFile';

function App() {
  return (
    <div className="App">
      <div className='flex flex-row w-screen h-screen'>
      <SideBar className="sidebar" />
      <Routes>
        <Route path="/" element={<Navigate to="/app/home/dashboard" />} />
        <Route path="/app/home/dashboard" element={<Home />} />
        <Route path="/app/home/gettingstarted" element={<Home />} />
        <Route path="/app/home/announcements" element={<Home />} />
        <Route path="/app/home/recentupdated" element={<Home />} />
        <Route path="/app/inventory/NewItem" element={<NewItems />} />
        <Route path="/app/banking" element={<Banking/>}/>
        <Route path="/app/sales/Customers" />
      </Routes>
      </div>
    </div>
  );
}

export default App;
