import { Container, Row, Col } from "react-bootstrap";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import meter1 from "../assets/img/Yellow-Circle.png";
import meter2 from "../assets/img/Yellow-Circle.png";
import meter3 from "../assets/img/Yellow-Circle.png";
import meter4 from "../assets/img/Yellow-Circle.png";
import meter5 from "../assets/img/Yellow-Circle.png";
import meter6 from "../assets/img/Yellow-Circle.png";
import React from 'react';
export const Skills =() =>{
    const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 4000, min: 3000 },
          items: 5
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 3
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1
        }
      };

      return(
        <section className="skill" id="skills">
          <Container>
            <Row>
              <Col>
                 <div className="skill-bx">
                    <h2>
                      Skills
                    </h2>
                    <p>Seeking a challenging position as a Full Stack Developer where I can leverage my internship experience, project portfolio, and proficiency in Front-End technologies to contribute effectively to innovative projects and further develop my skills in web development.</p>
                    
                    <Carousel responsive={responsive} infinite={true} className="skill-slider">
                       <div className="item">
                          <img src={meter1} alt="Image1" /><span>94%</span>
                          <h5>Web Design</h5>
                          <p>HTML5-CSS3-BOOTSTRAP-TAILWIND</p>
                       </div>
                      <div className="item">
                        <img src={meter2} alt="Image2" /><span>91%</span>
                        <h5>Front-End</h5>
                        <p>JAVA SCRIPT-OOP-REACT&NEXT-GIT</p>
                      </div>
                      <div className="item">
                        <img src={meter3} alt="Image3" /><span>87%</span>
                        <h5>Back-End</h5>
                        <p>NODE-EXPRESS-MONGO DB</p>
                      </div>
                      <div className="item">
                        <img src={meter4} alt="Image4" /><span>72%</span>
                        <h5>Full-Stack</h5>
                        <p>Framework Next & Express-MongoDB</p>
                      </div>
                      <div className="item">
                        <img src={meter5} alt="Image5" /><span>82%</span>
                        <h5>Cyber Security</h5>
                        <p>PYTHON-RUBY-PERL-CCNA-CEH</p>
                      </div>
                      <div className="item">
                        <img src={meter6} alt="Image6" /><span>99%</span>
                        <h5>Programming</h5>
                        <p>PYTHON-RUBY-C++-C#-JAVA-GO</p>
                      </div>
                    </Carousel>
                 </div>
              </Col>
            </Row>
          </Container>
           
        </section>
      )
}