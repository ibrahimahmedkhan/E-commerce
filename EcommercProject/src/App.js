import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
// import React from "react";
import React, { useState } from 'react';
import ReactDOM from "react-dom";
// import Button from 'react-bootstrap/Button';

// import Jumbotron from 'react-bootstrap/Jumbotron';
import Toast from 'react-bootstrap/Toast';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import {Link} from "react-router-dom";
import MyNav from './components/components.navbar';
import Footer from './Footer';
import { Carousel } from 'react-bootstrap';


function carousel(props){
  return(
<Carousel >
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="../bruh.jpg"
      alt="First slide"
    />
    <Carousel.Caption>
      <h3>First slide label</h3>
      <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="../ps5.jpg"
      alt="Second slide"
    />

    <Carousel.Caption>
      <h3>Second slide label</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="../ps5.jpg"
      alt="Third slide"
    />

    <Carousel.Caption>
      <h3>Third slide label</h3>
      <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
  )
}

function App() {
  return (

  ReactDOM.render(
    <>
    <MyNav/>
    <div style={{ backgroundImage: "url('https://planetinfraltd.co.tz/wp-content/uploads/2018/11/planet_ecommerce.jpg')"}}>
    <div style={{}}>
      <div class ="homediv">
<Carousel style={{width:"50%", marginLeft:"25%"}} >
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://s.alicdn.com/@img/imgextra/i1/O1CN01D8qtK71IyBLHbsdg8_!!6000000000961-0-tps-990-400.jpg"
      alt="First slide"
    />
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://s.alicdn.com/@img/imgextra/i2/O1CN012SqPNB1zQJVmnWFFM_!!6000000006708-2-tps-990-400.png"
      alt="Second slide"
    />

  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://s.alicdn.com/@img/imgextra/i1/O1CN01iZxhBf24Xi0IfTwiq_!!6000000007401-0-tps-990-400.jpg"
      alt="Third slide"
    />

  </Carousel.Item>
</Carousel>
</div>

<br/>
<br/>
<br/>

<div style={{}}>
      <div class ="homediv">
<Carousel style={{width:"50%", marginLeft:"25%"}} >
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://s.alicdn.com/@img/imgextra/i1/O1CN01D8qtK71IyBLHbsdg8_!!6000000000961-0-tps-990-400.jpg"
      alt="First slide"
    />
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://s.alicdn.com/@img/imgextra/i2/O1CN012SqPNB1zQJVmnWFFM_!!6000000006708-2-tps-990-400.png"
      alt="Second slide"
    />

  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://s.alicdn.com/@img/imgextra/i1/O1CN01iZxhBf24Xi0IfTwiq_!!6000000007401-0-tps-990-400.jpg"
      alt="Third slide"
    />

  </Carousel.Item>
</Carousel>
</div>
</div>

<br/>
<br/>
<br/>

<div style={{}}>
      <div class ="homediv">
<Carousel style={{width:"50%", marginLeft:"25%"}} >
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://s.alicdn.com/@img/imgextra/i1/O1CN01D8qtK71IyBLHbsdg8_!!6000000000961-0-tps-990-400.jpg"
      alt="First slide"
    />
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://s.alicdn.com/@img/imgextra/i2/O1CN012SqPNB1zQJVmnWFFM_!!6000000006708-2-tps-990-400.png"
      alt="Second slide"
    />

  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://s.alicdn.com/@img/imgextra/i1/O1CN01iZxhBf24Xi0IfTwiq_!!6000000007401-0-tps-990-400.jpg"
      alt="Third slide"
    />

  </Carousel.Item>
</Carousel>
</div>
<br/>
</div>
</div>
    <Footer/>
    </div>
</>
    ,
   document.getElementById("root"))
  );
}




export default App;
