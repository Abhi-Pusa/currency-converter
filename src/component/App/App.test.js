import React from 'react';
import { shallow } from 'enzyme';
import App from './App';

describe('App component', () => {
    it('starts renders a header', () => {
        const wrapper = shallow(<App />);
        const text = wrapper.find('h1').text();
        expect(text).toEqual('Currency Converter');
    });
});