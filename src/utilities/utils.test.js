import { computeCurrencyConversion, checkDecimalNumber, createAction } from './utils';

describe('testing app utilities methods', () => {

    it('test the currency conversion function', () => {
        expect(computeCurrencyConversion(0.77, 71.04, 1000)).toBe(92259.74);
    });

    it('test the decimal number case 1', () => {
        expect(checkDecimalNumber(10.02)).toEqual(true);
    });

    it('test the decimal number case2', () => {
        expect(checkDecimalNumber(10)).toEqual(true);
    });

    it('test the decimal number case3', () => {
        expect(checkDecimalNumber(0)).toEqual(true);
    });

    it('test the decimal number case4', () => {
        expect(checkDecimalNumber('man')).toEqual(false);
    });

    it('test createAction function', () => {
        expect(createAction('SET_STATE')(true)).toEqual({type:'SET_STATE',payload:true});
    });

});