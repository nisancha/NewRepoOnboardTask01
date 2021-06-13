import React, { Component } from 'react';
import { useState } from 'react';
import { Button, Checkbox, Form } from 'semantic-ui-react'
import axios from 'axios'

export class CustomerForm extends Component {
    constructor() {
        super();
        this.state={
            name:"",address:""
        };
        this.handleCustomerChange = this.handleCustomerChange.bind(this);
    }

    handleCustomerChange({target}){
        this.setState({
            [target.name]: target.value
          });
  };

  createCustomer = () => {
        axios.post('/Customers/PostCustomer', {
          name: this.state.name,
          address: this.state.address
        })
        .then((res)=>{
          console.log(res);
          alert ('Added New Customer Successfully')
          this.props.history.push('/Customer');
          
        })
        .catch((e) => {
          console.log(e);
        })
      }

    render () { return (
    <div> 
    <Form onSubmit={this.createCustomer.bind(this)}>
    <Form.Field>
      <label>Customer Name</label>
      <input  type="text"  name='name' placeholder='Name'  onChange={this.handleCustomerChange.bind(this)}
          value={this.state.name} />

    </Form.Field>
    <Form.Field>
      <label>Customer Address</label>
      <input  type="text" name='address'  placeholder='Address' onChange={this.handleCustomerChange.bind(this)}
          value={this.state.address} />
    </Form.Field>
    <Button className="ui blue button" type='submit'  >Submit</Button>  
  </Form>
  </div>);
}}
