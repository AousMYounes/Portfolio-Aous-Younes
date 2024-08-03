import { useState, useEffect } from "react";
import { Container,Row ,Col } from "react-bootstrap"
import { ArrowRightCircle } from "react-bootstrap-icons";
import headerImg from "../assets/img/headder-img.jpg";
import React from 'react';
export const Banner= () =>{
    const [loopNum, setLoopNum] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const toRotate= ["web Developer Front-End","Web Developer Back-End","Web Developer Full-Stack"];
    const [text, setText] = useState('');
    const [delta, setDelta]= useState(300-Math.random()*100);
    const period =2000;

    useEffect(() =>{
        let ticker= setInterval(()=>{
           tick();
        },delta)
        return ()=> {
            clearInterval(ticker)
        };
    },[text])

    const tick=() =>{
        let i = loopNum % toRotate.length;
        let fullText= toRotate[i];
        let updateText= isDeleting ? fullText.substring(0, text.length-1) : fullText.substring(0, text.length+1);
        setText(updateText);
        if(isDeleting){
            setDelta(prevDelta => prevDelta/2);
        }
        
        if(!isDeleting && updateText === fullText){
            setIsDeleting(true);
            setDelta(period);
        } else if(isDeleting && updateText === ''){
            setIsDeleting(false);
            setLoopNum(loopNum+1);
            setDelta(500);
        }
    }
    return (
        <section className="banner" id="home">
          <Container>
            <Row className="align-items-center">
              <Col xs={12} md={6} xl={7}>
                <span className="tagline">Welcome to my Portfolio</span>
                <h1>{'Hi I am Eng.Aous Mohammad Younes '}<span className="wrap">{text}</span></h1>
                <p>Seeking a challenging position as a Full Stack Developer where I can leverage my internship experience, project portfolio, and proficiency in Front-End technologies to contribute effectively to innovative projects and further develop my skills in web development.</p>
                <button onClick={() => console.log('connect')}>Lets connect<ArrowRightCircle size={25}/></button>
              </Col>
              <Col xs={12} md={6} xl={5}>
                <img src={headerImg} alt="Hedder Img" />
              </Col>
            </Row>
          </Container>
        </section>
    )
}