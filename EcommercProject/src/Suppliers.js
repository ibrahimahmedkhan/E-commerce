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
  

class SupplierMenu extends React.Component{
  constructor(props){
    super(props);
    this.state = {
        productId:  null,
        prodName :"asaasa",
        price: "1221",
        category: "1221",
        img: "1221",
        stock: "0",
        output: "no stuff done yet",
        result: []
    }
    this.handleChange = this.handleChange.bind(this);
    this.insertProducts = this.insertProducts.bind(this);
  }

  insertProducts(){
      TutorialDataService.insertProducts({state: this.state}).then(data => { 
          
      }).catch(err => {
        this.setState({
            output: "error broo"
        });
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

<h1 style ={{'textAlign': "center"}}> Supplier Menu</h1>
    <Form>
  {/* <Form.Group className="mb-3" controlId="productId" onChange={this.handleChange}
  >
    <Form.Label>Product ID</Form.Label>
    <Form.Control type="text" placeholder="please enter prod ID"/>
    <Form.Text className="text-muted">
    </Form.Text>
  </Form.Group> */}

  <Form.Group className="mb-3" controlId="prodName" onChange={this.handleChange}>
    <Form.Label>Product Name</Form.Label>
    <Form.Control type="text" placeholder="please enter your product name " />
  </Form.Group>
  
  <Form.Group className="mb-3" controlId="price" onChange={this.handleChange}>
    <Form.Label>Price</Form.Label>
    <Form.Control type="text" placeholder="please enter your its price " />
  </Form.Group>
  
  <Form.Group className="mb-3" controlId="category" onChange={this.handleChange}>
    <Form.Label>Category</Form.Label>
    <Form.Control type="text" placeholder="please enter its category" />
  </Form.Group>
  
  <Form.Group className="mb-3" controlId="img" onChange={this.handleChange}>
    <Form.Label>Link</Form.Label>
    <Form.Control type="text" placeholder="please enter your products image link " />
  </Form.Group>
  
  <Form.Group className="mb-3" controlId="stock" onChange={this.handleChange}>
    <Form.Label>Stock</Form.Label>
    <Form.Control type="text" placeholder="please enter your products stock" />
  </Form.Group>
  
  <Button variant="primary" onClick={this.insertProducts}>
    Insert
  </Button>
  {'   '}

</Form>
</div>
</div>

</>


      );
    }
  }

function Suppliers() {
  return (
  ReactDOM.render(
    <>
      <MyNav/>
      <SupplierMenu/>
      <Footer/>
    </>
    ,
   document.getElementById("root"))
  );
}




export default Suppliers;



