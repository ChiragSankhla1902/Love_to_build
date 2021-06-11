import React from 'react';
import {Jumbotron,Row,Col,Container, Button} from "react-bootstrap";

import history from "../Component/History/History";
import p from "../Component/Images/comp/code2.jpg";
import p2 from "../Component/Images/comp/code4.jpg";
import "./Service.css";
import p1 from "../Component/Images/comp/code1.jpg";


const Events = () => {
    return (
        <>
            <div>
                <h1 className="head">Events</h1>
            </div>
            <Jumbotron className="jumbopro">
                <Container>
                    <Row>
                        <Col>
                            <img className="img-res" src={p} alt="travel" height="300px" width="400px"/>
                        </Col>
                        <Col>
                            <h1>C smash!!</h1>
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                             Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                             when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                             t has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. 
                             It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages,
                              and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. 
                            </p>
                            <Button   className="bl" onClick={()=>history.push('/Joinus')}> Register</Button>
                        </Col>
                    </Row>
                </Container>                        
            </Jumbotron>

            <br/>


            <Jumbotron className="jumbopro1">
                <Container>
                    <Row>
                    <Col>
                            <h1> Java jump!!</h1>
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                             Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                             when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                             t has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. 
                             It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages,
                              and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. 
                            </p>
                            <Button className="bl" onClick={()=>history.push('/Joinus')}>Register</Button>
                        </Col>
                        <Col>
                            <img className="img-res" src={p1} alt="travel" height="300px" width="400px"/>
                        </Col>
                    </Row>
                </Container>                        
            </Jumbotron>
            <br/>
            {/* <Jumbotron className="jumbopro1 res-ser">
                <Container>
                    <Row>
                        <Col>
                            <img className="img-res" src={p} alt="travel" height="300px" width="400px"/>
                        </Col>
                        <Col>
                            <h1> Scripting magic!!</h1>
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                             Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                             when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                             t has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. 
                             It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages,
                              and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. 
                            </p>
                            <Button  className="bl" onClick={()=>history.push('/contact')}> upcoming</Button>
                        </Col>
                    </Row>
                </Container>                        
            </Jumbotron>
            <br/> */}

            <Jumbotron className="jumbopro">
                <Container>
                    <Row>
                        <Col>
                            <img className="img-res" src={p2} alt="travel" height="300px" width="400px"/>
                        </Col>
                        <Col>
                            <h1>React to!!</h1>
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                             Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                             when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                             t has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. 
                             It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages,
                              and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. 
                            </p>
                            <Button  className="bl" onClick={()=>history.push('/Joinus')}>Upcoming</Button>
                        </Col>
                    </Row>
                </Container>                        
            </Jumbotron>
            <br/>





        </>
    )
}

export default Events;
