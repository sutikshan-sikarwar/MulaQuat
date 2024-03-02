import React, { useState, useEffect, useRef } from 'react';
import ScheduleMeetingPopup from '../component/popups/ScheduleMeetingPopup';


const Home = () => {
  const [showDropdown, setShowDropdown] = useState(false);
  const [showPopup, setShowPopup] = useState(false); 

  const dropdownRef = useRef(null);
  const popupRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setShowDropdown(false);
      }
      if (popupRef.current && !popupRef.current.contains(event.target)) {
        setShowDropdown(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };

  const togglePopup = () => {
    setShowPopup(!showPopup);
  };

  const handleScheduleMeeting = () => {
    // Show the popup when "Schedule Meeting" is clicked
    togglePopup();
    // Close the dropdown menu
    setShowDropdown(false);
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      {/* Big Logo */}
      <img src="/Meet_logo.png" alt="Big Logo" className="w-64 h-64 mb-8" />

      {/* Dropdown Menu */}
      <div className="relative mb-4" ref={dropdownRef}>
        <button className="bg-gray-600 text-white px-12 py-2 rounded-md shadow-md hover:bg-gray-800 transition duration-300" onClick={toggleDropdown}>
          {showDropdown ? 'Create Meeting ▲' : 'Create Meeting ▼'}
        </button>
        {showDropdown && (
          <div className="absolute z-10 mt-2 w-60 bg-white border border-gray-300 shadow-md rounded-md">
            <p className="block px-4 py-2 text-gray-800 hover:bg-gray-100 w-full text-left" onClick={() => setShowDropdown(false)}>Start Instant Meeting</p>
            <p className="block px-4 py-2 text-gray-800 cursor-pointer hover:bg-gray-100 w-full text-left" onClick={handleScheduleMeeting}>Schedule Meeting</p>
          </div>
        )}
      </div>

      {/* Input and Button in Same Row */}
      <div className="mt-[80px] flex gap-4 items-center">
        <input type="text" placeholder="Enter code" className="w-64 px-4 py-2 border border-gray-300 rounded-l-md focus:outline-none" />
        <p className="text-gray-600 hover:text-gray-900 text-lg font-medium cursor-pointer" onClick={() => alert('Join Meeting clicked')}>Join Meeting</p>
      </div>

      {/* Render the ScheduleMeetingPopup if showPopup is true */}
      {showPopup && <ScheduleMeetingPopup onClose={togglePopup} onSubmit={(meetingDetails) => console.log('Meeting details:', meetingDetails)} />}
    </div>
  );
}

export default Home;
