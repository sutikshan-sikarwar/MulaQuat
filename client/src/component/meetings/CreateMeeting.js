import React, { useState } from 'react';

const CreateMeeting = () => {
  // State variables to store meeting details and error message
  const [meetingDetails, setMeetingDetails] = useState({
    title: '',
    date: '',
    startTime: '',
    endTime: ''
  });
  const [errorMessage, setErrorMessage] = useState('');

  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Check if any field is empty
    for (const key in meetingDetails) {
      if (meetingDetails[key].trim() === '') {
        setErrorMessage(`Please enter ${key === 'title' ? 'a' : 'an'} ${key}.`);
        return;
      }
    }

    // TODO: Add code to create meeting (e.g., API call)
    console.log('Meeting details:', meetingDetails);
    // Reset input fields and error message
    setMeetingDetails({
      title: '',
      date: '',
      startTime: '',
      endTime: ''
    });
    setErrorMessage('');
  };

  return (
    <div className="container mx-auto mt-8 flex justify-center items-center">
      <div className="max-w-lg">
        <h1 className="text-2xl font-bold mb-4">Create a New Meeting</h1>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-gray-700 font-bold mb-2" htmlFor="title">Meeting Title</label>
            <input 
              type="text" 
              id="title"
              placeholder="Enter meeting title" 
              value={meetingDetails.title}
              onChange={(e) => setMeetingDetails({ ...meetingDetails, title: e.target.value })}
              className="px-4 py-2 border border-gray-300 rounded-md w-full focus:outline-none focus:border-blue-500"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 font-bold mb-2" htmlFor="date">Date</label>
            <input 
              type="date" 
              id="date"
              value={meetingDetails.date}
              onChange={(e) => setMeetingDetails({ ...meetingDetails, date: e.target.value })}
              className="px-4 py-2 border border-gray-300 rounded-md w-full focus:outline-none focus:border-blue-500"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 font-bold mb-2" htmlFor="startTime">From</label>
            <input 
              type="time" 
              id="startTime"
              value={meetingDetails.startTime}
              onChange={(e) => setMeetingDetails({ ...meetingDetails, startTime: e.target.value })}
              className="px-4 py-2 border border-gray-300 rounded-md w-full focus:outline-none focus:border-blue-500"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 font-bold mb-2" htmlFor="endTime">To</label>
            <input 
              type="time" 
              id="endTime"
              value={meetingDetails.endTime}
              onChange={(e) => setMeetingDetails({ ...meetingDetails, endTime: e.target.value })}
              className="px-4 py-2 border border-gray-300 rounded-md w-full focus:outline-none focus:border-blue-500"
            />
          </div>
          <button 
            type="submit" 
            className="bg-gray-600 ml-12 text-white px-6 py-2 rounded-md shadow-md hover:bg-gray-800 transition duration-300"
          >
            Create Meeting
          </button>
        </form>
        {errorMessage && <p className="text-red-500 mt-2">{errorMessage}</p>}
      </div>
    </div>
  );
};

export default CreateMeeting;
