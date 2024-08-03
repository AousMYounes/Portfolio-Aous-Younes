import {Col} from "react-bootstrap";
import React from 'react';
export const ProjectCard=({title, description, imgUrl, URL1})=>{
    return(
        <Col sm={6} md={4}>
            <div className="proj-imgbx">
            <img src={imgUrl} alt="imag" className="w-100 h-100" />
            <div className="proj-txtx">
             <h4>{title}</h4>
             <span>{description}</span>
             <br></br>
             <a href={URL1}>Click Here For Go To Website</a>
            </div>
            </div>
        </Col>
    )
}
