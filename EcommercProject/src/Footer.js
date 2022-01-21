import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState } from 'react';
import ReactDOM from "react-dom";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

export default function Footer(){
    return (
        <div class="footer"> 
        <Row style={{height:'200px', 'margin-left':'200px', 'padding-top':'20px'}}>
            <Col >
            <h5>Customer Care </h5> 
            <a href="aa" class ="footerItem">Contact Us</a><br/>
            <a href="aa" class ="footerItem">About us </a><br/>
            <a href="aa" class ="footerItem">Environmental concerns</a><br/>
            <a href="aa" class ="footerItem">Safety</a><br/>
            <a href="aa" class ="footerItem">Customer Support</a><br/>
            <a href="aa" class ="footerItem">Feedback </a><br/>
            </Col>
            <Col>
            <br/>
            <h5> Connect With Us </h5>
            <a href= "aa" class="icons"> <TwitterIcon/> </a> 
            <a  href= "aa" class="icons"><FacebookIcon/> </a>
            <a  href= "aa" class="icons"><InstagramIcon/> </a>
            <a  href= "aa" class="icons"><LinkedInIcon/> </a>
            </Col>
            <Col>
            <br/>
            <br/>
            <h5>DIGIBIZ</h5>
            <a href="aa" class ="footerItem">Our Journey</a><br/>
            <a href="aa" class ="footerItem">Our Team</a><br/>
            <a href="aa" class ="footerItem">Business prospects</a><br/>
            <a href="aa" class ="footerItem">Vision</a><br/>
            </Col>
        </Row>
        
        </div>
    )   
}


// INSERT INTO orders ('112', productId)
// SELECT column1, column2, column3, ...
// FROM table1
// WHERE condition;

// SHOW KEYS FROM orderedby WHERE Key_name = 'PRIMARY'