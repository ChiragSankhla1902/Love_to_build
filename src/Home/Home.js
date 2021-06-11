import React from 'react';
import "./Home.css";
import Card1 from "../Component/card/card";
import code from "../Component/Images/comp/code1.jpg";
import code2 from "../Component/Images/comp/code2.jpg";
import code3 from "../Component/Images/comp/code3.jpg";
import code4 from "../Component/Images/comp/code4.jpg";
import history from "../Component/History/History";
import code5 from "../Component/Images/comp/code5.jpg";
import p from "../Component/Images/comp/code4.jpg";


import Slide1 from "../Component/slide/slide";
import {Container,Card,Button,Jumbotron,Row,Col} from "react-bootstrap";

const Home = () => {

    const pic=[code,code2,code3,code4,code5];



    return (
        <>
            <h1 className="head">Love to build </h1>
            <div className="size">
                <Slide1/>
            </div>
            <br/>
            <br/>
                <Jumbotron className="jumbopro">
                    <Container>
                        <Row>
                            <Col>
                                <img className="img-res1" src={p} alt="travel" />
                            </Col>
                            <Col>
                                <h1 className="heading">Our Objective!!</h1>
                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                                when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                                t has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. 
                                It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages,
                                and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. 
                                </p>
                            </Col>
                        </Row>
                    </Container>
                </Jumbotron>
            <br/>
            <br/>
                    <Container>
                        <Row className="row">
                            <Col className="col">
                                <Card1 event="Live Event" bt="let's code"  F={pic[0]}/>
                            </Col>
                            <Col className="col">
                                <Card1 event="Live Event" bt="let's code" F={pic[1]} />
                            </Col>
                            <Col className="col">
                                <Card1  event="Live Event" bt="let's code" F={pic[2]}/>
                            </Col>
                        </Row>
                        <br/>
                        <br/>
                        <Row className="row">
                            <Col className="col">
                                <Card1 event="Upcoming Event" bt="Notify" F={pic[3]}/>
                            </Col>
                            <Col className="col"  >
                                <Card1  event="Upcoming Event" bt="Notify" F={pic[4]} />
                            </Col>
                            <Col className="col" >
                                <Card1  event="Upcoming Event" bt="Notify" F={pic[2]}/>
                            </Col>
                        </Row>
                    </Container>

            <br/>
            <br/>

        </>
    )
}

export default Home;
