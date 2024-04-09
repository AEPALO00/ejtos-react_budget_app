import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';

const CurrencyDropdown = () => {
    const { dispatch } = useContext(AppContext);

    const handleCurrencyChange = (event) => {
        dispatch({
            type: 'CHG_CURRENCY',
            payload: event,
        });
    }

    return (
        <div className='alert alert-secondary'>
            <select className="select" id="inputGroupSelect_Currency" onChange={(event) => handleCurrencyChange(event.target.value)}>
                <option value="£" defaultValue>Currency (£ Pound)</option>
                <option value="€" name="euro">€ Euro</option>
                <option value="₹" name="ruppee">₹ Ruppee</option>
                <option value="$" name="dollar">$ Dollar</option>
            </select>
        </div>
     )
}

export default CurrencyDropdown;