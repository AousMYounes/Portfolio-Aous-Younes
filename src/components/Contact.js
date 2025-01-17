import { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import contactImg from "../assets/img/back.jpg";
export const Contact= () =>{
   const formInitialDetails={
      firstName:'',
      lastName:'',
      email:'',
      phone:'',
      message:''
   } 

   const [formDetails, setFormDetails]= useState(formInitialDetails);
   const [buttonText, setButtonText]= useState('Send');
   const [status, setStatus]=useState({});
   const onFormUpdate = (category, value) =>{
    setFormDetails({
        ...formDetails,
        [category]:value
    })
   }
   const handleSubmit = async(e) =>{
      e.preventDefault();
      setButtonText('Sending...');
      let response = await fetch("http://localhost:5000/contact", {
        method: "POST",
        headers: {
            "Content-Type": "Application/json;charset=utf-8",
        },
        body: JSON.stringify(formDetails),
      });
      setButtonText("Send");
      let result = response.json();
      setFormDetails(formInitialDetails);
      if (result.code === 200){
        setStatus({success: true, message:'Message sent successfuly' });
      } else{
        setStatus({success: false, message:'Something went wrong, please try again later.'})
      }
   };

    return(
      <section className="contact" id="connect">
       <Container>
           <Row className="align-items-center">
               <Col md={6}>
                 <img src={contactImg} alt="Contact Us"/>
               </Col>
               <Col md={6}>
                  <h2>Get In Touch</h2>
                  <form onSubmit={handleSubmit}>
                   <Row>
                     <Col sm={6} className="px-1">
                       <input type="text" value={formDetails.firstName} placeholder="Please Enter First Name Here:" onChange={(e)=> onFormUpdate('firstName', e.target.value)} />
                     </Col>
                     <Col sm={6} className="px-1">
                     <input type="text" value={formDetails.lastName} placeholder="Please Enter Last Name Here:" onChange={(e)=> onFormUpdate('lasttName', e.target.value)} />
                     </Col>
                     <Col sm={6} className="px-1">
                     <input type="email" value={formDetails.email} placeholder="Please Enter Your E-Mail Here:" onChange={(e)=> onFormUpdate('email', e.target.value)} />
                     </Col>
                     <Col sm={6} className="px-1">
                     <input type="tel" value={formDetails.phone} placeholder="Please Enter Your Phone Number Here:" onChange={(e)=> onFormUpdate('phone', e.target.value)} />
                     </Col>
                     <Col>
                     <textarea rows={6} value={formDetails.message} placeholder="Enter Your Message Here:" onChange={(e)=> onFormUpdate('message', e.target.value)}></textarea>
                     <button type="submit"><span>{buttonText}</span></button>
                     </Col>
                     {
                       status.message && 
                       <Col>
                       <p className={status.success === false ? "danger" : "success"}>{status.message}</p>
                       </Col>
                     }
                   </Row>

                  </form>
               </Col>
           </Row>
       </Container>

      </section>
    )
}