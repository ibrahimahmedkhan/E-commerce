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

function Example() {
    const [showA, setShowA] = useState(true);
    const [showB, setShowB] = useState(true);
  
    const toggleShowA = () => setShowA(!showA);
    const toggleShowB = () => setShowB(!showB);
  
    return (
      <Row>
        <Col md={6} className="mb-2">
          <Button onClick={toggleShowA} className="mb-2">
            Toggle Toast <strong>with</strong> Animation
          </Button>
          <Toast show={showA} onClose={toggleShowA}>
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
          <Button onClick={toggleShowB} className="mb-2">
            Toggle Toast <strong>without</strong> Animation
          </Button>
          <Toast onClose={toggleShowB} show={showB} animation={false}>
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
    );
  }
  

class CrudMenu extends React.Component{
  constructor(props){
    super(props);
    this.state = {
        cust_id:  "sas",
        cust_name :"asaasa",
        order_id: "1221",
        output: "no stuff done yet",
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
      TutorialDataService.insert({state: this.state}).then(data => { 
          
      }).catch(err => {
        this.setState({
            output: "error broo"
        });
      });
    }

    update(){

        TutorialDataService.update({state: this.state}).then(data => { 
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
        TutorialDataService.delete({state: this.state}).then(data => { 
        }).catch(err => {
          this.setState({
              output: "error broo"
          });
        });

    }

    read(){
        TutorialDataService.read({state: this.state}).then(data => {
            this.setState(name => ({
                 result: data.data
              }))
        }).catch(err => {
        }).then(data => {
        });
    }

    readAll(){
        TutorialDataService.readAll({state: this.state}).then(data => {
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
  <Form.Group className="mb-3" controlId="cust_id" onChange={this.handleChange}
  >
    <Form.Label>Customer ID</Form.Label>
    <Form.Control type="text" placeholder="please enter your ID"/>
    <Form.Text className="text-muted">
    </Form.Text>
  </Form.Group>

  <Form.Group className="mb-3" controlId="cust_name" onChange={this.handleChange}>
    <Form.Label>Name</Form.Label>
    <Form.Control type="text" placeholder="please enter your name " />
  </Form.Group>
  
  <Form.Group className="mb-3" controlId="order_id" onChange={this.handleChange}>
    <Form.Label>Order id</Form.Label>
    <Form.Control type="text" placeholder="please enter your order id " />
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
      <th>cust_id </th>
      <th>cust_name</th>
      <th>order_id</th>
    </tr>
  </thead>
  <tbody>

  {this.state.result.map(result => (
        <tr>
      <td>{result.id}</td>
      <td>{result.name}</td>
      <td>{result.o}</td>
    </tr>
        ))}

  </tbody>
</Table>
       
</>


      );
    }
  }

function Crud() {
  return (
  ReactDOM.render(
    <>
      <MyNav/>
      <CrudMenu/>
      <Example/>
      <Footer/>
    </>
    ,
   document.getElementById("root"))
  );
}




export default Crud;



