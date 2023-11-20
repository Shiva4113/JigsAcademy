import React from 'react'
import "./Outerbox.css"
import { Container } from '@mui/system';
import Innerbox from "../InnerboxComponent/CoursesInnerbox"
import { Link } from 'react-router-dom';

const Outerbox = ({title,textcontent1,textcontent2,textcontent3,textcontent4,course1,course2,course3,course4}) => {
    return(
    <Container>
        <div className='Outerbox'>
            <h2>{title}</h2>
            <div className='contentbox'>
                <Innerbox title="DSA" content1={<Link to="./DSAc1">{course1}</Link>} content2={<Link to="./">{course2}</Link>} content3={<Link to="./">{course3}</Link>} content4={<Link to="./">{course4}</Link>}/>
                <Innerbox title="DDCO" content1={<Link to="./DDCOc1">{course1}</Link>} content2={<Link to="./">{course2}</Link>} content3={<Link to="./">{course3}</Link>} content4={<Link to="./">{course4}</Link>}/>
                <Innerbox title="AFLL" content1={<Link to="./AFLLc1">{course1}</Link>} content2={<Link to="./">{course2}</Link>} content3={<Link to="./">{course3}</Link>} content4={<Link to="./">{course4}</Link>}/>

                <Innerbox title="WT" 
                content1={<a href='https://www.youtube.com/playlist?list=PL4cUxeGkcC9gZD-Tvwfod2gaISzfRiP9d' target='_blank'>{"React"}</a>} 
                content2={<a href='https://youtube.com/playlist?list=PL4cUxeGkcC9jsz4LDYc6kv3ymONOKxwBU' target='_blank'>{"Node"}</a>} 
                content3={<a href='https://www.youtube.com/playlist?list=PL4cUxeGkcC9h77dJ-QJlwGlZlTd4ecZOA' target='_blank'>{"MongoDB"}</a>} 
                content4={<a href='https://www.youtube.com/playlist?list=PL4cUxeGkcC9iJ_KkrkBZWZRHVwnzLIoUE' target='_blank'>{"MERN Stack"}</a>}/>
                
                <Innerbox title="SDS" content1={<Link to="./SDSc1">{course1}</Link>} content2={<Link to="./">{course2}</Link>} content3={<Link to="./">{course3}</Link>} content4={<Link to="./">{course4}</Link>}/>
            </div>
        </div>
    </Container>
    )
}


// const textcontent= <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>

export default Outerbox