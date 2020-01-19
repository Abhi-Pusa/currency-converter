import React from 'react';
import './TableContent.css';

export default (props) => {
    let { historyConversion } = props;
    if(historyConversion.length == 0) return null;
    return (
        <table>
            <thead>
            <tr>
                <th>Amount</th>
                <th>From Currency</th>
                <th>Computed Amount</th>
                <th>To Currency</th>
            </tr>
            </thead>
            <tbody>
                {historyConversion.map((value, key) => {
                    return (
                        <tr key={key}>
                            <td>{value.amount}</td>
                            <td>{value.fromCurrency}</td>
                            <td>{value.computedAmount}</td>
                            <td>{value.toCurrency}</td>
                        </tr>
                    )
                })}
            </tbody>
        </table>
    )
}