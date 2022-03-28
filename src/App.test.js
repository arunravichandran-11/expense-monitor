import React from 'react';
import { shallow } from 'enzyme';

import App from './App.js';

describe('App Component Rendering', () => {

    it('exists', ()=> {
        const app = shallow(<App />);
        expect(app).toBeTruthy();
    })

    it('renders without any error', ()=> {
        const app = shallow(<App />);
        const rootElement = app.find("[data-test='component-app']");
        expect(rootElement.length).toBe(1);
    })

    it('has the child component <ExpanseList><ExpanseForm> component', () => {

    })
});

