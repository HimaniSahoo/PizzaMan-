const { default: Top } = require("../components/header");
import { render, screen } from "@testing-library/react";
import {} from '@testing-library/jest-dom'
import {
    BrowserRouter,
  } from "react-router-dom";

test('renders img',()=>{
    render( <BrowserRouter>
           <Top/>
        </BrowserRouter>)
    const image=screen.getByRole('img');
    expect(image).toBeInTheDocument();
});
