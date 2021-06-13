import React, { Component } from 'react';
import { Icon, Label, Menu, Table } from 'semantic-ui-react'
import axios from 'axios';


export class StoreIndex extends Component {
    constructor(props) {
        super(props);
        this.state={
            Stores:[]
        };
    }
    
    
    componentDidMount() {
        this.fetchStores();
    }

    nextPath(path) {
      this.props.history.push(path);
    }

    fetchStores = () => {
        axios.get('/Stores/GetStore')
        .then((res) => {
        console.log(res.data);
        this.setState({
            Stores : res.data,
        })
  })
        .catch((e) =>  {
        console.log(e);
  });
    }

    deleteStore = (id) => {
    //   console.log(id)
      axios.delete('/Stores/DeleteStore/'+id)
      .then(res => {
        console.log(res)
        alert ('Record Delete Successful')
        this.fetchStores();
      })
      .catch(e => {
        console.log(e)
      })
    }

    render () {
        const { Stores } = this.state;
        return <div>
          <button className="positive ui button" onClick={() => this.nextPath('/StoreForm') }>Add New Store</button>
    <Table celled>
    <Table.Header>
      <Table.Row>
        <Table.HeaderCell>Store ID</Table.HeaderCell>
        <Table.HeaderCell>Name</Table.HeaderCell>
        <Table.HeaderCell>Address</Table.HeaderCell>
        <Table.HeaderCell>Actions</Table.HeaderCell>
        <Table.HeaderCell>Actions</Table.HeaderCell>
      </Table.Row>
    </Table.Header>

    <Table.Body>
    {Stores.map((s) => {
        return (
            <Table.Row key={s.id}>
                <Table.Cell>{s.id}</Table.Cell>
                <Table.Cell><Label ribbon>Store</Label>{s.name}</Table.Cell>
                <Table.Cell>{s.address}</Table.Cell>
                <Table.Cell><button className="ui yellow button" onClick={() => this.nextPath('/StoreEditForm/' + s.id)}>Edit</button></Table.Cell>
                <Table.Cell><button className="ui red button" onClick={() => this.deleteStore(s.id)} key={s.id}>Delete</button></Table.Cell>
            </Table.Row>
        );
    })}
    </Table.Body>
  </Table>
        </div>     
    }
}