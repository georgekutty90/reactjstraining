import React, { Component } from 'react';
import { Route } from 'react-router';
import { Layout } from './components/Layout';
import { FetchContactList } from './components/FetchContactList';
import { ReactFragmentContactListing } from './components/ReactFragmentContactListing';
import { ContactListData } from './components/WorkShopExample';
import './custom.css'

export default class App extends Component {
  static displayName = App.name;

  render () {
    return (
      <Layout>
            <Route exact path='/' component={FetchContactList} />
            <Route exact path='/ReactFragmentContactListing' component={ReactFragmentContactListing} />
            <Route exact path='/WorkShopExample' component={ContactListData} />
      </Layout>
    );
  }
}
