import React from 'react'
import "./Outerbox.css"
import { Container } from '@mui/system';
import Innerbox from "../InnerboxComponent/innerbox.jsx"
import { Link } from 'react-router-dom';

const Outerbox = ({title,textcontent1,textcontent2,textcontent3,textcontent4,course1,course2,course3,course4}) => {
    return(
    <Container>
        <div className='Outerbox'>
            <h2>{title}</h2>
            <div className='contentbox'>
                <Innerbox title="DSA" content1={<Link to="./">{course1}</Link>} content2={<Link to="./">{course2}</Link>} content3={<Link to="./">{course3}</Link>} content4={<Link to="./">{course4}</Link>}/>
                <Innerbox title="DDCO" content1={<Link to="./">{course1}</Link>} content2={<Link to="./">{course2}</Link>} content3={<Link to="./">{course3}</Link>} content4={<Link to="./">{course4}</Link>}/>
                <Innerbox title="AFLL" content1={<Link to="./">{course1}</Link>} content2={<Link to="./">{course2}</Link>} content3={<Link to="./">{course3}</Link>} content4={<Link to="./">{course4}</Link>}/>
                <Innerbox title="WT" content1={<Link to="./">{course1}</Link>} content2={<Link to="./">{course2}</Link>} content3={<Link to="./">{course3}</Link>} content4={<Link to="./">{course4}</Link>}/>
                <Innerbox title="SDS" content1={<Link to="./">{course1}</Link>} content2={<Link to="./">{course2}</Link>} content3={<Link to="./">{course3}</Link>} content4={<Link to="./">{course4}</Link>}/>
            </div>
        </div>
    </Container>
    )
}


// const textcontent= <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>

export default Outerbox