import React, { Component } from 'react';
import PropTypes from 'prop-types';
import StorageService from '../../services/StorageService';
import './currency.css';


class Currency extends Component {

    static propTypes = {
        title: PropTypes.string.isRequired,
        value: PropTypes.number.isRequired,
        chnageDefaultCurrnecy: PropTypes.func,
        addOrRemoveFromFavorites: PropTypes.func
    };

    isDefault = title => {
        return !StorageService.isDefault(title);
    }

    isFavorite = title => {
        return StorageService.isFavorite(title);
    }

    render() {
        const { title, value, button, chnageDefaultCurrnecy, addOrRemoveFromFavorites } = this.props;

        return (
            <div className="currency-container">
                <div className="currency-content">
                    <span>{title}</span>
                    <span>:</span>
                    <span>{value}</span>
                </div>
                {
                    button ? 
                        <div className="currency-buttons">    
                            {this.isDefault(title) ? <button onClick={()=>chnageDefaultCurrnecy(title)}>Default</button> : ''}
                            <button onClick={()=>addOrRemoveFromFavorites(title)}>{this.isFavorite(title) ?  'Remove From Favorites' : 'Add To Favorites'}</button>
                        </div>
                        :
                        ''
                }
                
            </div>
            );
        }
}
    
export default Currency;
    