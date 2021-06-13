import React, { Component } from 'react';
import { useState } from 'react';
import { Button, Checkbox, Form } from 'semantic-ui-react'
import axios from 'axios'

export class ProductForm extends Component {
    constructor() {
        super();
        this.state={
            name:"",price:""
        };
        this.handleProductChange = this.handleProductChange.bind(this);
    }

    handleProductChange({target}){
        this.setState({
            [target.name]: target.value
          });
  };

  createProduct = () => {
        axios.post('/Products/PostProduct', {
          name: this.state.name,
          price: this.state.price
        })
        .then((res)=>{
          console.log(res);
          alert ('Added New Product Successfully')
          this.props.history.push('/Product');
          
        })
        .catch((e) => {
          console.log(e);
        })
      }

    render () { return (
    <div> 
    <Form onSubmit={this.createProduct.bind(this)}>
    <Form.Field>
      <label>Product Name</label>
      <input  type="text"  name='name' placeholder='Product'  onChange={this.handleProductChange.bind(this)}
          value={this.state.name} />
    </Form.Field>
    <Form.Field>
      <label>Product Price</label>
      <input  type="text" name='price'  placeholder='Product Price' onChange={this.handleProductChange.bind(this)}
          value={this.state.price} />
    </Form.Field>
    <Button className="ui blue button" type='submit'  >Submit</Button>  
  </Form>
  </div>);
}}
