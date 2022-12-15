import { render, fireEvent, screen } from "@testing-library/react";
import store from "../redux/store";
import { Provider } from "react-redux";
import PizzaCard from "../components/pizzaCard";

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

