import React from 'react'
import "./Outerbox.css"
import { Container } from '@mui/system';
import Innerbox from "../InnerboxComponent/ResultsInnerbox"
import { Link } from 'react-router-dom';

const Outerbox = ({title,results1,results2,results3,results4}) => {
    return(
    <Container>
        <div className='Outerbox'>
            <h2>{title}</h2>
            <div className='contentbox'>
                <Innerbox title="DSA" content1={<Link to="./">{results1}</Link>} content2={<Link to="./">{results2}</Link>} content3={<Link to="./">{results3}</Link>} content4={<Link to="./">{results4}</Link>}/>
                <Innerbox title="DDCO" content1={<Link to="./">{results1}</Link>} content2={<Link to="./">{results2}</Link>} content3={<Link to="./">{results3}</Link>} content4={<Link to="./">{results4}</Link>}/>
                <Innerbox title="AFLL" content1={<Link to="./">{results1}</Link>} content2={<Link to="./">{results2}</Link>} content3={<Link to="./">{results3}</Link>} content4={<Link to="./">{results4}</Link>}/>
                <Innerbox title="WT" content1={<Link to="./">{results1}</Link>} content2={<Link to="./">{results2}</Link>} content3={<Link to="./">{results3}</Link>} content4={<Link to="./">{results4}</Link>}/>
                <Innerbox title="SDS" content1={<Link to="./">{results1}</Link>} content2={<Link to="./">{results2}</Link>} content3={<Link to="./">{results3}</Link>} content4={<Link to="./">{results4}</Link>}/>
            </div>
        </div>
    </Container>
    )
}


// const textcontent= <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>

export default Outerbox