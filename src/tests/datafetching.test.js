import { render, waitFor, screen } from "@testing-library/react";
import Admin from "../components/admin";


import axios from "axios"; 

function Anmol(a){
    return a
}

jest.mock("axios");

const dummyTodos = [
{
_id:"",
num: 0,
idd:1,
quantity: 1,
name: "pizza", 
desc: "demo",
price:298,
img:"image",
__v:0
}
];

test("todos list", async () => {
axios.get.mockResolvedValue({ data: dummyTodos });
render(<Admin funcNav={Anmol}/>);

const todoList = await waitFor(() => screen.findAllByTestId("todo"));

expect(todoList[0].getAttribute("value")).toHaveLength(5);
}); 