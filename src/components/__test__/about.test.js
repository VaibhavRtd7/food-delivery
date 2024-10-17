/* eslint-disable no-undef */
import AboutUs from "../About";
import {render, screen} from "@testing-library/react"
import React from "react";
import '@testing-library/jest-dom';

describe("Contact Us Page Test Cases", () => {

    test("2. :- Load About Us Component :-", () => {
        
        render(<AboutUs />);
        const headings = screen.getAllByRole("heading");
    
        // assertion
        // expect(heading).toBeInTheDocument();
    
        headings.forEach((heading) => {
            expect(heading).toBeInTheDocument();
        });
    
    });
    
    test("3. :- Checks the submit button is present or not in AboutUs Component :-", () => {
        
        render(<AboutUs />);
        
        // querying... 
        const button = screen.queryByRole('button')
    
        if (!button) {
            throw new Error("Submit button is missing in the AboutUs component");
        }
    
        // assertion
        expect(button).toBeInTheDocument();
        // expect(button).toBeInTheDocument("Submit button is missing in the AboutUs component");
    });
})




