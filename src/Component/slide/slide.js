import React from 'react';
import p1 from "../Images/comp/code4.jpg";
import p2 from "../Images/comp/code5.jpg";
import p3 from "../Images/comp/code6.jpg";
import history from "../History/History";
import Carousel from 'react-bootstrap/Carousel';
import "./slide.css"

const Slide1 = () => {
    return (
        <Carousel > 
                <Carousel.Item interval={1000} onClick={()=>history.push("/Events")}>
                    <img
                    className="d-block w-100"
                    src={p1}
                    alt="First slide"
                    />
                    <Carousel.Caption>
                    <h3 className="slide">event name</h3>
                    <p className="slide" >event title </p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item interval={500}  onClick={()=>history.push("/Events")} >
                    <img
                    className="d-block w-100"
                    src={p2}
                    alt="Second slide"
                    />
                    <Carousel.Caption>
                    <h3 className="slide">Be a coder</h3>
                    <p className="slide" >event name</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item  onClick={()=>history.push("/Events")}>
                    <img
                    className="d-block w-100"
                    src={p3}
                    alt="Third slide"
                    />
                    <Carousel.Caption>
                    <h3  className="slide">Be a developer</h3>
                    <p  className="slide">event name</p>
                    </Carousel.Caption>
                </Carousel.Item>
        </Carousel>
    )
}

export default Slide1;
