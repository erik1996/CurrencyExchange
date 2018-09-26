import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './dropDown.css';


class Header extends Component {

    static propTypes = {
        currencies: PropTypes.any,
        readOnyl:  PropTypes.bool,
        name: PropTypes.string,
        nameInput: PropTypes.string,
        inputValue: PropTypes.number
    };

    onChange = (event) => {
      this.props.getData(event.target.name, event.target.value)
    }
    render() {
        const { currencies, readOnly, name, nameInput, inputValue } = this.props;

        return (
          <div className="drop-down-container">
              <select name={name} onChange={this.onChange.bind(this)}>
                <option>Select Currency</option>
                  {Object.entries(currencies).map((item, i) => <option value={item[0]} key={i}>{item[0]}: {item[1]}</option> )}
              </select>
              {
                readOnly ? 
                <input type="number" readOnly={readOnly} value={inputValue} name={nameInput}/>
                :
                <input type="number" readOnly={readOnly} name={nameInput} onChange={this.onChange}/>
              }
          </div>
           
        );
    }
}
    
export default Header;
    