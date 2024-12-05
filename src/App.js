import React from 'react';
import { Routes, Route, Navigate } from "react-router-dom";
import Home from './component/Home';
import SideBar from './component/SideBar';
import "./styles.css";
import Banking from './component/Banking';
import NewItems from './component/items/NewFile';
import Customers from './component/sales/Customers';
import Quotes from './component/sales/Quotes';  // Add these components
import SalesOrders from './component/sales/SalesOrders';
import DeliveryChallans from './component/sales/DeliveryChallans';
import Invoices from './component/sales/Invoices';
import PaymentsReceived from './component/sales/PaymentsReceived';
import CreditNotes from './component/sales/CreditNotes';

function App() {
  return (
    <div className="App">
      <div className='flex flex-row w-screen h-screen gap-[100px]'>
        <SideBar className="sidebar" />
        <Routes>
          <Route path="/" element={<Navigate to="/app/home/dashboard" />} />
          <Route path="/app/home/dashboard" element={<Home />} />
          <Route path="/app/home/gettingstarted" element={<Home />} />
          <Route path="/app/home/announcements" element={<Home />} />
          <Route path="/app/home/recentupdated" element={<Home />} />
          <Route path="/app/inventory/NewItem" element={<NewItems />} />
          <Route path="/app/banking" element={<Banking />} />
          <Route path="/app/sales/Customers" element={<Customers />} />
          <Route path="/app/sales/Quotes" element={<Quotes />} />
          <Route path="/app/sales/SalesOrders" element={<SalesOrders />} />
          <Route path="/app/sales/DeliveryChallans" element={<DeliveryChallans />} />
          <Route path="/app/sales/Invoices" element={<Invoices />} />
          <Route path="/app/sales/PaymentsReceived" element={<PaymentsReceived />} />
          <Route path="/app/sales/CreditNotes" element={<CreditNotes />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
