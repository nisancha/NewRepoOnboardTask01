import React, { Component } from 'react';
import { Route } from 'react-router';
import { Layout } from './components/Layout';
import { CustomerForm } from './components/CustomerForm';
import { ProductForm } from './components/ProductForm';
import { CustomerEditForm } from './components/CustomerEditForm';
import { CustomerIndex } from './components/Customer/CustomerIndex';
import { ProductIndex } from './components/Product/ProductIndex';
import { StoreIndex } from './components/Store/StoreIndex';
import { StoreForm } from './components/StoreForm';
import { StoreEditForm } from './components/StoreEditForm';
import './custom.css'
import { SaleIndex } from './components/Sale/SaleIndex';
import { SaleForm } from './components/SaleForm';
import { SaleEditForm } from './components/SaleEditForm';
import { ProductEditForm } from './components/ProductEditForm';






export default class App extends Component {
  static displayName = App.name;

  render () {
    return (
      <Layout>
        <Route path='/Customer' component={CustomerIndex} />
        <Route path='/Product' component={ProductIndex} />
        <Route path='/Store' component={StoreIndex} />
        <Route path='/Sale' component={SaleIndex} />
        <Route path='/CustomerForm' component={CustomerForm} />
        <Route path='/ProductForm' component={ProductForm} />
        <Route path='/StoreForm' component={StoreForm} />
        <Route path='/SaleForm' component={SaleForm} />
        <Route path='/CustomerEditForm/:id' component={CustomerEditForm} />
        <Route path='/ProductEditForm/:id' component={ProductEditForm} />
        <Route path='/StoreEditForm/:id' component={StoreEditForm} />
        <Route path='/SaleEditForm/:id' component={SaleEditForm} />
      </Layout>
    );
  }
}
