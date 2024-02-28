import React, { useState, useEffect } from 'react';
import axios from 'axios';

const MeetingList = () => {
  const [meetings, setMeetings] = useState([]);

  useEffect(() => {
    axios.get('/api/meetings')
      .then(response => {
        setMeetings(response.data);
      })
      .catch(error => {
        console.error('Error fetching meetings:', error);
      });
  }, []);

  return (
    <div>
      <h2>Meeting List</h2>
      <ul>
        {meetings.map(meeting => (
          <li key={meeting._id}>{meeting.title}</li>
        ))}
      </ul>
    </div>
  );
}

export default MeetingList;
