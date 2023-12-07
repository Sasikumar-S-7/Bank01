import React, { useReducer } from 'react';


const reducer = (state, action) => {
  switch (action.type) {
    case 'DEPOSIT':
      return { balance: state.balance + action.amount };
    case 'WITHDRAW':
      return { balance: state.balance - action.amount };
    default:
      return state;
  }
};

const Blogs = () => {
  const initialState = { balance: 0 };
  const [state, dispatch] = useReducer(reducer, initialState);

  const handleDeposit = () => {
    const amount = Number(prompt('Enter deposit amount:'));
    if (!isNaN(amount) && amount > 0) {
      dispatch({ type: 'DEPOSIT', amount });
    } else {
      alert('Please enter a valid deposit amount.');
    }
  };

  const handleWithdraw = () => {
    const amount = Number(prompt('Enter withdrawal amount:'));
    if (!isNaN(amount) && amount > 0) {
      if (amount <= state.balance) {
        dispatch({ type: 'WITHDRAW', amount });
      } else {
        alert('Insufficient funds.');
      }
    } else {
      alert('Please enter a valid withdrawal amount.');
    }
  };

  return (
    <div className="container mt-5">
      <h2 className="mb-4">Banking Page</h2>
      <div className="mb-3">
        <p>Balance: ${state.balance}</p>
      </div>
      <div className="mb-3">
        <button className="btn btn-success me-2" onClick={handleDeposit}>
          Deposit
        </button>
        <button className="btn btn-danger" onClick={handleWithdraw}>
          Withdraw
        </button>
      </div>
    </div>
  );
};

export default Blogs;
