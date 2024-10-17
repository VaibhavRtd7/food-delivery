/* eslint-disable no-undef */
import { sum } from "../sum"


test("1. :- Sum function should execute the sum of two numbers", () => {
  
    const result = sum(3,4);
    // Assertion
    expect(result).toBe(7);

})