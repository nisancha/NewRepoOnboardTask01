import React, { Component } from 'react';
import { Icon, Label, Menu, Table } from 'semantic-ui-react'
import axios from 'axios';


export class ProductIndex extends Component {
    constructor(props) {
        super(props);
        this.state={
            Products:[]
        };
    }
    
    
    componentDidMount() {
        this.fetchProducts();
    }

    nextPath(path) {
      this.props.history.push(path);
    }

    fetchProducts = () => {
        axios.get('/Products/GetProduct')
        .then((res) => {
        console.log(res.data);
        this.setState({
            Products : res.data,
        })
  })
        .catch((e) =>  {
        console.log(e);
  });
    }

    deleteProduct = (id) => {
      console.log(id)
      axios.delete('/Products/DeleteProduct/'+id)
      .then(res => {
        console.log(res)
        alert ('Record Delete Successful')
        this.fetchProducts();
      })
      .catch(e => {
        console.log(e)
      })
    }

    render () {
        const { Products } = this.state;
        return <div>
          <button className="positive ui button" onClick={() => this.nextPath('/ProductForm') }>Add New Product</button>
    <Table celled>
    <Table.Header>
      <Table.Row>
        <Table.HeaderCell>Product ID</Table.HeaderCell>
        <Table.HeaderCell>Name</Table.HeaderCell>
        <Table.HeaderCell>Price</Table.HeaderCell>
        <Table.HeaderCell>Actions</Table.HeaderCell>
        <Table.HeaderCell>Actions</Table.HeaderCell>
      </Table.Row>
    </Table.Header>

    <Table.Body>
    {Products.map((p) => {
        return (
            <Table.Row key={p.id}>
                <Table.Cell>{p.id}</Table.Cell>
                <Table.Cell><Label ribbon>Proudct</Label>{p.name}</Table.Cell>
                <Table.Cell>{p.price}</Table.Cell>
                <Table.Cell><button className="ui yellow button" onClick={() => this.nextPath('/ProductEditForm/'+ p.id)}>Edit</button></Table.Cell>
                <Table.Cell><button className="ui red button" onClick={() => this.deleteProduct(p.id)} key={p.id}>Delete</button></Table.Cell>
            </Table.Row>
        );
    })}
    </Table.Body>
  </Table>
        </div>     
    }
}