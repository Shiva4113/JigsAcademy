import React from 'react'
import "./Attendanceinnerbox.css"
import { Container } from '@mui/system';

const Innerbox = ({title,content1,content2}) => {
    return(
    <Container>
        <div className='Innerbox'>
            <h2>{title}</h2>
            <hr></hr>
            <div className='attcontent'>
                <p>{content1}</p>
            </div>
            <div className='attcontent'>
            <p>{content2}</p>
            </div>
        </div>
    </Container>
    )
}
 

export default Innerbox