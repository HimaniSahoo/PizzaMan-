import { useEffect } from "react";
import "../css/styles.css";
import thankyou from "../images/thankss.gif";
import pizza from "../images/pizza.gif";
import { useSelector } from "react-redux";

let Thankyou = (props) => {
  // For displaying the footer
  props.funcNav(true);
  //carts holds all the add to cart data
  const carts = useSelector((state) => state.carts.Carts);
  let ListCart = [];
  Object.keys(carts).forEach(function (item) {
    ListCart.push(carts[item]);
  });
  /* url variable holds the link of node server */
  const url = "http://localhost:5000/users";
  /* header holds the content type of JSON format
     all the data will be sent in JSON format */
  const header = { "Content-Type": "application/json" };

  /* This function send the data to node server
     so that it will store in MongoDB using
     fetch API */ 
  const handleSubmit = async () => {
    const data = ListCart;
    await fetch(url, {
      method: "POST",
      cache: "no-cache",
      headers: header,
      body: JSON.stringify(data),
    })
      .then((response) => {
         console.log("finish api call - response:::", response)
      })
      .catch((error) => {
        console.log("something wrong:::", error);
      });
  };
  
  useEffect(() => {
    handleSubmit()
  }, []);

  return (
    <div className="tycontainer">

      <img className="pizzz" src={pizza} />
      <img className="tyimg" src={thankyou} />
    
    </div>
  );
};
export default Thankyou;
