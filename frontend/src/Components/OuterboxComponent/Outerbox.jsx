import React from 'react'
import "./Outerbox.css"
import { Container } from '@mui/system';



const Outerbox = ({title,textcontent1}) => {
    return(
    <Container>
        <div className='Outerbox'>
            <h2>{title}</h2>
            <div className='contentbox'>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>
        </div>
    </Container>
    )
}


// const textcontent= <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>

export default Outerbox