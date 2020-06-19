import React from 'react';
import {Header} from './components/Header.js';
import {Balance} from './components/Balance.js';
import {IncomeExpenses} from './components/IncomeExpenses.js';
import {Transactionlist} from './components/Transactionlist.js';
import {AddTransaction} from './components/AddTransaction.js';
import {GlobalProvider} from './context/GlobalState.js';
import './App.css';

function App() {
  return (
    <GlobalProvider>
      <Header/>
      <div className="container">
      <Balance/>
      <IncomeExpenses/>
      <Transactionlist/>
      <AddTransaction/>
      </div>
    </GlobalProvider>
  );
}

export default App;
