import React, { Component } from 'react';
import { Button, Checkbox, Form } from 'semantic-ui-react'
import axios from 'axios'

export class ProductEditForm extends Component {
    constructor(props) {
        super(props);
        const path = window.location.pathname.split('/')
        const id = path[path.length - 1]
        this.state = {
            id: id,
            name:'',
            price:''
         };

this.handleChange = this.handleChange.bind(this);
this.getProduct(id);

    }

    handleChange({target}){
        this.setState({
            [target.name]: target.value
          });
  };

    editProduct = () => {
        // console.log('Hello This is Put Request')
        axios.put('/Products/PutProduct/' + this.state.id,{
            id: this.state.id,
            name : this.state.name,
            price : this.state.price
        })
        .then((res)=> {
            console.log(res.data);
            alert ( 'Record Updated Successfull' )
            this.props.history.push('/Product');
        })
        .catch((e) => {
            console.log(e);
        })
    }

    getProduct = (id) => {
      axios.get ('/Products/GetProduct/' + id)
      .then((res)=> {
        this.setState({
          name: res.data?.name,
          price: res.data?.price
        });
      })

      .catch((e) => {
        console.log(e);
      })
    }

    render() { 
        return (<div>
<Form onSubmit={this.editProduct.bind(this)}>
      <Form.Field>
      <label>Product ID</label>
      <input editable = {false} type='text' name='id' placeholder='Product Identification' onChange={this.handleChange.bind(this)}
      value={this.state.id}/>
    </Form.Field>
    <Form.Field>
      <label>Product Name</label>
      <input type='text' name='name' placeholder='Product' onChange={this.handleChange.bind(this)}
      value={this.state.name}/>
    </Form.Field>
    <Form.Field>
      <label>Product Price</label>
      <input type='text' name='price' placeholder='Price' onChange={this.handleChange.bind(this)}
      value={this.state.price}/>
    </Form.Field>
    <Button type='submit'>Save</Button>
  </Form>
</div>  );
}}
 

  


