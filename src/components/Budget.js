import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';

const Budget = () => {
    // Import app context
    const { budget, expenses, currency } = useContext(AppContext);
    //  Create hooks
    const [newBudget, setNewBudget] = useState(budget);
    const handleBudgetChange = (event) => {
        const totalExpenses = expenses.reduce((total, item) => {
            return (total = total + item.cost);
        }, 0);
        console.log(totalExpenses)

        if (event.target.value <= 20000){
            if (event.target.value <= totalExpenses) {
                alert(`Budget must not be lower than expenses!`);
                document.getElementById("in_budget").value = totalExpenses;
            } else {
                setNewBudget(event.target.value);
            }
        } else {
            alert("Budget must not exceed 20,000!");
            document.getElementById("in_budget").value = newBudget;
        }
    }

    return (
        <div className='alert alert-secondary'>
            <span>Budget: {currency} </span>
            <input value={newBudget} id="in_budget" type='number' step="10" onChange={handleBudgetChange}></input>
        </div>
    );
}

export default Budget;