import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Home from "./component/Home";
import SideBar from "./component/SideBar";
import "./styles.css";
import Banking from "./component/Banking";
import NewItems from "./component/items/NewFile";
import Customers from "./component/sales/Customers";
import Quotes from "./component/sales/Quotes";
import SalesOrders from "./component/sales/SalesOrders";
import DeliveryChallans from "./component/sales/DeliveryChallans";
import Invoices from "./component/sales/Invoices";
import PaymentsReceived from "./component/sales/PaymentsReceived";
import CreditNotes from "./component/sales/CreditNotes";

// Purchase Components
import Vendors from "./component/purchase/Vendors";
import Expenses from "./component/purchase/Expenses";
import PurchaseOrders from "./component/purchase/PurchaseOrders";
import Bills from "./component/purchase/Bills";
import PaymentsMade from "./component/purchase/PaymentsMade";
import VendorCredits from "./component/purchase/VendorCredits";
import Project from "./component/Time_Tracking/Project";
import TimeSheet from "./component/Time_Tracking/TimeSheet";
import ManualJournal from "./component/accountant/ManualJournal";

function App() {
  return (
    <div className="App">
      <div className="flex flex-row w-screen h-screen gap-10">
        <SideBar className="sidebar" />
        <div className="w-[80%]">
          <Routes>
            {/* Home Routes */}
            <Route path="/" element={<Navigate to="/app/home/dashboard" />} />
            <Route path="/app/home/dashboard" element={<Home />} />
            <Route path="/app/home/gettingstarted" element={<Home />} />
            <Route path="/app/home/announcements" element={<Home />} />
            <Route path="/app/home/recentupdated" element={<Home />} />

            {/* Inventory Route */}
            <Route path="/app/inventory/NewItem" element={<NewItems />} />

            {/* Banking Route */}
            <Route path="/app/banking" element={<Banking />} />

            {/* Sales Routes */}
            <Route path="/app/sales/Customers" element={<Customers />} />
            <Route path="/app/sales/Quotes" element={<Quotes />} />
            <Route path="/app/sales/SalesOrders" element={<SalesOrders />} />
            <Route
              path="/app/sales/DeliveryChallans"
              element={<DeliveryChallans />}
            />
            <Route path="/app/sales/Invoices" element={<Invoices />} />
            <Route
              path="/app/sales/PaymentsReceived"
              element={<PaymentsReceived />}
            />
            <Route path="/app/sales/CreditNotes" element={<CreditNotes />} />

            {/* Purchase Routes */}
            <Route path="/app/purchase/Vendors" element={<Vendors />} />
            <Route path="/app/purchase/Expenses" element={<Expenses />} />
            <Route
              path="/app/purchase/PurchaseOrders"
              element={<PurchaseOrders />}
            />
            <Route path="/app/purchase/Bills" element={<Bills />} />
            <Route
              path="/app/purchase/PaymentsMade"
              element={<PaymentsMade />}
            />
            <Route
              path="/app/purchase/VendorCredits"
              element={<VendorCredits />}
            />

            {/* Time Tracking Routes */}
            <Route path="/app/timetrack/projects" element={<Project />} />
            <Route path="/app/timetrack/timesheet" element={<TimeSheet />} />

            {/* Accountant */}
            <Route
              path="/app/accountant/manualjournals"
              element={<ManualJournal />}
            />
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;
