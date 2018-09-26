import React, { Component } from 'react';
import Currency from '../Currency/Currency';
import StorageService from '../../services/StorageService';
import PropTypes from 'prop-types';
import './header.css';


class Header extends Component {

    static propTypes = {
        currencies: PropTypes.any,
    };

    state = {
        defaultCurrency: StorageService.getDefault(),
        favoriteCurrencies: StorageService.getFavorites(),
    };

    render() {
        const { defaultCurrency, favoriteCurrencies } = this.state;
        const { currencies } = this.props;

        return (
            <div className="clearfix">
                <div className="default-container">
                    <h3>Default:{defaultCurrency}</h3>
                </div>
                <div className="favorite-container">
                    <span>Favorites:</span>
                    {favoriteCurrencies.map((item, i) =>
                                <Currency 
                                    key={i}
                                    title={item}
                                    value={currencies[item]}
                                />
                                
                        )}
                </div>
            </div>
        );
    }
}
    
export default Header;
    