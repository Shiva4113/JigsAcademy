import React from 'react'
import "./innerbox.css"
import { Container } from '@mui/system';

const Innerbox = ({title,content1,content2,content3,content4}) => {
    return(
    <Container>
        <div className='Innerbox'>
            <h2>{title}</h2>
            <hr></hr>
            <div className='content'>
                <p>{content1}</p>
            </div>
            <div className='content'>
                <p>{content2}</p>
            </div>
            <div className='content'>
                <p>{content3}</p>
            </div>
            <div className='content'>
                <p>{content4}</p>
            </div>
        </div>
    </Container>
    )
}
 

export default Innerbox