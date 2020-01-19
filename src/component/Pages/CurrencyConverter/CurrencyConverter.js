import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchCurrentCurrency } from '../../../data/actions/actions';
import { computeCurrencyConversion,checkDecimalNumber } from '../../../utilities/utils';
import DropDownCurrency from '../DropDownCurrency/DropDownCurrency';
import TableContent from '../TableContent/TableContent';
import './CurrencyConverter.css';

class CurrencyConverter extends Component {
    constructor() {
        super();
        this.state = {
            toCurrency: 'select',
            fromCurrency: 'select',
            amount: 0,
            computedAmount: 0,
            historyConversion: []
        }
    }

    componentDidMount() {
        this.props.fetchCurrentCurrency();
    }

    getCurrencyList() {
        const { appState: { rates } } = this.props;
        let content = [];
        for (let key in rates) {
            content.push(<option key={key}>{key}</option>)
        }
        return content;
    }

    onChangeHandler(e) {
        const { appState: { rates } } = this.props;
        let { toCurrency, fromCurrency, amount } = this.state;
        let computedAmount = 0;

        switch (e.target.id) {
            case 'currencyInput': {
                amount = e.target.value;
                this.setState({ amount: e.target.value });
                break;
            }
            case 'fromCurrency': {
                fromCurrency = e.target.value;
                this.setState({ fromCurrency: e.target.value });
                break;
            }
            case 'toCurrency': {
                toCurrency = e.target.value;
                this.setState({ toCurrency: e.target.value });
                break;
            }
        }

        let computeFlag = checkDecimalNumber(amount) && amount !== 0 && toCurrency !== '' && toCurrency !== 'select' && fromCurrency !== '' && fromCurrency !== 'select' && e.target.id != 'currencyInput';

        if (computeFlag) {
            computedAmount = computeCurrencyConversion(rates[fromCurrency], rates[toCurrency], amount);
            this.setState({ computedAmount });
            let newArr = this.state.historyConversion;
            if (newArr.length >= 10) {
                newArr.splice(0, 1);
            }
            newArr.push({ fromCurrency, toCurrency, amount, computedAmount });
        }
    }

    render() {
        return (
            <div className="container">
                <div className="converter-wrapper">  
                    <div className="converter-field">
                        <input id="currencyInput" value={this.state.amount} type="text" onChange={(e) => this.onChangeHandler(e)} />
                    </div>
                    <div className="converter-field">
                        <DropDownCurrency id="fromCurrency" children={this.getCurrencyList()} changeHandler={(e) => this.onChangeHandler(e)} />
                    </div>
                    <div className="converter-field">
                        <span id="currencyAmount">{this.state.computedAmount}</span>
                    </div>
                    <div className="converter-field">
                        <DropDownCurrency id="toCurrency" children={this.getCurrencyList()} changeHandler={(e) => this.onChangeHandler(e)} />
                    </div>
                </div>
                <div className="table-content">
                    <TableContent historyConversion={this.state.historyConversion} />
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => state;

const mapDispatchToProps = (dispatch) => {
    return {
        fetchCurrentCurrency: () => dispatch(fetchCurrentCurrency())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CurrencyConverter);