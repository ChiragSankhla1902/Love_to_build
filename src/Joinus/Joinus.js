import React,{useState} from 'react';
import {useDispatch} from "react-redux";
import "./Contact.css";
import history from "../Component/History/History";
import {Form,Button, Jumbotron,Row,Col,Container} from 'react-bootstrap';
import Card1 from "../Component/card/card";

import p3 from "../Component/Images/comp/badge2.jpg";
import p1 from "../Component/Images/comp/badge1.jpg";


const Joinus = () => {



    return (
        <>
            <h1 className="head">Join us</h1>

            <Jumbotron className="jumbopro">
                <Container>
                    <Row>
                        <Col>
                            <img className="img-res" src={p3} alt="travel" height="300px" width="400px"/>
                        </Col>
                        <Col>
                            <h1>badge1</h1>
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                             Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                             when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                             t has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. 
                             It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages,
                              and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. 
                            </p>
                            <Button variant="primary" onClick={()=>history.push('/contact')}>Get the badges</Button>
                        </Col>
                    </Row>
                </Container>                        
            </Jumbotron>
            <br/>
            <br/>
            <Jumbotron className="jumbopro">
                <Container>
                    <Row>
                        <Col>
                            <img className="img-res" src={p1} alt="travel" height="300px" width="400px"/>
                        </Col>
                        <Col>
                            <h1>badge2</h1>
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                             Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                             when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                             t has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. 
                             It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages,
                              and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. 
                            </p>
                            <Button variant="primary" onClick={()=>history.push('/contact')}>Get the badges</Button>
                        </Col>
                    </Row>
                </Container>                    
            </Jumbotron>
            <br/>                       
            <br/>                       
            <br/>    
                <Form className="center">
                    <div className="button">
                        <h3> Join our telegram </h3> 
                    </div>
                    <div className="button" >
                        <h3> Join our discord </h3>
                    </div>
                </Form>
            <br/>
        </>
    )
}

export default Joinus;
