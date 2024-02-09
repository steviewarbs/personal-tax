// App.js

import React, { useState } from 'react';
import './App.css';

function App() {
  const [income, setIncome] = useState('');
  const [calculatedAllowance, setCalculatedAllowance] = useState(null);

  const handleIncomeChange = (e) => {
    setIncome(e.target.value);
  };

  const calculateAllowance = () => {
    // Convert income to a number
    const incomeAmount = parseFloat(income);

    // Check if income is a valid number
    if (isNaN(incomeAmount) || incomeAmount < 0) {
      alert('Please enter a valid positive income.');
      return;
    }

    // Standard personal allowance
    let personalAllowance = 12570;

    // Reduce personal allowance for incomes over £100,000
    if (incomeAmount > 100000) {
      const excessIncome = incomeAmount - 100000;
      const allowanceReduction = Math.floor(excessIncome / 2);
      personalAllowance = Math.max(0, personalAllowance - allowanceReduction);
    }

    // Set the reduced personal allowance as the calculated value
    setCalculatedAllowance(personalAllowance);
  };

  const handleRefresh = () => {
    setIncome('');
    setCalculatedAllowance(null);
  };

  return (
    <div className="App">
      <div className="header">
        <h1>Personal Allowance Tax Calculator</h1>
        <div className="header-links">
        </div>
      </div>
      <div className="container">
        {/* Informational Section */}
        <div className="manchester-tax-assistance">
          <h2>About the App</h2>
          <p>
            Welcome to the Tax Calculator App designed to help individuals estimate their UK personal tax allowance for the tax year 2024/25.
            This application simplifies the process of calculating personal allowances, taking into account the regulations set by the UK government.
          </p>
          <p>
            For the most up-to-date and detailed information, please refer to the official UK government website:
            <a href="https://www.gov.uk/income-tax-rates/income-over-100000" target="_blank" rel="noopener noreferrer">
              HM Revenue & Customs
            </a>
          </p>
        </div>

        <form>
          <label>
            Annual Income: (£)
            <input type="number" value={income} onChange={handleIncomeChange} />
          </label>
          <br />
          <div className="button-group">
            <button type="button" onClick={calculateAllowance}>
              Calculate Personal Allowance
            </button>
            <button type="button" onClick={handleRefresh} className="refresh-button">
              Refresh
            </button>
          </div>
        </form>
        {calculatedAllowance !== null && (
          <div className="results">
            <h2>Results</h2>
            <p>
              <strong style={{ color: 'black' }}>
                Reduced personal allowance: £{calculatedAllowance.toFixed(2)}
              </strong>
              <br />
              <span style={{ color: 'red' }}>
                (Please note this is only and estimate, for financial advise contact a legal advisor)
              </span>
            </p>
          </div>
        )}

        {/* Additional Section for Manchester-based Tax Assistance Companies */}
        <div className="manchester-tax-assistance">
          <h2>Manchester-based Tax Assistance Companies</h2>
          <p>
            <a href="https://www.hwca.com/accountants-manchester/" target="_blank" rel="noopener noreferrer">
              Haines Watts Manchester
            </a>
          </p>
          <p>
            <a href="https://www.ac-accounts.co.uk/" target="_blank" rel="noopener noreferrer">
              A&C Chartered Accountants Manchester
            </a>
          </p>
          <p>
            <a href="https://www.jackross.com/" target="_blank" rel="noopener noreferrer">
              Jack Ross Chartered Accountants
            </a>
          </p>
          <p>
            <a href="https://skaccountants.com/" target="_blank" rel="noopener noreferrer">
              SK Accountants
            </a>
          </p>
          <p>
            <a href="https://www.jpaccountant.info/" target="_blank" rel="noopener noreferrer">
              J&P Accountants
            </a>
          </p>
          <p>
            <a href="https://rjf.uk.com/" target="_blank" rel="noopener noreferrer">
              RJF Accounting & Business Support
            </a>
          </p>
          <p>
            <a href="https://www.quayaccountants.co.uk/" target="_blank" rel="noopener noreferrer">
              Quay Accountants
            </a>
          </p>
          <p>
            <a href="https://ark.accountants/" target="_blank" rel="noopener noreferrer">
              ARK Accountants
            </a>
          </p>
          <p>
            <a href="https://www.horsfield-smith.co.uk/" target="_blank" rel="noopener noreferrer">
              Horsfield & Smith Chartered Accountants
            </a>
          </p>
          <p>
            <a href="https://accountsandlegal.co.uk/" target="_blank" rel="noopener noreferrer">
              Accounts Legal
            </a>
          </p>
        </div>
      </div>
      <div className="footer">
        <p>&copy; 2024 Personal Allowance Tax Calculator</p>
      </div>
    </div>
  );
}

export default App;
