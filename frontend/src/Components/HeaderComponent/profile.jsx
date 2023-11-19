// ProfileIcon.js
import React, { useState } from 'react';
import profilepic from '../Assets/account.png';
const ProfileIcon = () => {
  const [dropdownVisible, setDropdownVisible] = useState(false);

  const showDropdown = () => {
    setDropdownVisible(true);
  };

  const hideDropdown = () => {
    setDropdownVisible(false);
  };

  const handleLogout = () => {
    window.location.href = '/login';
    hideDropdown();
  };

  return (
    <div>
      <img
        src={profilepic}
        alt="Profile"
        style={{ height: '40px', width: '40px', cursor: 'pointer' }}
        onClick={showDropdown}
      />
      {dropdownVisible && (
        <div style={dropdownStyle} onBlur={hideDropdown}>
          <p>Name: John Doe</p>
          <p>Class: 10</p>
          <p>Section: A</p>
          <button onClick={hideDropdown}>Close</button>
          <button onClick={handleLogout}>Logout</button>
        </div>
      )}
    </div>
  );
};

const dropdownStyle = {
  borderRadius: '5px',
  position: 'absolute',
  top: '70px', // Adjust the positioning based on your layout
  right: '10px',
  background: 'rgb(241, 195, 160)',
  border: '1px solid #ccc',
  padding: '10px',
  zIndex: '1',
};

export default ProfileIcon;
