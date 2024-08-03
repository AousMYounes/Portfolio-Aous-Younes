import { Container, Row ,Col} from "react-bootstrap";
import React from 'react';
import { MailchimpForm } from "./MailchimpForm";
import logo from "../assets/img/logo.jpg";
import navIcon1 from '../assets/img/icons8-facebook-100.png';
import navIcon2 from '../assets/img/icons8-whatsapp-100.png';
import navIcon3 from '../assets/img/icons8-linkedin-100.png';
export const Footer = () =>{
    return(
       <footer className="footer">
       <Container>
       <Row className="align-item-center">
         <MailchimpForm />
         <Col sm={6}>
         <img src={logo} alt="logo" className="logo11"/><span className="sp1">Eng.Aous Mohammad Younes</span>
         <br></br>
         <span className="sp2">Technical Engineering / Industrial Automation</span>
         </Col>
         <Col sm={6} className="text-center text-sm-end">
            <div className="social-icon">
              <a href="https://www.facebook.com/aous.younes.7"><img src={navIcon1} alt="facebook"/></a>
              <a href="https://api.whatsapp.com/send/?phone=963985517031&text&type=phone_number&app_absent=0"><img src={navIcon2} alt="whatsapp"/></a>
              <a href="https://www.facebook.com/aous.younes.7"><img src={navIcon3} alt="linkedin"/></a>
            </div>
            <p>CopyRight 2024. All Right Reserved!</p>
         </Col>
       </Row>
       </Container>
       </footer> 
    )
}