import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState } from 'react';
import ReactDOM from "react-dom";
// import Button from 'react-bootstrap/Button';

// import Jumbotron from 'react-bootstrap/Jumbotron';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Toast  from 'react-bootstrap/Toast';
import Popover  from 'react-bootstrap/Popover';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import MyNav from './components/components.navbar';
import TutorialDataService from './dataservice';
import ToggleButtons from './togglebutton';
import Footer from './Footer';
import { useForm } from "react-hook-form";
import { values } from 'sequelize/dist/lib/operators';

class ConfirmOrderMenu extends React.Component{
  
  constructor(props){
    super(props);
  }
  
    render(){
      return(
        <div style = {{textAlign:"center", backgroundColor:"white"}}>
          <h2>Congratulations </h2><br/>
          <h3>your order has been received </h3>
          <hr></hr>
          Order Number
          <br/>
          <a href="Catalogue" > Continue Shopping </a>
          <hr></hr>
          You will receive an email with tracking information once your goods have shipped
        </div>
      );
    }
}

function ConfirmOrder() {
  return (

  ReactDOM.render(
    <>
      <MyNav/>
      <ConfirmOrderMenu/>
      <Footer/>
</>
    ,
   document.getElementById("root"))
  );
}

 export default ConfirmOrder;
