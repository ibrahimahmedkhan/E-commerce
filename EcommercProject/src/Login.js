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
      Email or password not correct
    </Popover.Body>
  </Popover>
);

class LoginMenu extends React.Component{
  
  constructor(props){
    super(props);
    this.state = {
        email: null,
        password: null,
        role: 'customer',
        error: "Login",
        errormsg: ""
    }
    this.handleChange = this.handleChange.bind(this);
    this.login = this.login.bind(this);
    this.changeCategory = this.changeCategory.bind(this);
    this.changeCategory();


  }
  

    login(){
      TutorialDataService.login({state: this.state}).then(data => { 
        if(typeof data.data.password != 'undefined'){
            window.location.href = "Crud";
        }
        else{
          this.setState(a => ({
            errormsg: "*invalid username or password"
          }));
        }

        // this.setState(a => ({
        //   error: data.data.password
        // }));

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
        <h1 style ={{'textAlign': "center"}}> Login</h1>
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

  <OverlayTrigger trigger="click" placement="right" overlay={popover}> 
  
  <Button style ={{'margin-left': '10%', 'margin-top': '10px', width: '80%'}}variant="outline-secondary" onClick={()=>this.login()} >
    {/* SignUp */}
        {this.state.error}
  </Button>
  
  </OverlayTrigger>
  {'   '}

<h6 style={{color:'red'}}> {this.state.errormsg}</h6>
</Form>
<a href="Signup"> Havent made an account?</a> <br/>
<a href="Signup"> Forgot your password?</a> 
</div>
</div>
</>
      )
}

}

function Login() {
  return (

  ReactDOM.render(
    <>
      <MyNav/>
      <LoginMenu/>
      <Footer/>
</>
    ,
   document.getElementById("root"))
  );
}








 export default Login;
