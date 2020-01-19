import React, { Component } from 'react';
import './App.css';
import CurrencyConverter from '../Pages/CurrencyConverter/CurrencyConverter';

const App = () => {
        return (
            <div>
                <h1>Currency Converter</h1>
                <CurrencyConverter />
            </div>
        )
}

export default App;