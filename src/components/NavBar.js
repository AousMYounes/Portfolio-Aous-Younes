import { useState, useEffect } from "react";
import {Navbar, Container, Nav} from "react-bootstrap";
import logo from '../assets/img/icons8-portfolio-96.png';
import navIcon1 from '../assets/img/icons8-facebook-100.png';
import navIcon2 from '../assets/img/icons8-whatsapp-100.png';
import navIcon3 from '../assets/img/icons8-linkedin-100.png';
import React from 'react';
export const NavBar = () =>{
    const [activeLink, setActiveLink] = useState('home');
    const [scrolled, setScrolled] = useState(false);

    useEffect(() =>{
       const onScroll = () =>{
        if(window.scrollY >50){
           setScrolled(true);
        }else{
            setScrolled(false);
        }
       }
       window.addEventListener("scroll", onScroll);

       return () => window.removeEventListener("scroll", onScroll);
    }, [])

    const onUpdateActiveLink = (value) =>{
        setActiveLink(value);
    }
    return(
        <Navbar expand="lg" className={scrolled ? "scrolled": ""}>
        <Container>
          <Navbar.Brand href="#home">
          <img src={logo} alt="logo"/>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav">
          <span className="navbar-toggler-icon"></span>
          </Navbar.Toggle>
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
               <Nav.Link href="#home" className={activeLink === 'home' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('home')}>Home</Nav.Link>
               <Nav.Link href="#skills" className={activeLink === 'skills' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('skills')}>Skills</Nav.Link>
               <Nav.Link href="#projects" className={activeLink === 'projects' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('projects')}>Projects</Nav.Link>
            </Nav>
            <span className="navbar-text">
              <div className="social-icon">
                 <a href="https://www.facebook.com/aous.younes.7"><img src={navIcon1} alt="facebook" /></a>
                 <a href="https://api.whatsapp.com/send/?phone=963985517031&text&type=phone_number&app_absent=0"><img src={navIcon2} alt="whatsapp" /></a>
                 <a href="https://www.facebook.com/aous.younes.7"><img src={navIcon3} alt="linkedin" /></a>
              </div>
              <button className="vvd" onClick={()=> console.log('connect')}><span>Lets Connect</span></button>
            </span>
          </Navbar.Collapse>
        </Container>
        </Navbar>
    )
}