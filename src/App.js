import React from 'react';
import { Routes, Route, Navigate } from "react-router-dom";  // Remove BrowserRouter from imports
import Home from './component/Home';
import SideBar from './component/SideBar';
import "./styles.css";
import Items from "./component/Items";
import Banking from './component/Banking';

function App() {
  return (
    <div className="App">
      <SideBar className="sidebar" />
      <Routes>
        <Route path="/" element={<Navigate to="/app/home/dashboard" />} />
        <Route path="/app/home/dashboard" element={<Home />} />
        <Route path="/app/home/gettingstarted" element={<Home />} />
        <Route path="/app/home/announcements" element={<Home />} />
        <Route path="/app/home/recentupdated" element={<Home />} />
        <Route path="/app/inventory/items" element={<Items />} />
        <Route path="/app/banking" element={<Banking/>}/>
        
      </Routes>
    </div>
  );
}

export default App;
