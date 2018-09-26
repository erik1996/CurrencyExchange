import React, { Component } from 'react'
import DropDown from '../DropDown/DropDown'
import Header from '../Header/Header'
import PropTypes from 'prop-types';
import StorageService from '../../services/StorageService';
import CurrencyService from '../../services/CurrencyService';
import Menu from '../Menu/Menu'
import '../../App.css'

class HomePage extends Component {

    static propTypes = {
      currencies: PropTypes.any,
    };

    state = {
      defaultCurrency: StorageService.getDefault(),
      favoriteCurrencies: StorageService.getFavorites(),
    };

    getData = (name, value) => {
      this.setState({
        [name] : value
      });
    }

    onClick = () => {
      if(this.state.from && this.state.fromQuantity && this.state.to){
        let data = {
          fromValute: this.state.from,
          toValute: this.state.to,
          quantity: this.state.fromQuantity
        }
         CurrencyService.convert(data)
        .then(body => {
          this.setState({ exchangeValue: body });
        });
      }
     
    }

    render() {
      const { currencies } = this.props;
      const { exchangeValue } = this.state;

      return (
        <div>
            <Menu />
            <div className="container">
                <Header currencies={currencies}/>
                <div className="exchange-container">
                    <DropDown getData={this.getData} name='from' nameInput='fromQuantity' readOnyl={false} currencies={currencies}/>
                    <button onClick={this.onClick}>ExChange</button>
                    <DropDown getData={this.getData} readOnly={true} name='to' inputValue={exchangeValue} nameInput='to-quantity' currencies={currencies}/>
                </div>
            </div>
        </div>
      );
    }
}

export default HomePage;
