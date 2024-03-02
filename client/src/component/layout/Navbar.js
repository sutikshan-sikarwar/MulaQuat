import React from 'react';

const Navbar = () => {
  // Function to get the current date and time
  const getCurrentDateTime = () => {
    const currentDate = new Date();
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric', hour: 'numeric', minute: 'numeric', second: 'numeric', hour12: true };
    const dateOptions = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    const timeOptions = { hour: 'numeric', minute: 'numeric', second: 'numeric', hour12: true };
    
    const dateString = currentDate.toLocaleDateString('en-US', dateOptions);
    const timeString = currentDate.toLocaleTimeString('en-US', timeOptions);

    return `${dateString}, ${timeString}`;
  };

  return (
    <nav className="bg-gray-800 p-4 flex justify-between items-center">
      <div className="flex items-center">
        <img src="/Meet_logo.png" alt="Logo" className="w-10 h-10 mr-2" />
        <span className="text-white font-bold text-lg">My Video Conference App</span>
      </div>
      <div className="text-white text-sm">{getCurrentDateTime()}</div>
      <div>
        <img src="/Social icon.png" alt="Profile" className="w-10 h-10 rounded-full cursor-pointer" />
      </div>
    </nav>
  );
}

export default Navbar;
