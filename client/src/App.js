import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';

import Home from './components/home';
import BeforeAdd from './components/BeforeAdd';
import BeforeList from './components/BeforeList';
import AddBook from './components/AddBook';
import BookSections from './components/BookSections';

import BookList1 from './components/BookList1';


const client = new ApolloClient({
    uri: 'http://localhost:4003/graphql',
    cache: new InMemoryCache( ),
});

class App extends Component{
  render(){
    return (
      <ApolloProvider client={client}>

          <BrowserRouter>
            <div className="App" id="main">
              <header>
                <nav className="nav-wrapper black">
                <div className="container">
                    <a href="/" className="brand-logo ">
                        <span>Y.X. P3</span>
                    </a>
                </div>
                </nav>
              </header>

              <Switch>
                <Route exact path="/" component={Home} />
                <Route path="/list" component={BeforeList} />
                <Route path="/add" component={BeforeAdd} />
                <Route path="/zuojia" component={AddBook} />
                <Route path="/duzhe" component={BookSections} />
                <Route path="/duzhe1" component={BookList1} />
              </Switch>


            </div>
          </BrowserRouter>
        

          



      </ApolloProvider>
    )
  }
}

export default App;
