/* eslint-disable no-undef */
import React from "react";
import Header from "../Header"
import { render, screen} from '@testing-library/react'
import appStore from '../../utils/appStore';
import { Provider } from 'react-redux';
import { BrowserRouter } from "react-router-dom";
import '@testing-library/jest-dom';


test("Should render header component with login page", () => {


    render(
      <BrowserRouter>
        <Provider store={appStore}>
            <Header />
        </Provider>
      </BrowserRouter>  
    )

    const loginButton = screen.getByText('Login');

    // assertion
    expect(loginButton).toBeInTheDocument();
})