import React, { useState } from 'react';
import './innerbox.css';
import { Container } from '@mui/system';
import axios from 'axios'; // Make sure to install axios: npm install axios

const Innerbox = ({ title, content1 }) => {
  const [file, setFile] = useState(null);

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    setFile(selectedFile);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append('file', file);

    try {
      const response = await axios.post('http://localhost:2000/api/upload', formData);

      console.log('File uploaded successfully:', response.data.filename);
    } catch (error) {
      console.error('Error uploading file:', error);
    }
  };

  return (
    <Container>
      <div className='Innerbox'>
        <h2>{title}</h2>
        <hr />
        <div className='content'>
          <p>{content1}</p>
          <form onSubmit={handleSubmit}>
            <input type="file" onChange={handleFileChange} />
            <button type="submit">Submit</button>
          </form>
          {file && (
            <div>
              <strong>Selected File:</strong> {file.name}
            </div>
          )}
        </div>
      </div>
    </Container>
  );
};

export default Innerbox;
