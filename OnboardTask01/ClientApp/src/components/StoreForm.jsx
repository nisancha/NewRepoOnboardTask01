import React, { Component } from 'react';
import { useState } from 'react';
import { Button, Checkbox, Form } from 'semantic-ui-react'
import axios from 'axios'

export class StoreForm extends Component {
    constructor() {
        super();
        this.state={
            name:"",address:""
        };
        this.handleStoreChange = this.handleStoreChange.bind(this);
    }

    handleStoreChange({target}){
        this.setState({
            [target.name]: target.value
          });
  };

  createStore = () => {
        axios.post('/Stores/PostStore', {
          name: this.state.name,
          address: this.state.address
        })
        .then((res)=>{
          console.log(res);
          alert ('Added New Stores Successfully')
          this.props.history.push('/Store');
          
        })
        .catch((e) => {
          console.log(e);
        })
      }

    render () { return (
    <div> 
    <Form onSubmit={this.createStore.bind(this)}>
    <Form.Field>
      <label>Store Name</label>
      <input  type="text"  name='name' placeholder='Store'  onChange={this.handleStoreChange.bind(this)}
          value={this.state.name} />
    </Form.Field>
    <Form.Field>
      <label>Store Address</label>
      <input  type="text" name='address'  placeholder='Address' onChange={this.handleStoreChange.bind(this)}
          value={this.state.address} />
    </Form.Field>
    <Button className="ui blue button" type='submit'  >Submit</Button>  
  </Form>
  </div>);
}}
