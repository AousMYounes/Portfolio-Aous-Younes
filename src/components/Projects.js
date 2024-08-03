import {Col, Container, Tab, Row, Nav } from "react-bootstrap";

import { ProjectCard } from "./ProjectCard";
import React from 'react';

import projImg1 from "../assets/img/project1-resturant.png";
import projImg2 from "../assets/img/project2-iphone.png";
import projImg3 from "../assets/img/project3-shope card.png";
import projImg4 from "../assets/img/project4-fast food.png";
import projImg5 from "../assets/img/project5-Dental Care.png";
import projImg6 from "../assets/img/project6-Travels Dubai.png";
export const Projects = () =>{
    const projects= [
        {
            title:"VEGAN SHOPPE RESTURANT",
            description: "Design By Html & CSS",
            URL1:"https://aousmyounes.github.io/Project100/",
            imgUrl: projImg1,
        },
        {
            title:"Iphone",
            description: "Design By Html5 & Css3",
            URL1:"https://aousmyounes.github.io/proj101/",
            imgUrl: projImg2,
        },
        {
            title:"Electronic shop",
            description: "Design & Developer By Bootstrap & Java Scipt Opp",
            URL1:"https://aousmyounes.github.io/proj102/",
            imgUrl: projImg3,
        },
        {
            title:"Fast Food",
            description: "Design & Developer By Bootstrap & Java Script & jquery & Swipper",
            URL1:"https://aousmyounes.github.io/fastfood/",
            imgUrl: projImg4,
        },
        {
            title:"Dental Care",
            description: "Design & Developer By Bootstrap & Java Script & jquery & Swipper & PHP & MYSQL",
            URL1:"https://aousmyounes.github.io/project-Dental-Care/",
            imgUrl: projImg5,
        },
        {
            title:"Travels To Dubai",
            description: "Design & Developer By Bootstrap & Java Script & jquery & Swipper & PHP & MYSQL",
            URL1:"https://aousmyounes.github.io/Project-Tousim-Dubai/",
            imgUrl: projImg6,
        }
    ];
    return(
     <section className="project" id="projects">
        <Container>
            <Row>
              <Col>
                 <h2>Projects</h2>
                 <p>My Website Design & Development collection</p>
                 <Tab.Container id="projects-tabs" defaultActiveKey="First">
                 <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                   <Nav.Item>
                     <Nav.Link eventKey="First">Tab One</Nav.Link>
                   </Nav.Item>
                   <Nav.Item>
                     <Nav.Link eventKey="Second">Tab Two</Nav.Link>
                   </Nav.Item>
                   <Nav.Item>
                     <Nav.Link eventKey="Third">Tab Three</Nav.Link>
                   </Nav.Item>
                 </Nav>
                 <Tab.Content>
                 <Tab.Pane eventKey="First">
                  <Row>
                  {
                    projects.map((project, index) =>{
                        return (
                          <ProjectCard 
                          key={index} 
                          {...project} 
                           />
                        )
                    })
                  }
                  </Row>

                 </Tab.Pane>
                 <Tab.Pane eventKey="Second">loren second</Tab.Pane>
                 <Tab.Pane eventKey="Third">loren third</Tab.Pane>
                 </Tab.Content>
                 </Tab.Container>
              </Col>
            </Row>
        </Container>
       
     </section>
    )
}