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
          <img
          src={profilepic}
          alt="Profile"
          style={{ height: '64px', width: '64px', cursor: 'pointer' }}/>
          <hr style={hrstyle}/>
          <p><strong>Name:</strong> {name}</p>
          <p><strong>Username:</strong> {username}</p>
          <p><strong>Mail:</strong> {mail}</p>
          <p><strong>Class:</strong> {section}</p>
          <hr style={hrstyle}/>
          <button style={buttonStyle} onClick={handleLogout}><strong>Logout</strong></button>
        </div>
      )}
    </div>
  );
};

const hrstyle = {
  height: '2px',
  background: 'black',
  marginstyle: '0px',
};
const dropdownStyle = {
  borderRadius: '5px',
  position: 'absolute',
  top: '70px', 
  right: '10px',
  background: 'rgb(241, 195, 160)',
  border: '1px solid #ccc',
  padding: '10px',
  zIndex: '1',
};

const buttonStyle = {
  width:'100px',
  background: '#9E695D',
  padding: '5px',
  cursor: 'pointer',
  borderRadius: '5px',
  color: 'white',
};


export default ProfileIcon;
