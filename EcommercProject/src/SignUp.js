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


const popover = (
  <Popover id="popover-basic">
    <Popover.Header as="h3">Error</Popover.Header>
    <Popover.Body>
      Please Enter Valid Sign Up Information
    </Popover.Body>
  </Popover>
);

const Example = () => (
  <OverlayTrigger trigger="click" placement="right" overlay={popover}>
    <Button variant="success">Click me to see</Button>
  </OverlayTrigger>
);



function UserGreeting(props) {
  return <h1>Welcome back!</h1>;
}

function GuestGreeting(props) {
  return <h1>Please sign up.</h1>;
}

function Greeting(props) {
  const isLoggedIn = props.isLoggedIn;
  if (isLoggedIn) {
    return <UserGreeting />;
  }
  return <GuestGreeting />;
}

class ErrorPopup extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      showA: true, 
      showB: true
    }

    this.toggleShowA = this.toggleShowA.bind(this);
    this.toggleShowB = this.toggleShowB.bind(this);
  }

  toggleShowA(){
    this.setState(a => ({
      showA: !this.state.showA
    }));
  }

  toggleShowB(){
    this.setState(a => ({
      showB: !this.state.showB
    }));
  }

  render(){
    return(

      <Row>
        <Col md={6} className="mb-2">
          <Button onClick={this.toggleShowA} className="mb-2">
            Toggle Toast <strong>with</strong> Animation
          </Button>
          <Toast show={this.state.showA} onClose={this.toggleShowA} delay={3000} autohide>
            <Toast.Header>
              <img
                src="holder.js/20x20?text=%20"
                className="rounded me-2"
                alt=""
              />
              <strong className="me-auto">Bootstrap</strong>
              <small>11 mins ago</small>
            </Toast.Header>
            <Toast.Body>Woohoo, you're reading this text in a Toast!</Toast.Body>
          </Toast>
        </Col>
        <Col md={6} className="mb-2">
          <Button onClick={this.toggleShowB} className="mb-2">
            Toggle Toast <strong>without</strong> Animation
          </Button>
          <Toast onClose={this.toggleShowB} show={this.state.showB} animation={false}>
            <Toast.Header>
              <img
                src="holder.js/20x20?text=%20"
                className="rounded me-2"
                alt=""
              />
              <strong className="me-auto">Bootstrap</strong>
              <small>11 mins ago</small>
            </Toast.Header>
            <Toast.Body>Woohoo, you're reading this text in a Toast!</Toast.Body>
          </Toast>
        </Col>
      </Row>
    )
  }
}

class SignUpMenu extends React.Component{
  
  constructor(props){
    super(props);
    this.state = {
        email: null,
        password: null,
        confirmPassword: null,
        firstName: null,
        lastName: null,
        role: 'customer',
        error: "Sign Up",
    }
    this.handleChange = this.handleChange.bind(this);
    this.signUp = this.signUp.bind(this);
    this.changeCategory = this.changeCategory.bind(this);
    this.changeCategory();

  }
  

    signUp(){
      TutorialDataService.signUp({state: this.state}).then(data => { 
          if(data.data.worked){
              window.location.href = "Crud";
            }
            else{
              
            }
          
      }).catch(err => {
      });
    }

    changeCategory(){
      this.setState(a => ({
      role: 'supplier'
    }));
  }

    handleChange(event){
      const target = event.target;
      var value = target.value;
      var name = target.id;
      var bruh = target.controlId;
      this.setState({
        [name] : value
      });
    }

    render(){
      
      return(
        
<>
<div class ="bg">

<div class ="form">
        <h1 style ={{'textAlign': "center"}}> Sign Up </h1>
    <Form noValidate validated="true">
  <Form.Group className="mb-3" controlId="email" onChange={this.handleChange}
  >
    <Form.Label><strong>Email Address</strong></Form.Label>
    <Form.Control required type="text" placeholder="abc@gmail.com"/>
    <Form.Text className="text-muted">
    </Form.Text>
  </Form.Group>

  <Form.Group className="mb-3" controlId="password" onChange={this.handleChange}>
    <Form.Label><strong> Password</strong></Form.Label>
    <Form.Control required type="password" placeholder="password123" />
  </Form.Group>

  <Form.Group className="mb-3" controlId=" confirmPassword" onChange={this.handleChange}>
    <Form.Label><strong> Confirm Password</strong></Form.Label>
    <Form.Control required type="password" placeholder="password123" />
  </Form.Group>
  
  <Form.Group className="mb-3" controlId="firstName" onChange={this.handleChange}>
    <Form.Label><strong> First name</strong></Form.Label>
    <Form.Control required type="text" placeholder="Mark " />
  </Form.Group>
  
  <Form.Group className="mb-3" controlId="lastName" onChange={this.handleChange}>
    <Form.Label> <strong> Last name</strong></Form.Label>
    <Form.Control required type="text" placeholder="Zuckerberg " />
    </Form.Group>

    <Form.Check type="checkbox" label="Agree to terms and conditions" />

      <div style={{ textAlign: "center"}}>
      <ToggleButtons onChange={()=> this.changeCategory()}/>
      </div>
    

  <OverlayTrigger trigger="click" placement="right" overlay={popover}> 
  
  <Button style ={{'margin-left': '10%', 'margin-top': '10px', width: '80%'}}variant="outline-secondary" onClick={()=>this.signUp()} >
    {/* SignUp */}
        {this.state.error}
  </Button>
  
  </OverlayTrigger>
  {'   '}

</Form>
</div>
</div>
</>
      )
}

}

function SignUp() {
  return (

  ReactDOM.render(
    <>
      <MyNav/>
      <SignUpMenu/>
      <Footer/>
</>
    ,
   document.getElementById("root"))
  );
}




 export default SignUp;
