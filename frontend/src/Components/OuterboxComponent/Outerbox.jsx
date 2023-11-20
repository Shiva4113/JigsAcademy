import React from 'react'
import "./Outerbox.css"
import { Container } from '@mui/system';
import Innerbox from '../InnerboxComponent/AssignmentsInnerbox'


const Outerbox = ({title,textcontent1}) => {
    return(
    <Container>
        <div className='Outerbox'>
            <h2>{title}</h2>
            <div className='Acontentbox'>
                <Innerbox title="Problem Statement:" content1={textcontent1}/>
            </div>
        </div>        
    </Container>
    )
}


// const textcontent= <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>

export default Outerbox