import React, { Component } from 'react';
import { useState } from 'react';
import { Button, Checkbox, Form } from 'semantic-ui-react'
import axios from 'axios'

export class SaleForm extends Component {
    constructor() {
        super();
        this.state={
            customer:"",product:"",store:""
        };
        this.handleSaleChange = this.handleSaleChange.bind(this);
    }

    handleSaleChange({target}){
        this.setState({
            [target.name]: target.value
          });
  };

  createSale = () => {
        axios.post('/Sales/PostSale', {
          customer: this.state.customer,
          product: this.state.product,
          store: this.state.store
        })
        .then((res)=>{
          console.log(res);
          alert ('Added New Sales Record Successfully')
          this.props.history.push('/Sale');
          
        })
        .catch((e) => {
          console.log(e);
        })
      }

    render () { return (
    <div> 
    <Form onSubmit={this.createSale.bind(this)}>
    <Form.Field>
      <label>Customer Name</label>
      <input  type="text"  name='customer' placeholder='Customer Name'  onChange={this.handleSaleChange.bind(this)}
          value={this.state.customer} />

    </Form.Field>
    <Form.Field>
      <label>Product</label>
      <input  type="text" name='product'  placeholder='Product Name' onChange={this.handleSaleChange.bind(this)}
          value={this.state.product} />
    </Form.Field>

    <Form.Field>
      <label>Store</label>
      <input  type="text" name='store'  placeholder='Store Name' onChange={this.handleSaleChange.bind(this)}
          value={this.state.store} />
    </Form.Field>
    <Button className="ui blue button" type='submit'  >Submit</Button>  
  </Form>
  </div>);
}}
