import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const MeetingDetail = () => {
  const { id } = useParams();
  const [meeting, setMeeting] = useState(null);

  useEffect(() => {
    axios.get(`/api/meetings/${id}`)
      .then(response => {
        setMeeting(response.data);
      })
      .catch(error => {
        console.error('Error fetching meeting details:', error);
      });
  }, [id]);

  return (
    <div>
      {meeting ? (
        <div>
          <h2>{meeting.title}</h2>
          <p>Description: {meeting.description}</p>
          <p>Start Time: {meeting.startTime}</p>
          <p>End Time: {meeting.endTime}</p>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}

export default MeetingDetail;
