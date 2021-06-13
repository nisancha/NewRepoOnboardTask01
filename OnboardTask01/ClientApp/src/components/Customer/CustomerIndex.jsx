import React, { Component } from 'react';
import { Container, Icon, Label, Menu, Table } from 'semantic-ui-react'
import { Pagination } from 'semantic-ui-react';
import axios from 'axios';


export class CustomerIndex extends Component {
    constructor(props) {
        super(props);
        this.state={
            Customers:[]
        };
    }
    
    
    componentDidMount() {
        this.fetchCustomers();
    }

    nextPath(path) {
      this.props.history.push(path);
    }

    fetchCustomers = () => {
        axios.get('/Customers/GetCustomer')
        .then((res) => {
        console.log(res.data);
        this.setState({
            Customers : res.data,
        })
  })
        .catch((e) =>  {
        console.log(e);
  });
    }

    deleteCustomer = (id) => {
      // console.log(id)
      axios.delete('/Customers/DeleteCustomer/'+id)
      .then(res => {
        console.log(res)
        alert ('Record Delete Successful')
        this.fetchCustomers();
      })
      .catch(e => {
        console.log(e)
      })
    }

    render () {
        const { Customers } = this.state;
        return <div>
          <button className="positive ui button" onClick={() => this.nextPath('/CustomerForm') }>Create Customer</button>
    <Table celled>
    <Table.Header>
      <Table.Row>
        <Table.HeaderCell>Customer ID</Table.HeaderCell>
        <Table.HeaderCell>Name</Table.HeaderCell>
        <Table.HeaderCell>Address</Table.HeaderCell>
        <Table.HeaderCell>Actions</Table.HeaderCell>
        <Table.HeaderCell>Actions</Table.HeaderCell>
      </Table.Row>
    </Table.Header>

    <Table.Body>
    {Customers.map((c) => {
        return (
            <Table.Row key={c.id}>
                <Table.Cell>{c.id}</Table.Cell>
                <Table.Cell><Label ribbon>Customer</Label>{c.name}</Table.Cell>
                <Table.Cell>{c.address}</Table.Cell>
                <Table.Cell><button className="ui yellow button" onClick={() => this.nextPath('/CustomerEditForm/'+c.id)} >Edit</button></Table.Cell>
                <Table.Cell><button className="ui red button" onClick={() => this.deleteCustomer(c.id)} key={c.id}>Delete</button></Table.Cell>
            </Table.Row>
        );
    })}
    </Table.Body>
  </Table>
  <Container>
  <Pagination
        itemClass="page-item" // add it for bootstrap 4
        linkClass="page-link" // add it for bootstrap 4
        activePage={CustomerIndex}
        itemsCountPerPage={10}
        totalItemsCount={10}
        pageRangeDisplayed={2}
        onChange={this.nextPath}
      />
  </Container>
  </div>     
    }
}