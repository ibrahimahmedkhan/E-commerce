
import '../App.css';
import Toast from 'react-bootstrap/Toast';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import React from 'react';
import TutorialDataService from '../dataservice';
import { values } from 'sequelize/dist/lib/operators';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { DropdownMenu, MenuItem } from 'react-bootstrap-dropdown-menu';
import { IconButton } from '@mui/material';
import { position } from 'dom-helpers';
import SearchIcon from '@mui/icons-material/Search';

class MyNav extends React.Component{
    
    constructor(props) {
        super(props);
        this.state = {
            isToggleOn: true,
            current_user: "Guest"
        };

        TutorialDataService.current_user().then(data => { 
            this.setState(prevState => ({
                current_user: data.data.firstname
              }));
        }).catch(err => {
        });

        // This binding is necessary to make `this` work in the callback
        this.handleClick = this.handleClick.bind(this);
      }
    

      logOut(){
        TutorialDataService.logOut().then(data => {
      }).catch(err => {
      }).then(data => {
      });

      }

      handleClick() {
        this.setState(prevState => ({
          isToggleOn: !prevState.isToggleOn
        }));
    }

    render() {
      return (
        <div className="myNav">
          
      <Navbar bg="dark" variant = "dark" expand="lg" sticky = "top" >
      <Container>
        <Navbar.Brand href="/"> DigiBiz</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto"  style={{'margin-left':'20%'}}>
            <div class="dropdown">
              <Button href="Catalogue" variant="dark">Categories</Button>
              <div class="dropdown-content">
                <a href="Sports">Sports</a>
                <a href="Accessories">Accessories</a>
                <a href="Electronics">Electronics</a>
                <a href="#">Beauty and personal care</a>
                <a href="#">Luggage, bags and cases</a>
                <a href="#">Food and beverage</a>
                <a href="#">Energy</a>
            </div>

              </div>
            <Nav.Link href="Suppliers" >Suppliers</Nav.Link>
            {/* marginRight:"700px" */}

            
            {/* <Nav.Link href="Login"> {this.state.isToggleOn ? 'ON' : 'OFF'} </Nav.Link> */}
            <div class="dropdown" style={{position:"absolute", right:"9%"}}>
              <IconButton style={{color:"grey"}}><AccountCircleIcon/></IconButton>
            <div class="dropdown-content">
              <a href="SignUp">SignUp</a>
              <a href="Login">Login</a>
              <a href="">
                {this.state.current_user}
             </a>
              <hr></hr>
              <Button variant ="light" onClick={() => this.logOut()}>
              <a href="LogOut">Sign Out</a>
              </Button>
            </div>
            </div>
            <Nav.Link style={{position:"absolute", right:"12%"}} href="Cart"><ShoppingCartIcon/></Nav.Link>
          
          
          </Nav>
        </Navbar.Collapse>


        <Row style={{}}>
          <Col>

            <Form style={{width:"500px", marginLeft:"-650px"}}> 
              <Form.Group className="mb-3" controlId="search" onChange={this.handleChange}>
                <Form.Label>Search Bar</Form.Label>
                <Form.Control type="text" placeholder="Search anything" />
              </Form.Group>
            </Form> 

            
          </Col>
          <Col >
          <IconButton style={{ float:"left", marginLeft:"-180px", marginTop:"30px", color:"white"}} onClick={() => this.getProductsByName(this.state.search)}>
          <SearchIcon />
          </IconButton>
          </Col>
        </Row>



      </Container>
    </Navbar>
        </div>
      );
    }
  }

export default MyNav; 