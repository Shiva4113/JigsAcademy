import React from 'react'
import "./Outerbox.css"
import { Container } from '@mui/system';
import Innerbox from "../InnerboxComponent/AttendanceInnerbox"
import { Link } from 'react-router-dom';

const Outerbox = ({title,attendance1,attendance2,attendance3,attendance4,attendance5}) => {
    return(
    <Container>
        <div className='Outerbox'>
            <h2>{title}</h2>
            <div className='contentbox'>
                <Innerbox title="DSA" content1={<Link to="./">{attendance1}</Link>}  content2 = {"-%"}/>
                <Innerbox title="DDCO" content1={<Link to="./">{attendance2}</Link>} content2 = {"-%"}/>
                <Innerbox title="AFLL" content1={<Link to="./">{attendance3}</Link>} content2 = {"-%"}/>
                <Innerbox title="WT" content1={<Link to="./">{attendance4}</Link>} content2 = {"-%"}/>
                <Innerbox title="SDS" content1={<Link to="./">{attendance5}</Link>} content2 = {"-%"}/>
            </div>
        </div>
    </Container>
    )
}


// const textcontent= <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>

export default Outerbox