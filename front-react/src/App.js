import React, { Component } from 'react';
import {BrowserRouter, Switch, Route } from 'react-router-dom';
import HomePage from './components/Pages/HomePage';
import CurrenciesPage from './components/Pages/CurrenciesPage';
import CurrencyService from './services/CurrencyService';
import StorageService from './services/StorageService';

class App extends Component {
  state = {
    currencies: {},
    defaultCurrency: StorageService.getDefault(),
  }

  componentDidMount() {
    CurrencyService.getCurrencies(this.state.defaultCurrency)
      .then(currencies => {
        this.setState({ currencies });
      });
  }

  render() {
    const { currencies } = this.state;
    
    return (
      <div>
        <BrowserRouter>
          <Switch>
            <Route path="/" exact component={() => <HomePage currencies={currencies} />} />
            <Route path="/currencies" component={() => <CurrenciesPage currencies={currencies} />} />
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
