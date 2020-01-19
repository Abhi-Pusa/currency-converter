import React from 'react';
import { shallow } from 'enzyme';
import TableContent from './TableContent';

describe("TableContent", () => {
  it("should render drop down currency", () => {
    let obj = [{amount:10,fromCurrency:'GBP',toCurrency:'INR',computedAmount:90}];
    const wrapper = shallow(<TableContent historyConversion={obj} />);
  });
});