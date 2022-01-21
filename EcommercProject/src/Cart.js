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
import { values } from 'sequelize/dist/lib/operators';

import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import DeleteIcon from '@mui/icons-material/Delete';
import { SvgIcon } from '@mui/material';
import { Cancel } from '@mui/icons-material';
import { Lock } from '@mui/icons-material';
import { Remove, Delete, Add , RateReview} from '@mui/icons-material';
import Footer from './Footer';
import { IconButton } from '@mui/material';

function HomeIcon(props) {
    return (
      <SvgIcon {...props}>
        <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
      </SvgIcon>
    );
  }

class CartMenu extends React.Component{
  constructor(props){
    super(props);
    this.state = {
        result: [],
        total: 0,
        product: [],
        ob :[  { total: 14548 } , {total:1221}],
        // quantity: [1,5,2,6,7,0,0,0,0],
        quantity: [],
        sum:0,
        img: 0
    }

    this.confirmOrder = this.confirmOrder.bind(this);
    this.subQuantity = this.subQuantity.bind(this);
    this.addQuantity = this.addQuantity.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.getCart = this.getCart.bind(this);
    this.getTotal = this.getTotal.bind(this);
    this.addSum = this.addSum.bind(this);
    this.deleteItem = this.deleteItem.bind(this);
    this.getCart();
    this.getTotal();
    const interval = setInterval(() => {
      this.addSum();
    }, 200);
  }

  getCart(){
    TutorialDataService.getCart({state: this.state}).then(data => {
        this.setState(name => ({
             result: data.data
          }))
          this.state.result.map((x,i) => (
            this.state.quantity.push(1)
        ))
    }).catch(err => {
    }).then(data => {
    });
}

    getTotal(){
        TutorialDataService.getTotal({state: this.state}).then(data => {
            this.setState(name => ({
                total: data.data.total
            }))
        }).catch(err => {
        }).then(data => {
        });
    }

    addQuantity(i,prodId){
        this.setState(prevState => ({
            quantity: this.state.quantity.slice(0,i).concat(this.state.quantity[i]+1).concat(this.state.quantity.slice(i+1))
        }));
        const interval = setInterval(() => {
            this.addSum();
          }, 200);
          this.addQuantityFromDB(prodId)
    }


    subQuantity(i,prodId){
       
        this.setState(prevState => ({
            quantity: this.state.quantity.slice(0,i).concat(Math.max(this.state.quantity[i]-1,0)).concat(this.state.quantity.slice(i+1))
        }));
        const interval = setInterval(() => {
            this.addSum();
          }, 200);

      this.subQuantityFromDB(prodId);
    }

    subQuantityFromDB(prodId){
      TutorialDataService.alterQuantityFromDB({prodId: prodId, amount: -1}).then(data => {
    }).catch(err => {
    }).then(data => {
    });
  }

  addQuantityFromDB(prodId){
      TutorialDataService.alterQuantityFromDB({prodId: prodId, amount: 1}).then(data => {
    }).catch(err => {
    }).then(data => {
    });
  }

    addSum(){
        var amount = 0
        this.state.result.map((result,i) => (
            amount = amount + result.price*this.state.quantity[i]
        ))
        this.setState(prevState => ({
            sum: amount
        }))
    }


    getProductFromCart(){
        TutorialDataService.getProductFromCart({state: this.state}).then(data => {
        }).catch(err => {
        }).then(data => {
        });
    }


    deleteItem(productId){
        TutorialDataService.deleteItem({productId: productId}).then(data => {
        }).catch(err => {
        }).then(data => {
        });
        const interval = setInterval(() => {
            this.getCart();
          }, 200);
    }



    confirmOrder(){
        TutorialDataService.confirmOrder({state: this.state}).then(data => {
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
<div class = "cart" style={{backgroundColor:"white"}} >
  <br/>
  <br/>
  <br/>
  {this.state.result.map((result,i) => (
    <Row>
      <Col>
      <br/>
      <input type="checkbox">

      </input>

      </Col>
    <Col>
    <div style={{}}> <img class="dunno" src= 
        {result.img}     
       /> </div>
    </Col>
    <Col>

    <br/>
     Rs. {result.price} 
    </Col>
      <Col>
      <br/>
      <div>
      <IconButton size="sm" onClick={() => {this.subQuantity(i,result.prodId) }}  >
        <Remove></Remove>
        </IconButton>
      {this.state.quantity[i]}
      <IconButton size="sm" onClick={() => {this.addQuantity(i,result.prodId) }}  >
             <Add></Add>
              </IconButton> {'  '}
      </div>
      </Col>
      <Col>

      <br/>
      <IconButton onClick={() => this.deleteItem(result.prodId)}>
      <Delete  ></Delete>
      </IconButton>
      
      </Col>

    <hr></hr>
    </Row>
  ))}
  <h4> Rs. {this.state.sum} </h4>


<Button variant="success" onClick={() => this.confirmOrder() } href ="ConfirmOrder" > <a style={{}}>Confirm Order</a></Button>    
</div>
</>
      );
    }
  }

function Cart() {
  return (
  ReactDOM.render(
    <>
      <div style={{backgroundColor:"lightgray"}}>
      <MyNav/>
<br/>
<br/>
      <CartMenu/>
<br/>
<br/>
      <Footer/>]
      </div>
    </>
    ,
   document.getElementById("root"))
  );
}




export default Cart;


