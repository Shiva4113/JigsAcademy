import React from 'react'
import "./Outerbox.css"
import { Container } from '@mui/system';
import Innerbox from "../InnerboxComponent/innerbox.jsx"

const Outerbox = ({title}) => {
    return(
    <Container>
        <div className='Outerbox'>
            <h2>{title}</h2>
            <div className='contentbox'>
                <Innerbox title="sub1" content={textcontent}/>
                <Innerbox title="sub2" content={textcontent}/>
                <Innerbox title="sub3" content={textcontent}/>
                <Innerbox title="sub4" content={textcontent}/>
                <Innerbox title="sub5" content={textcontent}/>
            </div>
        </div>
    </Container>
    )
}


const textcontent= <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>

export default Outerbox