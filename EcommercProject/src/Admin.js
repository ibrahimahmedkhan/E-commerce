import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
// import React from "react";
import React, { useState } from 'react';
import ReactDOM from "react-dom";
import Button from 'react-bootstrap/Button';
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Toast  from 'react-bootstrap/Toast';
import MyNav from './components/components.navbar';
import TutorialDataService from './dataservice';
import Table  from 'react-bootstrap/Table';
import Footer from './Footer';

class AdminMenu extends React.Component{
  constructor(props){
    super(props);
    this.state = {
        email:  "sas",
        password :"asaasa",
        firstname: "1221",
        lastname: "no stuff done yet",
        role: "As",
        userid: "as",
        result: [] 
    }
    this.handleChange = this.handleChange.bind(this);
    this.insert = this.insert.bind(this);
    this.update = this.update.bind(this);
    this.delete = this.delete.bind(this);
    this.read = this.read.bind(this);
    this.readAll = this.readAll.bind(this);
  }

    insert(){
      TutorialDataService.insertAdmin({state: this.state}).then(data => { 
          
      }).catch(err => {
        this.setState({
            output: "error broo"
        });
      });
    }

    update(){

        TutorialDataService.updateAdmin({state: this.state}).then(data => { 
            this.setState({
                cust_id: data
            })
        }).catch(err => {
          this.setState({
              output: "error broo"
          });
        }).then({
            
        });
    }

    delete(){
        TutorialDataService.deleteAdmin({state: this.state}).then(data => { 
        }).catch(err => {
          this.setState({
              output: "error broo"
          });
        });

    }

    read(){
        TutorialDataService.readAdmin({state: this.state}).then(data => {
            this.setState(name => ({
                 result: data.data
              }))
        }).catch(err => {
        }).then(data => {
        });
    }

    readAll(){
        TutorialDataService.readAllAdmin({state: this.state}).then(data => {
            this.setState(name => ({
                 result: data.data
              }))
        }).catch(err => {
        }).then(data => {
        });
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
    <Form>
  <Form.Group className="mb-3" controlId="email" onChange={this.handleChange}
  >
    <Form.Label>Email</Form.Label>
    <Form.Control type="text" placeholder="please enter your ID"/>
    <Form.Text className="text-muted">
    </Form.Text>
  </Form.Group>

  <Form.Group className="mb-3" controlId="password" onChange={this.handleChange}>
    <Form.Label>Password</Form.Label>
    <Form.Control type="text" placeholder="please enter your password " />
  </Form.Group>
  
  <Form.Group className="mb-3" controlId="firstname" onChange={this.handleChange}>
    <Form.Label>Firstname</Form.Label>
    <Form.Control type="text" placeholder="please enter your firstname" />
  </Form.Group>
  
  <Form.Group className="mb-3" controlId="lastname" onChange={this.handleChange}
  >
    <Form.Label>Lastname</Form.Label>
    <Form.Control type="text" placeholder="please enter your lastname"/>
    <Form.Text className="text-muted">
    </Form.Text>
  </Form.Group>

  <Form.Group className="mb-3" controlId="role" onChange={this.handleChange}>
    <Form.Label>Role</Form.Label>
    <Form.Control type="text" placeholder="please enter your role " />
  </Form.Group>
  
  <Form.Group className="mb-3" controlId="userid" onChange={this.handleChange}>
    <Form.Label>Userid</Form.Label>
    <Form.Control type="text" placeholder="please enter your user id " />
  </Form.Group>
  
  <Button variant="primary" onClick={this.insert}>
    Insert
  </Button>
  {'   '}

  <Button variant="primary" onClick={this.update}>
    Update
  </Button>
  {'   '}

  <Button variant="primary" onClick={this.delete}>
    Delete
  </Button>
  {'   '}

  <Button variant="primary" onClick={this.read}>
    Read
  </Button>
  {'   '}

  <Button variant="primary" onClick={this.readAll}>
    ReadAll
  </Button>


</Form>
</div>
</div>

<Table striped bordered hover variant="dark">
  <thead>
    <tr>
      <th>email </th>
      <th>password</th>
      <th>firstname</th>
      <th>lastName </th>
      <th>role</th>
      <th>userid</th>
    </tr>
  </thead>
  <tbody>

  {this.state.result.map(result => (
        <tr>
        <td>{result.email}</td>
        <td>{result.password}</td>
        <td>{result.firstname}</td>
        <td>{result.lastName}</td>
        <td>{result.role}</td>
        <td>{result.userid}</td>
    </tr>
        ))}

  </tbody>
</Table>
       
</>


      );
    }
  }

function Admin() {
  return (
  ReactDOM.render(
    <>
      <MyNav/>
      <AdminMenu/>
      <Footer/>
    </>
    ,
   document.getElementById("root"))
  );
}




export default Admin;



