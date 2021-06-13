import React, { Component } from 'react';
import { Button, Checkbox, Form } from 'semantic-ui-react'
import axios from 'axios'

export class StoreEditForm extends Component {
    constructor(props) {
        super(props);
        const path = window.location.pathname.split('/')
        const id = path [path.length -1]
        this.state = {
            id: id,
            name:'',
            address:''
         };

this.handleChange = this.handleChange.bind(this);
this.getStore(id);

    }

    handleChange({target}){
        this.setState({
            [target.name]: target.value
          });
  };

    editStore = () => {
        axios.put('/Stores/PutStore/' + this.state.id,{
            id: this.state.id,
            name : this.state.name,
            address : this.state.address
        })
        .then((res)=> {
            console.log(res.data);
            alert ( 'Record Updated Successfull' )
            this.props.history.push('/Store');
        })
        .catch((e) => {
            console.log(e);
        })
    }

    getStore = (id) => {
      axios.get('/Stores/getStore/' + id)
      .then((res) => {
        this.setState({
          name: res.data?.name,
          address: res.data?.address
        })
      })
      .catch((e) => {
        console.log(e);
      })
    }

    render() { 
        return (<div>
<Form onSubmit={this.editStore.bind(this)}>
      <Form.Field>
      <label>Store ID</label>
      <input editable ={false} type='text' name='id' placeholder='Store ID' onChange={this.handleChange.bind(this)}
      value={this.state.id}/>
    </Form.Field>
    <Form.Field>
      <label>Store Name</label>
      <input type='text' name='name' placeholder='Branch Name' onChange={this.handleChange.bind(this)}
      value={this.state.name}/>
    </Form.Field>
    <Form.Field>
      <label>Store Address</label>
      <input type='text' name='address' placeholder='Location' onChange={this.handleChange.bind(this)}
      value={this.state.address}/>
    </Form.Field>
    <Button type='submit'>Save</Button>
  </Form>
</div>  );
}}
 

  


