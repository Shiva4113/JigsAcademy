import React from 'react'
import "./Outerbox.css"
import { Container } from '@mui/system';
import Innerbox from "../InnerboxComponent/AssignmentsInnerbox"
import { Link } from 'react-router-dom';

const Outerbox = ({title,assignment1,assignment2,assignment3,assignment4}) => {
    return(
    <Container>
        <div className='Outerbox'>
            <h2>{title}</h2>
            <div className='contentbox'>
                <Innerbox title="DSA" content1={<Link to="./DSAa1">{assignment1}</Link>} content2={<Link to="./">{assignment2}</Link>} content3={<Link to="./">{assignment3}</Link>} content4={<Link to="./">{assignment4}</Link>}/>
                <Innerbox title="DDCO" content1={<Link to="./DDCOa1">{assignment1}</Link>} content2={<Link to="./">{assignment2}</Link>} content3={<Link to="./">{assignment3}</Link>} content4={<Link to="./">{assignment4}</Link>}/>
                <Innerbox title="AFLL" content1={<Link to="./AFLLa1">{assignment1}</Link>} content2={<Link to="./">{assignment2}</Link>} content3={<Link to="./">{assignment3}</Link>} content4={<Link to="./">{assignment4}</Link>}/>
                <Innerbox title="WT" content1={<Link to="./WTa1">{assignment1}</Link>} content2={<Link to="./">{assignment2}</Link>} content3={<Link to="./">{assignment3}</Link>} content4={<Link to="./">{assignment4}</Link>}/>
                <Innerbox title="SDS" content1={<Link to="./SDSa1">{assignment1}</Link>} content2={<Link to="./">{assignment2}</Link>} content3={<Link to="./">{assignment3}</Link>} content4={<Link to="./">{assignment4}</Link>}/>
            </div>
        </div>
    </Container>
    )
}


// const textcontent= <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>

export default Outerbox