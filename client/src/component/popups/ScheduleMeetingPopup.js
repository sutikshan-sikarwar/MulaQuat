import React, { useState, useEffect, useRef } from 'react';

const ScheduleMeetingPopup = ({ onClose, onSubmit }) => {
  const [meetingTitle, setMeetingTitle] = useState('');
  const [date, setDate] = useState('');
  const [startTime, setStartTime] = useState('');
  const [endTime, setEndTime] = useState('');
  const popupRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (popupRef.current && !popupRef.current.contains(event.target)) {
        onClose();
      }
    };

    window.addEventListener('mousedown', handleClickOutside);
    return () => {
      window.removeEventListener('mousedown', handleClickOutside);
    };
  }, [onClose]);

  const handleSubmit = () => {
    // Validate meeting details (e.g., ensure required fields are filled)
    if (!meetingTitle || !date || !startTime || !endTime) {
      alert('Please fill in all the fields');
      return;
    }

    // Call onSubmit callback with meeting details
    onSubmit({ meetingTitle, date, startTime, endTime });

    // Close the popup
    onClose();
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="bg-white p-6 rounded-lg shadow-lg" ref={popupRef}>
        <h2 className="text-lg font-semibold mb-4">Schedule Meeting</h2>
        <div className="mb-4">
          <label htmlFor="meetingTitle" className="block text-sm font-medium text-gray-700">Meeting Title:</label>
          <input type="text" id="meetingTitle" className="w-full mt-1 p-2 border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-gray-400" value={meetingTitle} onChange={(e) => setMeetingTitle(e.target.value)} />
        </div>
        <div className="mb-4">
          <label htmlFor="date" className="block text-sm font-medium text-gray-700">Date:</label>
          <input type="date" id="date" className="w-full mt-1 p-2 border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-gray-400" value={date} onChange={(e) => setDate(e.target.value)} />
        </div>
        <div className="mb-4">
          <label htmlFor="startTime" className="block text-sm font-medium text-gray-700">Start Time:</label>
          <input type="time" id="startTime" className="w-full mt-1 p-2 border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-gray-400" value={startTime} onChange={(e) => setStartTime(e.target.value)} />
        </div>
        <div className="mb-4">
          <label htmlFor="endTime" className="block text-sm font-medium text-gray-700">End Time:</label>
          <input type="time" id="endTime" className="w-full mt-1 p-2 border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-gray-400" value={endTime} onChange={(e) => setEndTime(e.target.value)} />
        </div>
        <div className="flex justify-end">
          <button className="px-4 py-2 bg-gray-600 text-white rounded-md mr-2" onClick={onClose}>Cancel</button>
          <button className="px-4 py-2 bg-blue-600 text-white rounded-md" onClick={handleSubmit}>Submit</button>
        </div>
      </div>
    </div>
  );
};

export default ScheduleMeetingPopup;
