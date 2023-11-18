import React from 'react'
import "./Outerbox.css"
import { Container } from '@mui/system';

const Outerbox = ({title}) => {
    return(
    <Container>
        <div className='Outerbox'>
            <h2>{title}</h2>
            <hr></hr>
            <div className='contentbox'>
            
            </div>
        </div>
    </Container>
    )
}
 

export default Outerbox