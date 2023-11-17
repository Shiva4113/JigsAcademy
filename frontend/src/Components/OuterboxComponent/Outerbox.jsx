import React from 'react'
import "./Outerbox.css"
import { Container } from '@mui/system';

const Outerbox = ({title}) => {
    <Container>
        <div className='Outerbox'>
            <h2>{title}</h2>
            <br></br>
            <div className='contentbox'>
            
            </div>
        </div>
    </Container>
    
} 

export default Outerbox