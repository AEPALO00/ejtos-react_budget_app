import React, { useState,useContext } from 'react';
import { AppContext } from '../context/AppContext';

const CurrencyDropdown = () => {
    const { dispatch,currency } = useContext(AppContext);
    const [newCurrency,setCurrency] = useState(currency);

    const handleCurrencyChange = (event) => {
        setCurrency(event);

        dispatch({
            type: 'CHG_CURRENCY',
            payload: newCurrency,
        });
        console.log(newCurrency)
    }

    return (
        <div>
            <select className="custom-select" id="inputGroupSelect_Currency" onChange={(event) => handleCurrencyChange(event.target.value)}>
                <option value="£" defaultValue>Currency (£ Pound)</option>
                <option value="€" name="euro">€ Euro</option>
                <option value="₹" name="ruppee">₹ Ruppee</option>
                <option value="$" name="dollar">$ Dollar</option>
            </select>
        </div>
     )
}

export default CurrencyDropdown;