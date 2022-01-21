import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import ReactDOM from "react-dom";
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
import Table from "react-bootstrap/Table";
import Carousel  from 'react-bootstrap/Carousel';
import MyNav from './components/components.navbar';
import TutorialDataService from './dataservice';
import { Remove, Delete, Add , RateReview} from '@mui/icons-material';
import { Box, Rating, Typography, SvgIcon } from '@mui/material';
import { values } from 'sequelize/dist/lib/operators';
import Footer from './Footer';
import SearchIcon from '@mui/icons-material/Search';
import IconButton from '@mui/material/IconButton';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import { useState } from 'react';



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




function GuestGreeting(props) {
  return (
    <div class = "item">
      <img height = "100px" width = "100px" src="https://www.w3schools.com/images/w3schools_green.jpg" /> <br/>
      iaisis
    </div>
  )
}

function carousel(props){
  return(
<Carousel fade>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="holder.js/800x400?text=First slide&bg=373940"
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
      src="holder.js/800x400?text=Second slide&bg=282c34"
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
      src="holder.js/800x400?text=Third slide&bg=20232a"
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


var products = [];

class Item extends React.Component{
  
  constructor(props){
    super(props);
    this.state = {
      prod: [],
      result: [],
      category: 0,
      search: 'sports',
      search1:"sports",
      buttonOn: false
    }
    this.getTotal = this.getTotal.bind(this);
    this.addToCart = this.addToCart.bind(this);
    this.getProducts = this.getProducts.bind(this);
    this.getProductsByCategory = this.getProductsByCategory.bind(this);
    this.getProductsByName = this.getProductsByName.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.getTotal();
    this.getProducts();
    // products = this.state.prod;
    
    

    // this.getProductsByCategory('sports');

  }

  addToCart(prodId){
    TutorialDataService.addToCart({prd: prodId}).then(data => {

  }).catch(err => {
  }).then(data => {
  });

  }

  getTotal(){
    TutorialDataService.getTotal({state: this.state}).then(data => {
        this.setState(name => ({
            result: data.data.total
        }))
    }).catch(err => {
    }).then(data => {
    });
}

getProducts(){
  TutorialDataService.getProducts({state: this.state}).then(data => {
      this.setState(name => ({
          prod: data.data
      }))

      this.state.prod.map(x =>(
        products.push({label: x.category})
      ))
  }).catch(err => {
  }).then(data => {
  });
}

getProductsByCategory(category){
  TutorialDataService.getProductsByCategory({category: category}).then(data => {
      this.setState(name => ({
          prod: data.data
      }))
  }).catch(err => {
  }).then(data => {
  });
}

getProductsByName(name){
  TutorialDataService.getProductsByName({name: name}).then(data => {
      this.setState(name => ({
          prod: data.data
      }))
  }).catch(err => {
  }).then(data => {
  });
}

  
  handleChange(event){
    const target = event.target;
    var value = target.value;
    var name = target.id;
    this.setState({
      [name] : value
    });
  }

  render(){
    let { isLoggedIn } = true;

    return (
      <div style={{textAlign:'center'}} class="cataloguebg">
        <Row style={{paddingTop:"20px"}}>
          {/* <Col>

            <Form style={{width:"40%", marginLeft:"40%", float:'right'}}> 
              <Form.Group className="mb-3" controlId="search" onChange={this.handleChange}>
                <Form.Label>Search Bar</Form.Label>
                <Form.Control type="text" placeholder="Search name" />
              </Form.Group>
            </Form> 

            
          </Col>
          <Col >
          <IconButton style={{ float:"left", marginLeft:"-24px", marginTop:"0px"}} onClick={() => this.getProductsByName(this.state.search)}>
          <SearchIcon />
          </IconButton>
          </Col> */}
        </Row>
        <Row style={{paddingTop:"20px"}}>
          <Col>
           


{/* <Autocomplete style ={{float:"right"}}
            disablePortal
            controlId="search1"
            id="search1"
            options={products}
            sx={{ width: 300 }}
            onInputChange={this.handleChange}
            renderInput={(params) => <TextField {...params} label="Search category" />} */}
            
          </Col>
        </Row>
        <div class= "items">
          {this.state.prod.map(prod => (
            <div class = "item">
              <img height = "250" width = "250" src={prod.img} /> <br/>
              {prod.name} <br/>
              <div>
                <Button variant="outline-secondary" onClick={() => this.addToCart(prod.productId)} >


                <Add style={{ color: "black", fontSize: 30 }}  > </Add> 
                </Button> 
              </div>
              {prod.prodName} <br/>
                <Rating ></Rating> <br/>
              <h6 style={{color:"orange"}}>Rs. {prod.price} </h6> <br/>
            </div>
            ))}

      </div>
      </div>
    )
  }
}


function Catalogue() {
  return (

  ReactDOM.render(
    <>
    <div class ="catalogue">
      <MyNav/>
      <Item/>
  <div class="carousel1" >
  <Carousel fade>
    <Carousel.Item>
      <img
        className="d-block w-100"
        src="../samsungEarphones.webp"
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
        src="../appleAirpods.jpg"
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
        src="../bruh.jpg"
        alt="Third slide"
      />

      <Carousel.Caption>
        <h3>Third slide label</h3>
        <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
      </Carousel.Caption>
    </Carousel.Item>
  </Carousel>
  </div>
</div>


<Footer/>
</>
    ,
   document.getElementById("root"))
  );
}




export default Catalogue;

