import React from 'react';
import { shallow } from 'enzyme';
import DropDownCurrency from './DropDownCurrency';

describe("DropDownCurrency", () => {
  it("should render drop down currency select", () => {
    const wrapper = shallow(<DropDownCurrency children={null} id={1} changeHandler={()=>{}}/>);
    expect(wrapper.find('select')).toHaveLength(1);
  });
  it("should render drop down currency options", () => {
    const wrapper = shallow(<DropDownCurrency children={null} id={1} changeHandler={()=>{}}/>);
    expect(wrapper.find('option')).toHaveLength(1);
  });
  it("should render drop down currency options with text select", () => {
    const wrapper = shallow(<DropDownCurrency children={null} id={1} changeHandler={()=>{}}/>);
    expect(wrapper.find('option').text()).toEqual('select');
  });
});