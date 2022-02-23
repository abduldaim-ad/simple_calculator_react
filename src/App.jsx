import React from 'react';
import {add, sub, mult, div} from './Calc';

function App(){
    return(
    <>
      <ul>
        <li>The sum of two numbers is {add(40, 4)}</li>
        <li>The subtraction of two numbers is {sub(40, 4)}</li>
        <li>The multiplication of two numbers is {mult(40, 4)}</li>
        <li>The division of two numbers is {div(40, 4)}</li>
      </ul>
    </>
    );
}

export default App;