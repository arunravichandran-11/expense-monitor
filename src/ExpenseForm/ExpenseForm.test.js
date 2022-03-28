import { shallow } from 'enzyme';
import React from 'react';
import ExpenseForm from './index';

describe('Expense Form', () => {
    
    const expenseForm = shallow(<ExpenseForm />);

    it('check the initial states', () => {
        expect(expenseForm.state()).toEqual({expenseType: '', amountSpent: 0});
    });

    it('check if it has expense type input box', () => {
        const expenseTypeElement = expenseForm.find('.expense-type');
        expect(expenseTypeElement.length).toBe(1);
    });

    it('check if it has expense amount input box', () => {
        const amountElement = expenseForm.find('.amount');
        expect(amountElement.length).toBe(1);
    });
    it('check if it has submit button', () => {
        const submitButton = expenseForm.find('button.submit');
        expect(submitButton.length).toBe(1);
    });

    describe('when typing in the expense input box', () => {
        
        it('updates the local state of the component', () => {
            const event = {
                preventDefault() {},
                target: { name: 'expenseType', value: 'Groceries' }
            };
            expenseForm.find('.expense-type').simulate('change', event);
            expect(expenseForm.state('expenseType')).toEqual('Groceries');
        });

        it('updates the local state of the component', () => {
            const event = {
                preventDefault() {},
                target: { name: 'amountSpent', value: 20 }
            };
            expenseForm.find('.amount').simulate('change', event);
            expect(expenseForm.state('amountSpent')).toBe(20);
        });
    });

    describe('when clicking the submit button', () => {

        expenseForm.find('button.submit').simulate('click');

        
    })
})