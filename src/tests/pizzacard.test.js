import { render, fireEvent, screen } from "@testing-library/react";
import store from "../redux/store";
import { Provider } from "react-redux";
import PizzaCard from "../components/pizzaCard";
import Cart from "../components/cart";
import {
    BrowserRouter,
  } from "react-router-dom";

//test block
test("increments counter", () => {
// render the component on virtual dom
render(<Provider store={store}><PizzaCard title="Best Sellers"/></Provider>);

//select the elements you want to interact with
const counter = screen.getAllByTestId("counter");
const incrementBtn = screen.getAllByTestId("increment");

//interact with those elements
fireEvent.click(incrementBtn[0]); 
 
//assert the expected result 
expect(counter[0])==='1'; 
}); 
//test block
test("decrements counter", () => {
    // render the component on virtual dom
    render(
      <Provider store={store}>
        <PizzaCard title="Best Sellers" />
      </Provider>
    );
    const incrementBtn = screen.getAllByTestId("increment");
  
    //interact with those elements
    fireEvent.click(incrementBtn[0]);
  
    //select the elements you want to interact with
    const counter = screen.getAllByTestId("counter");
    const decrementBtn = screen.getAllByTestId("decrement");
  
    //interact with those elements
    fireEvent.click(decrementBtn[0]);
  
    //assert the expected result
    expect(counter[0]) <= "0";
  });
//test block
test("Zero checking", () => {
    // render the component on virtual dom
    render(
      <Provider store={store}>
        <PizzaCard title="Best Sellers" />
      </Provider>
    );
    const counter = screen.getAllByTestId("counter");
    const incrementBtn = screen.getAllByTestId("increment");
  
    //interact with those elements
    fireEvent.click(incrementBtn[0]);
  
    expect(counter[0]) ==="1";
  });
  test("Zero checking1", () => {
      // render the component on virtual dom
      render(
        <BrowserRouter>
        <Provider store={store}>
           <Cart/>
        </Provider>
        </BrowserRouter>
      );
      const counter1 = screen.getAllByTestId("counter1");
      const decrementBtn = screen.getAllByTestId("decrement1");
    
      //interact with those elements
      fireEvent.click(decrementBtn[0]);
    
      expect(counter1[0]) <="0";
    });
