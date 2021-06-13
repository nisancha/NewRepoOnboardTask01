import React, { Component } from 'react';
import { Button, Checkbox, Form } from 'semantic-ui-react'
import axios from 'axios'

export class SaleEditForm extends Component {
    constructor(props) {
        super(props);
        const path = window.location.pathname.split('/')
        const id = path [path.length -1]
        this.state = {
            id: id,
            customer:'',
            product:'',
            store:''
         };

this.handleChange = this.handleChange.bind(this);
this.getSale (id);

    }

    handleChange({target}){
        this.setState({
            [target.name]: target.value
          });
  };

    editSale = () => {
        axios.put('/Sales/PutSale/' + this.state.id,{
            id: this.state.id,
            customer : this.state.customer,
            product : this.state.product,
            store: this.state.store
        })
        .then((res)=> {
            console.log(res.data);
            alert ( 'Record Updated Successfull' )
            this.props.history.push('/Sale');
        })
        .catch((e) => {
            console.log(e);
        })
    }

    getSale = (id) => {
      axios.get('/Sales/getSale/' + id)
      .then((res) => {
        this.setState({
          customer: res.data?.customer,
          product: res.data?.product,
          store: res.data?.store
        })
      })
      .catch((e) => {
        console.log(e);
      })
    }

    render() { 
        return (<div>
<Form onSubmit={this.editSale.bind(this)}>
      <Form.Field>
      <label>Sales ID</label>
      <input editable ={false} type='text' name='id' placeholder='Sales Identification' onChange={this.handleChange.bind(this)}
      value={this.state.id}/>
    </Form.Field>
    <Form.Field>
      <label>Customer Name</label>
      <input type='text' name='customer' placeholder='Customer Name' onChange={this.handleChange.bind(this)}
      value={this.state.customer}/>
    </Form.Field>
    <Form.Field>
      <label>Product</label>
      <input type='text' name='product' placeholder='Product Name' onChange={this.handleChange.bind(this)}
      value={this.state.product}/>
    </Form.Field>
    <Form.Field>
      <label>Store</label>
      <input type='text' name='store' placeholder='Store Name' onChange={this.handleChange.bind(this)}
      value={this.state.store}/>
    </Form.Field>
    <Button type='submit'>Save</Button>
  </Form>
</div>  );
}}
 

  


