import React, { Component } from 'react';
import Currency from '../Currency/Currency';
import PropTypes from 'prop-types';
import StorageService from '../../services/StorageService';
import Menu from '../Menu/Menu'


class CurrenciesPage extends Component {
    static propTypes = {
        currencies: PropTypes.any,
    };

    state = {
        defaultCurrency: StorageService.getDefault(),
        favoriteCurrencies: StorageService.getFavorites(),
    };

    chnageDefaultCurrnecy = title => {
        let defaultCurrency = StorageService.setDefault(title);
        this.setState({ defaultCurrency });
    }

    addOrRemoveFromFavorites = title => {
       let favoriteCurrencies =  StorageService.isFavorite(title) ? 
        StorageService.removeFromFavorites(title) : StorageService.addToFavorites(title)
       this.setState({ favoriteCurrencies });
    }

    render() {
        const { currencies } = this.props;

        return (
            <div>
                <Menu />
                <div className="container">
                    {Object.entries(currencies).map((item, i) => 
                        <Currency 
                            key={i}
                            title={item[0]}
                            button={true}
                            addOrRemoveFromFavorites = {this.addOrRemoveFromFavorites}
                            chnageDefaultCurrnecy = {this.chnageDefaultCurrnecy}
                            value={item[1]}
                        />
                    )}
                </div>
            </div>
        );
    }
}
    
export default CurrenciesPage;
    