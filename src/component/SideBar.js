import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
function SideBar() {
  const [openSection, setOpenSection] = useState(null);

  const handleToggle = (section) => {
    if (openSection === section) {
      setOpenSection(null);
    } else {
      setOpenSection(section);
    }
  };
  const [isSidebarClosed, setIsSidebarClosed] = useState(false);
  const toggleSidebar = () => {
    setIsSidebarClosed((prev) => !prev);
  };

  return (
    <div
      className={`bg-gray-600 text-white h-full w-[20%] transition-all duration-200`}
      style={{ width: isSidebarClosed ?? "80px" }}
    >
      <div className="bg-gray-700 p-4 flex items-center space-x-2 border-b border-gray-700">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 512 512"
          className="w-6 h-6 text-white"
        >
          <path d="M361 502.5H24.5c-8 0-14.4-6.5-14.4-14.4V365.8c0-26.7 17-50.5 42.2-59.2l373-128c29-10 48.6-37.3 48.6-68 0-39.6-32.3-71.9-71.9-71.9H39v238.1c0 8-6.5 14.4-14.4 14.4S10 284.9 10 276.9V24.3c0-8 6.5-14.4 14.4-14.4h377.5c55.6 0 100.8 45.2 100.8 100.8 0 43-27.3 81.3-68.1 95.3l-373 128a33.72 33.72 0 00-22.7 31.9v107.8H361c30.1 0 58.5-11.7 79.8-33a112 112 0 0033-79.8c0-21.3-6-42.1-17.4-60.1a113.42 113.42 0 00-46.1-41.3 14.41 14.41 0 01-6.7-19.3c3.5-7.2 12.1-10.2 19.3-6.7 23.8 11.5 43.8 29.5 58 51.9 14.3 22.6 21.8 48.8 21.8 75.6 0 37.8-14.7 73.4-41.5 100.2A141.24 141.24 0 01361 502.5z"></path>
          <path d="M172.4 211.9c-31.8 0-57.7-25.9-57.7-57.7s25.9-57.7 57.7-57.7 57.7 25.9 57.7 57.7-25.9 57.7-57.7 57.7zm0-86.6c-15.9 0-28.9 13-28.9 28.9s13 28.9 28.9 28.9 28.9-13 28.9-28.9-13-28.9-28.9-28.9zm144.7 290.4c-31.8 0-57.7-25.9-57.7-57.7s25.9-57.7 57.7-57.7 57.7 25.9 57.7 57.7-25.8 57.7-57.7 57.7zm0-86.6c-15.9 0-28.9 13-28.9 28.9s13 28.9 28.9 28.9 28.9-13 28.9-28.9-12.9-28.9-28.9-28.9z"></path>
        </svg>
        <span className="text-lg font-bold">Books</span>
      </div>
      <div className="flex flex-col mt-4  gap-[10px]">
        {/* Home */}
        <Link
          to="/app/home/dashboard"
          className="flex items-center space-x-2 px-4 py-2 hover:bg-gray-700"
        >
          <svg
            id="Layer_2"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 514 458.5"
            className="w-6 h-6 text-white"
          >
            <path
              d="M507 185.7L315.7 20.9C283.6-6.7 236.8-7 204.3 20.2L7.2 185.5c-8.5 7.1-9.6 19.7-2.5 28.2 4 4.7 9.6 7.2 15.3 7.2s9.1-1.5 12.8-4.7l25.6-21.4v165.4c.9 54.4 45.4 98.4 100 98.4h197.2c54.6 0 99.1-44 100-98.4V194.3l25.4 21.8c8.4 7.2 21 6.3 28.2-2.1 7.2-8.4 6.3-21-2.1-28.2zM298.7 418.5h-83.5v-65.7c0-23 18.7-41.8 41.8-41.8s41.8 18.7 41.8 41.8v65.7zm116.8-60c0 33.1-26.9 60-60 60h-16.8v-65.7c0-45.1-36.7-81.8-81.8-81.8s-81.8 36.7-81.8 81.8v65.7h-16.8c-33.1 0-60-26.9-60-60V161.2L230 50.9c17.4-14.6 42.4-14.4 59.6.4l126 108.5v198.7z"
              id="Layer_1-2"
            ></path>
          </svg>
          <span>Home</span>
        </Link>
        {/* Items */}
        <Link
          to="/app/inventory/NewItem"
          className="flex items-center space-x-2 px-4 py-2 hover:bg-gray-700"
        >
          <svg
            id="Layer_2"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 504.9 487.3"
            className="w-6 h-6 text-white"
          >
            <g id="Layer_1-2">
              <path d="M483 155.4c-19.1-24-47.6-37.7-78.2-37.7H375C373.8 86.8 361.2 58 339.2 36 315.6 12.4 284.3-.4 250.9 0c-32.6.4-63.1 13.6-86 37.1-21.2 21.9-33.5 50.2-35.1 80.5H100c-30.6 0-59.1 13.7-78.2 37.7-19 23.9-26 54.7-19.3 84.5l34.3 169.4c0 .2 0 .3.1.5 5 22 17.5 41.8 35.2 55.8s39.8 21.8 62.3 21.8h236.1c22.5 0 44.7-7.7 62.3-21.8 17.6-14 30.1-33.9 35.2-55.8 0-.2 0-.3.1-.5l34.3-169.4c6.8-29.8-.3-60.5-19.3-84.4zM251.4 40c22.5-.3 43.6 8.3 59.5 24.2 14.4 14.4 22.8 33.3 24.1 53.4H170c3.2-42.9 38.5-77.2 81.5-77.6zm211.9 191.1c0 .2 0 .3-.1.5L428.9 401c-6.4 27.3-30.4 46.3-58.4 46.3H134.4c-28.1 0-52-19-58.4-46.3L41.7 231.6c0-.2 0-.3-.1-.5-4.1-17.9 0-36.4 11.5-50.8 11.4-14.4 28.6-22.6 46.9-22.6h304.8c18.4 0 35.5 8.2 46.9 22.6 11.4 14.4 15.7 32.9 11.5 50.8z"></path>
              <path d="M308.6 282.5H196.3c-11 0-20 9-20 20s9 20 20 20h112.3c11 0 20-9 20-20s-9-20-20-20z"></path>
            </g>
          </svg>
          <span>Items</span>
        </Link>
        {/* Banking */}
        <Link
          to="/app/banking"
          className="flex items-center space-x-2 px-4 py-2 hover:bg-gray-700"
        >
          <svg
            id="Layer_2"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 512 501.7"
            className="w-6 h-6 text-white"
          >
            <g id="Layer_1-2">
              <path d="M51.1 211.8H461c28.2 0 51.1-22.9 51.1-51.1s-10-35.5-26-44.5L300 11.5c-27.1-15.3-60.8-15.3-87.9 0L26 116.3c-16 9-26 26.1-26 44.5 0 28.2 22.9 51.1 51.1 51.1zm-5.4-60.7l186-104.8c7.5-4.2 15.9-6.3 24.3-6.3s16.8 2.1 24.3 6.3l186 104.8c3.5 2 5.6 5.7 5.6 9.6 0 6.1-5 11.1-11.1 11.1H51.1c-6.1 0-11.1-5-11.1-11.1s2.2-7.7 5.6-9.6zM492 461.7h-53.8V272.9c0-11-9-20-20-20s-20 9-20 20v188.8H276V272.9c0-11-9-20-20-20s-20 9-20 20v188.8H113.8V272.9c0-11-9-20-20-20s-20 9-20 20v188.8H20c-11 0-20 9-20 20s9 20 20 20h472c11 0 20-9 20-20s-9-20-20-20z"></path>
            </g>
          </svg>
          <span>Banking</span>
        </Link>
        <br></br>
        {/* Sales */}
        <div>
          <Link
            onClick={() => handleToggle("sales")}
            to="#"
            className="flex items-center space-x-2 px-4 py-2 hover:bg-gray-700"
          >
            <svg
              id="Layer_2"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 484.4"
              className="w-6 h-6 text-white"
            >
              <g id="Layer_1-2">
                <path d="M497.2 95.7c-12.8-15.9-31.9-25.1-52.3-25.1h-202c-11 0-20 9-20 20s9 20 20 20h202c8.3 0 16 3.7 21.2 10.1 5.2 6.4 7.1 14.8 5.3 22.8l-34.5 156c-5.2 23.4-25.5 39.7-49.5 39.7H210.2c-24.4 0-45.7-17.4-50.6-41.3L108 44.4C102.7 18.7 79.9 0 53.6 0H20C9 0 0 9 0 20s9 20 20 20h33.6c7.3 0 13.7 5.2 15.1 12.4l51.7 253.7c8.7 42.5 46.4 73.3 89.8 73.3h177.2c20.6 0 40.7-7.1 56.8-20 16-12.9 27.3-31 31.7-51.1l34.5-156c4.4-20-.4-40.6-13.2-56.5z"></path>
                <circle cx="182.8" cy="450.5" r="33.9"></circle>
                <path d="M414.8 416.6c-18.7 0-33.9 15.2-33.9 33.9s15.2 33.9 33.9 33.9 33.9-15.2 33.9-33.9-15.2-33.9-33.9-33.9z"></path>
              </g>
            </svg>
            <span>Sales</span>
            {openSection === "sales" ? (
              <img
                src="https://www.svgrepo.com/show/80156/down-arrow.svg"
                alt="down arrow"
                className="h-6 w-6 relative left-[130px]"
              />
            ) : (
              <img
                src="https://www.svgrepo.com/show/27797/right-arrow.svg"
                alt="right arrow"
                className="h-6 w-6 relative left-[130px]"
              />
            )}
          </Link>
          {openSection === "sales" && (
            <ul className="pl-12">
              <li>
                <Link
                  to="/app/sales/Customers"
                  className="block py-1 hover:text-gray-300"
                >
                  Customers
                </Link>
              </li>
              <li>
                <Link
                  to="/app/sales/Quotes"
                  className="block py-1 hover:text-gray-300"
                >
                  Quotes
                </Link>
              </li>
              <li>
                <Link
                  to="/app/sales/SalesOrders"
                  className="block py-1 hover:text-gray-300"
                >
                  Sales Orders
                </Link>
              </li>
              <li>
                <Link
                  to="/app/sales/DeliveryChallans"
                  className="block py-1 hover:text-gray-300"
                >
                  Delivery Challans
                </Link>
              </li>
              <li>
                <Link
                  to="/app/sales/Invoices"
                  className="block py-1 hover:text-gray-300"
                >
                  Invoices
                </Link>
              </li>
              <li>
                <Link
                  to="/app/sales/PaymentsReceived"
                  className="block py-1 hover:text-gray-300"
                >
                  Payments Received
                </Link>
              </li>
              <li>
                <Link
                  to="/app/sales/CreditNotes"
                  className="block py-1 hover:text-gray-300"
                >
                  Credit Notes
                </Link>
              </li>
            </ul>
          )}
        </div>
        {/* Purchase */}
        <div>
          <Link
            path="#"
            onClick={() => handleToggle("purchase")}
            className="flex items-center space-x-2 px-4 py-2 hover:bg-gray-700"
          >
            <svg
              id="Layer_2"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 423.1 512"
              className="h-6 w-6 text-white"
            >
              <g id="Layer_1-2">
                <path d="M166.8 220.6c-.1-.7-.3-1.3-.5-2-.2-.6-.4-1.3-.7-1.9l-.9-1.8c-.3-.6-.7-1.2-1-1.8-.4-.6-.8-1.1-1.2-1.6-.4-.5-.9-1-1.4-1.5-.5-.5-1-.9-1.5-1.4-.5-.4-1.1-.8-1.6-1.2-.6-.4-1.2-.7-1.8-1l-1.8-.9c-.6-.3-1.3-.5-1.9-.7-.7-.2-1.3-.4-2-.5-.7-.1-1.4-.2-2-.3-1.4-.1-2.7-.1-4.1 0-.7 0-1.4.2-2 .3-.7.1-1.3.3-2 .5-.6.2-1.3.4-1.9.7l-1.8.9c-.6.3-1.2.7-1.8 1-.6.4-1.1.8-1.6 1.2-.5.4-1 .9-1.5 1.4-.5.5-.9 1-1.4 1.5-.4.5-.8 1.1-1.2 1.6-.4.6-.7 1.2-1 1.8l-.9 1.8c-.3.6-.5 1.3-.7 1.9-.2.7-.4 1.3-.5 2-.1.7-.2 1.4-.3 2 0 .7-.1 1.4-.1 2.1s0 1.4.1 2.1c0 .7.2 1.4.3 2 .1.7.3 1.3.5 2 .2.6.4 1.3.7 1.9l.9 1.8c.3.6.7 1.2 1 1.8.4.6.8 1.1 1.2 1.6.4.5.9 1 1.4 1.5.5.5 1 .9 1.5 1.4.5.4 1.1.8 1.6 1.2.6.4 1.2.7 1.8 1l1.8.9c.6.3 1.3.5 1.9.7.7.2 1.3.4 2 .5.7.1 1.4.2 2 .3.7 0 1.4.1 2.1.1s1.4 0 2.1-.1c.7 0 1.4-.2 2-.3.7-.1 1.3-.3 2-.5.6-.2 1.3-.4 1.9-.7l1.8-.9c.6-.3 1.2-.7 1.8-1 .6-.4 1.1-.8 1.6-1.2.5-.4 1-.9 1.5-1.4.5-.5.9-1 1.4-1.5.4-.5.8-1.1 1.2-1.6.4-.6.7-1.2 1-1.8l.9-1.8c.3-.6.5-1.3.7-1.9.2-.7.4-1.3.5-2 .1-.7.2-1.4.3-2 0-.7.1-1.4.1-2.1s0-1.4-.1-2.1c0-.7-.2-1.4-.3-2z"></path>
                <path d="M422.5 423.3v-.2l-31.6-246.7c-4.7-40-38.7-70.2-79-70.2H308v-9.7c0-25.7-10-50-28.2-68.2C261.5 10 237.3 0 211.5 0c-53.2 0-96.4 43.2-96.4 96.4v9.7h-3.9c-40.3 0-74.3 30.2-79 70.2L.6 423v.2c-2.6 22.5 4.5 45.1 19.6 62.1s36.7 26.6 59.4 26.6h264c22.7 0 44.3-9.7 59.4-26.6 15.1-16.9 22.2-39.6 19.6-62.1zM155.1 96.4c0-31.1 25.3-56.4 56.4-56.4s29.2 5.9 39.9 16.5c10.7 10.7 16.5 24.8 16.5 39.9v9.7H155.1v-9.7zM373 458.7c-7.6 8.5-18.1 13.2-29.5 13.2h-264c-11.4 0-21.9-4.7-29.5-13.2-7.6-8.5-11-19.4-9.8-30.8l31.6-246.7v-.2c2.3-19.9 19.2-35 39.3-35h200.7c20.1 0 37 15 39.3 35v.2l31.6 246.7c1.3 11.3-2.2 22.2-9.8 30.8z"></path>
              </g>
            </svg>
            <span>Purchase</span>
            {openSection === "purchase" ? (
              <img
                src="https://www.svgrepo.com/show/80156/down-arrow.svg"
                alt="down arrow"
                className="h-6 w-6 relative left-[105px]"
              />
            ) : (
              <img
                src="https://www.svgrepo.com/show/27797/right-arrow.svg"
                alt="right arrow"
                className="h-6 w-6 relative left-[105px]"
              />
            )}
          </Link>
          {openSection === "purchase" && (
            <ul className="pl-12">
              <li>
                <Link
                  to="/app/purchase/Vendors"
                  className="block py-1 hover:text-gray-300"
                >
                  Vendors
                </Link>
              </li>
              <li>
                <Link
                  to="/app/purchase/Expenses"
                  className="block py-1 hover:text-gray-300"
                >
                  Expenses
                </Link>
              </li>
              <li>
                <Link
                  to="/app/purchase/PurchaseOrders"
                  className="block py-1 hover:text-gray-300"
                >
                  Purchase Orders
                </Link>
              </li>
              <li>
                <Link
                  to="/app/purchase/Bills"
                  className="block py-1 hover:text-gray-300"
                >
                  Bills
                </Link>
              </li>
              <li>
                <Link
                  to="/app/purchase/PaymentsMade"
                  className="block py-1 hover:text-gray-300"
                >
                  Payments Made
                </Link>
              </li>
              <li>
                <Link
                  to="/app/purchase/VendorCredits"
                  className="block py-1 hover:text-gray-300"
                >
                  Vendor Credits
                </Link>
              </li>
            </ul>
          )}
        </div>
        {/* Time Tracking */}
        <div>
          <Link
            path="#"
            onClick={() => handleToggle("timeTracking")}
            className="flex items-center space-x-2 px-4 py-2 hover:bg-gray-700"
          >
            <svg
              id="Layer_2"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 423.1 512"
              className="h-6 w-6 text-white"
            >
              <g id="Layer_1-2">
                <path d="M166.8 220.6c-.1-.7-.3-1.3-.5-2-.2-.6-.4-1.3-.7-1.9l-.9-1.8c-.3-.6-.7-1.2-1-1.8-.4-.6-.8-1.1-1.2-1.6-.4-.5-.9-1-1.4-1.5-.5-.5-1-.9-1.5-1.4-.5-.4-1.1-.8-1.6-1.2-.6-.4-1.2-.7-1.8-1l-1.8-.9c-.6-.3-1.3-.5-1.9-.7-.7-.2-1.3-.4-2-.5-.7-.1-1.4-.2-2-.3-1.4-.1-2.7-.1-4.1 0-.7 0-1.4.2-2 .3-.7.1-1.3.3-2 .5-.6.2-1.3.4-1.9.7l-1.8.9c-.6.3-1.2.7-1.8 1-.6.4-1.1.8-1.6 1.2-.5.4-1 .9-1.5 1.4-.5.5-.9 1-1.4 1.5-.4.5-.8 1.1-1.2 1.6-.4.6-.7 1.2-1 1.8l-.9 1.8c-.3.6-.5 1.3-.7 1.9-.2.7-.4 1.3-.5 2-.1.7-.2 1.4-.3 2 0 .7-.1 1.4-.1 2.1s0 1.4.1 2.1c0 .7.2 1.4.3 2 .1.7.3 1.3.5 2 .2.6.4 1.3.7 1.9l.9 1.8c.3.6.7 1.2 1 1.8.4.6.8 1.1 1.2 1.6.4.5.9 1 1.4 1.5.5.5 1 .9 1.5 1.4.5.4 1.1.8 1.6 1.2.6.4 1.2.7 1.8 1l1.8.9c.6.3 1.3.5 1.9.7.7.2 1.3.4 2 .5.7.1 1.4.2 2 .3.7 0 1.4.1 2.1.1s1.4 0 2.1-.1c.7 0 1.4-.2 2-.3.7-.1 1.3-.3 2-.5.6-.2 1.3-.4 1.9-.7l1.8-.9c.6-.3 1.2-.7 1.8-1 .6-.4 1.1-.8 1.6-1.2.5-.4 1-.9 1.5-1.4.5-.5.9-1 1.4-1.5.4-.5.8-1.1 1.2-1.6.4-.6.7-1.2 1-1.8l.9-1.8c.3-.6.5-1.3.7-1.9.2-.7.4-1.3.5-2 .1-.7.2-1.4.3-2 0-.7.1-1.4.1-2.1s0-1.4-.1-2.1c0-.7-.2-1.4-.3-2zM297.2 220.6c-.1-.7-.3-1.3-.5-2-.2-.6-.4-1.3-.7-1.9l-.9-1.8c-.3-.6-.7-1.2-1-1.8-.4-.6-.8-1.1-1.2-1.6-.4-.5-.9-1-1.4-1.5-.5-.5-1-.9-1.5-1.4-.5-.4-1.1-.8-1.6-1.2-.6-.4-1.2-.7-1.8-1l-1.8-.9c-.6-.3-1.3-.5-1.9-.7-.7-.2-1.3-.4-2-.5-.7-.1-1.4-.2-2-.3-1.4-.1-2.7-.1-4.1 0-.7 0-1.4.2-2 .3-.7.1-1.3.3-2 .5-.6.2-1.3.4-1.9.7l-1.8.9c-.6.3-1.2.7-1.8 1-.6.4-1.1.8-1.6 1.2-.5.4-1 .9-1.5 1.4-.5.5-.9 1-1.4 1.5-.4.5-.8 1.1-1.2 1.6-.4.6-.7 1.2-1 1.8l-.9 1.8c-.3.6-.5 1.3-.7 1.9-.2.7-.4 1.3-.5 2-.1.7-.2 1.4-.3 2 0 .7-.1 1.4-.1 2.1s0 1.4.1 2.1c0 .7.2 1.4.3 2 .1.7.3 1.3.5 2 .2.6.4 1.3.7 1.9l.9 1.8c.3.6.7 1.2 1 1.8.4.6.8 1.1 1.2 1.6.4.5.9 1 1.4 1.5s1 .9 1.5 1.4c.5.4 1.1.8 1.6 1.2.6.4 1.2.7 1.8 1l1.8.9c.6.3 1.3.5 1.9.7.7.2 1.3.4 2 .5.7.1 1.4.2 2 .3.7 0 1.4.1 2.1.1s1.4 0 2.1-.1c.7 0 1.4-.2 2-.3.7-.1 1.3-.3 2-.5.6-.2 1.3-.4 1.9-.7l1.8-.9c.6-.3 1.2-.7 1.8-1 .6-.4 1.1-.8 1.6-1.2.5-.4 1-.9 1.5-1.4.5-.5.9-1 1.4-1.5.4-.5.8-1.1 1.2-1.6.4-.6.7-1.2 1-1.8l.9-1.8c.3-.6.5-1.3.7-1.9.2-.7.4-1.3.5-2 .1-.7.2-1.4.3-2 0-.7.1-1.4.1-2.1s0-1.4-.1-2.1c0-.7-.2-1.4-.3-2z"></path>
                <path d="M422.5 423.3v-.2l-31.6-246.7c-4.7-40-38.7-70.2-79-70.2H308v-9.7c0-25.7-10-50-28.2-68.2C261.5 10 237.3 0 211.5 0c-53.2 0-96.4 43.2-96.4 96.4v9.7h-3.9c-40.3 0-74.3 30.2-79 70.2L.6 423v.2c-2.6 22.5 4.5 45.1 19.6 62.1s36.7 26.6 59.4 26.6h264c22.7 0 44.3-9.7 59.4-26.6 15.1-16.9 22.2-39.6 19.6-62.1zM155.1 96.4c0-31.1 25.3-56.4 56.4-56.4s29.2 5.9 39.9 16.5c10.7 10.7 16.5 24.8 16.5 39.9v9.7H155.1v-9.7zM373 458.7c-7.6 8.5-18.1 13.2-29.5 13.2h-264c-11.4 0-21.9-4.7-29.5-13.2-7.6-8.5-11-19.4-9.8-30.8l31.6-246.7v-.2c2.3-19.9 19.2-35 39.3-35h200.7c20.1 0 37 15 39.3 35v.2l31.6 246.7c1.3 11.3-2.2 22.2-9.8 30.8z"></path>
              </g>
            </svg>
            <span>Time Tracking</span>
            {openSection === "timeTracking" ? (
              <img
                src="https://www.svgrepo.com/show/80156/down-arrow.svg"
                alt="down arrow"
                className="h-6 w-6 relative left-[70px]"
              />
            ) : (
              <img
                src="https://www.svgrepo.com/show/27797/right-arrow.svg"
                alt="right arrow"
                className="h-6 w-6 relative left-[70px]"
              />
            )}
          </Link>
          {openSection === "timeTracking" && (
            <ul className="pl-12">
              <li>
                <Link
                  to="/app/timetrack/projects"
                  className="block py-1 hover:text-gray-300"
                >
                  Projects
                </Link>
              </li>
              <li>
                <Link
                  to="/app/timetrack/timesheet"
                  className="block py-1 hover:text-gray-300"
                >
                  Timesheet
                </Link>
              </li>
            </ul>
          )}
        </div>
        {/* Accountant */}
        <div>
          <Link
            onClick={() => handleToggle("accountant")}
            to="#"
            className="flex items-center space-x-2 px-4 py-2 hover:bg-gray-700"
          >
            <svg
              id="Layer_2"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 455.2 512.6"
              className="w-6 h-6 text-white"
            >
              <g id="Layer_1-2">
                <path d="M215.1 227.8c62.8 0 113.9-51.1 113.9-113.9S277.9 0 215.1 0 101.2 51.1 101.2 113.9s51.1 113.9 113.9 113.9zm0-187.8c40.8 0 73.9 33.2 73.9 73.9s-33.2 73.9-73.9 73.9-73.9-33.2-73.9-73.9S174.4 40 215.1 40zM55.2 378c10.2-36.7 44-62.4 82.2-62.4h127.7c11 0 20-9 20-20s-9-20-20-20H137.4c-27.6 0-53.8 8.8-75.8 25.5s-37.5 39.6-44.9 66.1L2.8 417.1c-6.3 22.7-1.8 46.5 12.5 65.3 14.3 18.8 36 29.6 59.6 29.6h140.3c11 0 20-9 20-20s-9-20-20-20H74.8c-11 0-21.1-5-27.7-13.7-6.6-8.7-8.7-19.8-5.8-30.4L55.2 378zM435.7 386.9l-22.7-4.3c-7-1.3-13.1-5.7-16.5-12l-11.1-20.2c-9-16.5-32.8-16.5-41.8 0l-11.1 20.2c-3.4 6.3-9.5 10.7-16.5 12l-22.7 4.3c-18.5 3.5-25.9 26.1-12.9 39.8l15.8 16.8c4.9 5.2 7.2 12.3 6.3 19.4l-3 22.9c-2.4 18.7 16.8 32.7 33.8 24.6l20.8-9.9c6.5-3.1 14-3.1 20.4 0l20.8 9.9c17 8.1 36.3-5.9 33.8-24.6l-3-22.9c-.9-7.1 1.4-14.2 6.3-19.4l15.8-16.8c12.9-13.7 5.6-36.3-12.9-39.8z"></path>
              </g>
            </svg>
            <span>Accountant</span>
            {openSection === "accountant" ? (
              <img
                src="https://www.svgrepo.com/show/80156/down-arrow.svg"
                alt="down arrow"
                className="h-6 w-6 relative left-[88px]"
              />
            ) : (
              <img
                src="https://www.svgrepo.com/show/27797/right-arrow.svg"
                alt="right arrow"
                className="h-6 w-6 relative left-[88px]"
              />
            )}
          </Link>
          {openSection === "accountant" && (
            <ul className="pl-12">
              <li>
                <Link
                  to="/app/accountant/manualjournals"
                  className="block py-1 hover:text-gray-300"
                >
                  Manual Journals
                </Link>
              </li>
              <li>
                <Link to="#" className="block py-1 hover:text-gray-300">
                  Bulk Update
                </Link>
              </li>
              <li>
                <Link to="#" className="block py-1 hover:text-gray-300">
                  Chart of Accounts
                </Link>
              </li>
              <li>
                <Link to="#" className="block py-1 hover:text-gray-300">
                  Transaction Locking
                </Link>
              </li>
            </ul>
          )}
        </div>
        {/* Reports */}
        <Link
          to="#"
          className="flex items-center space-x-2 px-4 py-2 hover:bg-gray-700"
        >
          <svg
            id="Layer_2"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 459.1 512"
            className="w-6 h-6 text-white"
          >
            <g id="Layer_1-2">
              <path d="M382.4 412.6c11 0 20-9 20-20V20c0-11-9-20-20-20s-20 9-20 20v372.6c0 11 9 20 20 20zM77.7 412.6c11 0 20-9 20-20V256c0-11-9-20-20-20s-20 9-20 20v136.6c0 11 9 20 20 20zM229.1 412.6c11 0 20-9 20-20V133.9c0-11-9-20-20-20s-20 9-20 20v258.6c0 11 9 20 20 20zM439.1 472H20c-11 0-20 9-20 20s9 20 20 20h419.1c11 0 20-9 20-20s-9-20-20-20z"></path>
            </g>
          </svg>
          <span>Reports</span>
        </Link>
        <br></br>
        {/* Documents */}
        <Link
          to="#"
          className="flex items-center space-x-2 px-4 py-2 hover:bg-gray-700"
        >
          <svg
            id="Layer_2"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 512 490"
            className="w-6 h-6 text-white"
          >
            <path
              d="M492.4 192.6c-5.4-6.5-11.7-11.7-18.5-15.6v-29.9c0-43.4-35.3-78.7-78.7-78.7H270.3c-3.5 0-6.9-1.5-9.3-4.2l-40.8-45.6C209.7 6.8 194.4 0 178.5 0h-62C73.1 0 37.8 35.3 37.8 78.7v98.5c-6.7 3.8-12.8 9-18.2 15.4-16.1 19.1-22.8 46.5-18.1 73.2l26.1 147.8c3.7 20.9 13.1 39.9 26.5 53.6C68.5 481.9 86.9 490 106 490h299.9c19 0 37.4-8.1 51.8-22.8 13.6-13.9 22.8-32.4 26.6-53.5l26.3-147.8c4.7-26.7-2-54.1-18.1-73.3zM116.5 40h62c4.6 0 8.9 2 12 5.3l40.8 45.6c10 11.1 24.2 17.5 39.1 17.5h124.9c21.3 0 38.7 17.3 38.7 38.7v22.2H77.8V78.6c0-21.3 17.3-38.7 38.7-38.7zm354.6 218.9l-26.3 147.8c-4.5 25.1-20.9 43.3-39 43.3H106c-18.2 0-34.6-18.2-39-43.3L40.9 258.9c-2.6-14.9 1-30.5 9.4-40.5 3.4-4.1 9.1-8.9 16.7-8.9h378.1c7.6 0 13.3 4.9 16.7 8.9 8.4 10.1 12 25.6 9.4 40.6z"
              id="Layer_1-2"
            ></path>
          </svg>
          <span>Documents</span>
        </Link>
        <br></br>
        {/* More Features */}
        <Link
          to="#"
          className="flex items-center space-x-2 px-4 py-2 hover:bg-gray-700"
        >
          <svg
            id="Layer_2"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 512 493.58"
            className="w-6 h-6 text-white"
          >
            <path
              d="M372.18 493.58c-10.82 0-21.69-2.61-31.74-7.89l-71.38-37.53c-8.18-4.3-17.95-4.3-26.12 0l-71.38 37.53c-23.1 12.15-50.57 10.16-71.69-5.18-21.12-15.34-31.49-40.85-27.08-66.58l13.63-79.48c1.56-9.11-1.46-18.4-8.07-24.85L20.6 253.31C1.92 235.1-4.68 208.36 3.38 183.54s29.12-42.57 54.95-46.33l79.8-11.6a28.081 28.081 0 0021.14-15.36l35.69-72.31C206.51 14.54 229.9 0 256 0s49.49 14.54 61.04 37.94l35.69 72.31a28.064 28.064 0 0021.14 15.36l79.8 11.6c25.83 3.75 46.88 21.5 54.95 46.33s1.47 51.56-17.22 69.78l-57.74 56.29a28.04 28.04 0 00-8.07 24.85l13.63 79.48c4.41 25.72-5.96 51.24-27.08 66.58-11.93 8.67-25.89 13.07-39.95 13.07zM256 404.94c10.88 0 21.76 2.61 31.68 7.82l71.38 37.53c9.67 5.08 20.72 4.29 29.56-2.14 8.84-6.42 13.01-16.69 11.17-27.45l-13.63-79.48a68.038 68.038 0 0119.58-60.25l57.74-56.29c7.82-7.63 10.48-18.38 7.1-28.77-3.38-10.39-11.85-17.53-22.66-19.1l-79.8-11.6a68.02 68.02 0 01-51.25-37.24l-35.69-72.31c-4.84-9.8-14.25-15.65-25.17-15.65s-20.34 5.85-25.17 15.65l-35.69 72.31a68.1 68.1 0 01-51.25 37.24l-79.8 11.6c-10.81 1.57-19.28 8.71-22.66 19.1-3.38 10.39-.72 21.15 7.1 28.77l57.75 56.29a68.074 68.074 0 0119.58 60.25l-13.63 79.48c-1.85 10.77 2.33 21.03 11.17 27.45 8.84 6.42 19.89 7.22 29.56 2.14l71.38-37.53c9.92-5.21 20.8-7.82 31.68-7.82z"
              id="Layer_1-2"
            ></path>
          </svg>
          <span>More Features</span>
        </Link>
      </div>
      <div>
        <button
          onClick={toggleSidebar}
          className="bg-red-400 rounded-md p-2 hover:bg-red-500 relative left-[20px]"
        >
          <img
            src={
              isSidebarClosed
                ? "https://www.svgrepo.com/show/152459/right-thin-arrowheads.svg"
                : "https://www.svgrepo.com/show/43165/arrowheads-of-thin-outline-to-the-left.svg"
            }
            alt="toggle arrow"
            className="h-6 w-6"
          />
        </button>
      </div>
    </div>
  );
}

export default SideBar;
