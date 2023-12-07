import React, { useReducer, useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const balanceReducer = (state, action) => {
  switch (action.type) {
    case 'WITHDRAW':
      return { balance: state.balance - action.amount };
    case 'DEPOSIT':
      return { balance: state.balance + action.amount };
    default:
      return state;
  }
};

const Contact = () => {
  const initialBalance = 1000;

  const [state, dispatch] = useReducer(balanceReducer, { balance: initialBalance });
  const { balance } = state;

  const [withdrawAmount, setWithdrawAmount] = useState(0);
  const [depositAmount, setDepositAmount] = useState(0);



  const handleWithdraw = () => {
    if (balance - withdrawAmount >= 0) {
      dispatch({ type: 'WITHDRAW', amount: withdrawAmount });
      setWithdrawAmount(0); // Reset input field after withdrawal
    } else {
      alert('Insufficient funds!');
    }
  };

  const handleDeposit = () => {
    dispatch({ type: 'DEPOSIT', amount: depositAmount });
    setDepositAmount(0); // Reset input field after deposit
  };

  return (
    <div className="container mt-5">
      <h2 className="text-center mb-4">Banking Page</h2>

      <div className="card text-center">
        <div className="card-body">
          <h5 className="card-title">Account Balance: ${balance}</h5>

          <div className="row mt-4">
            <div className="col">
              <div className="input-group mb-3">
                <span className="input-group-text">Withdraw</span>
                <input
                  type="number"
                  className="form-control"
                  placeholder="Enter amount"
                  value={withdrawAmount}
                  onChange={(e) => setWithdrawAmount(parseFloat(e.target.value))}
                />
                <button className="btn btn-danger" onClick={handleWithdraw}>
                  Withdraw
                </button>
              </div>
            </div>

            <div className="col">
              <div className="input-group mb-3">
                <span className="input-group-text">Deposit</span>
                <input
                  type="number"
                  className="form-control"
                  placeholder="Enter amount"
                  value={depositAmount}
                  onChange={(e) => setDepositAmount(parseFloat(e.target.value))}
                />
                <button className="btn btn-success" onClick={handleDeposit}>
                  Deposit
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
