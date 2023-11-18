import React from 'react'
import "./innerbox.css"
import { Container } from '@mui/system';

const Innerbox = ({title,content}) => {
    return(
    <Container>
        <div className='Innerbox'>
            <h2>{title}</h2>
            <hr></hr>
            <div className='content'>
                <p>{content}</p>
            </div>
            <div className='content'>
                <p>{content}</p>
            </div>
            <div className='content'>
                <p>{content}</p>
            </div>
            <div className='content'>
                <p>{content}</p>
            </div>
        </div>
    </Container>
    )
}
 

export default Innerbox