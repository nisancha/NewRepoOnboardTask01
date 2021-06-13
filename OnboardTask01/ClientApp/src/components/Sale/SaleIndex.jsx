import React, { Component } from 'react';
import { Icon, Label, Menu, Table } from 'semantic-ui-react'
import axios from 'axios';


export class SaleIndex extends Component {
    constructor(props) {
        super(props);
        this.state={
            Sales:[]
        };
    }
    
    componentDidMount() {
        this.fetchSales();
    }

    nextPath(path) {
      this.props.history.push(path);
    }

    fetchSales = () => {
        axios.get('/Sales/GetSale')
        .then((res) => {
        console.log(res.data);
        this.setState({
            Sales : res.data,
        })
  })
        .catch((e) =>  {
        console.log(e);
  });
    }

    deleteSale = (id) => {
      // console.log(id)
      axios.delete('/Sales/DeleteSale/'+id)
      .then(res => {
        console.log(res)
        alert ('Record Delete Successful')
        this.fetchSales();
      })
      .catch(e => {
        console.log(e)
      })
    }

    render () {
        const { Sales } = this.state;
        return <div>
          <button className="positive ui button" onClick={() => this.nextPath('/SaleForm') }>New Sales Record</button>
    <Table celled>
    <Table.Header>
      <Table.Row>
        <Table.HeaderCell>Sales ID</Table.HeaderCell>
        <Table.HeaderCell>Customer</Table.HeaderCell>
        <Table.HeaderCell>Product</Table.HeaderCell>
        <Table.HeaderCell>Store</Table.HeaderCell>
        <Table.HeaderCell>Actions</Table.HeaderCell>
        <Table.HeaderCell>Actions</Table.HeaderCell>
      </Table.Row>
    </Table.Header>

    <Table.Body>
    {Sales.map((s) => {
        return (
            <Table.Row key={s.id}>
                <Table.Cell>{s.id}</Table.Cell>
                <Table.Cell>{s.customer}</Table.Cell>
                <Table.Cell>{s.product}</Table.Cell>
                <Table.Cell>{s.store}</Table.Cell>
                <Table.Cell><button className="ui yellow button" onClick={() => this.nextPath('/SaleEditForm/' + s.id)}>Edit</button></Table.Cell>
                <Table.Cell><button className="ui red button" onClick={() => this.deleteSale(s.id)} key={s.id}>Delete</button></Table.Cell>
            </Table.Row>
        );
    })}
    </Table.Body>
  </Table>
        </div>     
    }
}