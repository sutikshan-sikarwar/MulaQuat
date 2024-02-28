import React, { useState } from 'react';
import axios from 'axios';

const CreateMeeting = () => {
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    startTime: '',
    endTime: ''
  });

  const { title, description, startTime, endTime } = formData;

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('/api/meetings', formData)
      .then(response => {
        console.log('Meeting created successfully:', response.data);
        // Redirect to meeting details page or display success message
      })
      .catch(error => {
        console.error('Error creating meeting:', error);
      });
  };

  return (
    <div>
      <h2>Create Meeting</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Title:</label>
          <input type="text" name="title" value={title} onChange={handleChange} />
        </div>
        <div>
          <label>Description:</label>
          <textarea name="description" value={description} onChange={handleChange} />
        </div>
        <div>
          <label>Start Time:</label>
          <input type="datetime-local" name="startTime" value={startTime} onChange={handleChange} />
        </div>
        <div>
          <label>End Time:</label>
          <input type="datetime-local" name="endTime" value={endTime} onChange={handleChange} />
        </div>
        <button type="submit">Create</button>
      </form>
    </div>
  );
}

export default CreateMeeting;
