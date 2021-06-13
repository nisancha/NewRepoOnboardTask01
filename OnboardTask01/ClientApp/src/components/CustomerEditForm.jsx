import React, { Component } from 'react';
import { Button, Checkbox, Form } from 'semantic-ui-react'
import axios from 'axios'


export class CustomerEditForm extends Component {
    constructor(props) {
        super(props);
        const path = window.location.pathname.split('/')
        const id = path[path.length - 1]  
        // console.log( "I am "+id);
         this.state = {
          id: id,
          name:'',
          address:''
       };
       
      this.handleChange = this.handleChange.bind(this);
      this.getCustomer(id);
    }

    handleChange({target}){
        this.setState({
            [target.name]: target.value
          });
  };

    editCustomer = () => {
        axios.put('/Customers/PutCustomer/' + this.state.id,{
            id: this.state.id,
            name : this.state.name,
            address : this.state.address
        })
        .then((res)=> {
            console.log(res.data);
            alert ( 'Record Updated Successfull' )
            this.props.history.push('/Customer');
        })
        .catch((e) => {
            console.log(e);
        })
    }
    getCustomer = (id) => {
      axios.get('/Customers/GetCustomer/' + id)
      .then((res)=> {
        this.setState({
          name: res.data?.name,
          address: res.data?.address
        });
        // this.state = {
        //   id: res.data?.id,
        //   name:res.data?.name,
        //   address:res.data?.address
       //};
          //alert ( 'Get by Id Successfull' )
          
      })
      .catch((e) => {
          console.log(e);
      })
  }
    render() { 
        return (<div>
<Form onSubmit={this.editCustomer.bind(this)}>
      <Form.Field>
      <label>Customer ID</label>
      <input editable = {false} type='text'  name='id' placeholder='Customer Identification' 
      value={this.state.id}/>
    </Form.Field>
    <Form.Field>
      <label>Customer Name</label>
      <input type='text' name='name' placeholder='Name' onChange={this.handleChange.bind(this)}
      value={this.state.name}/>
    </Form.Field>
    <Form.Field>
      <label>Customer Address</label>
      <input type='text' name='address' placeholder='Address' onChange={this.handleChange.bind(this)}
      value={this.state.address}/>
    </Form.Field>
    <Button type='submit'>Save</Button>
  </Form>
</div>  );
}}
 

  


