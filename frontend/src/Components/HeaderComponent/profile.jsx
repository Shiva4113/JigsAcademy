// ProfileIcon.js
import React, { useState } from 'react';
import profilepic from '../Assets/account.png';

const ProfileIcon = () => {
  const [dropdownVisible, setDropdownVisible] = useState(false);

  const user = JSON.parse(localStorage.getItem('user'))

  const username = user.username
  const mail = user.mail
  const name = user.name
  const section = user.section

  const toggleDropdown = () => {
    setDropdownVisible((prevVisible) => !prevVisible);
  };

  const handleLogout = () => {
    localStorage.clear()
    window.location.href = '/login';
  };

  return (
    <div>
      <img
        src={profilepic}
        alt="Profile"
        style={{ height: '40px', width: '40px', cursor: 'pointer' }}
        onClick={toggleDropdown}
      />
      {dropdownVisible && (
        <div style={dropdownStyle}>
          <p>Name: {name}</p>
          <p>Username: {username}</p>
          <p>Mail: {mail}</p>
          <p>Class: {section}</p>
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
