import "../css/styles.css";
import cartImage from "../images/shoppingcart-logo.png";
import { useDispatch, useSelector } from "react-redux";
import { addcart, decreasequantity, clearcart } from "../redux";
import { Link } from "react-router-dom";
import ErrorHandler from "./error";
let Cart = () => {
  const carts = useSelector((state) => state.carts.Carts);
  // var carts = "Anmol"

  //carts holds all the add to cart data
  let ListCart = [];
  const dispatch = useDispatch();

  let TotalCart = 0;//for holding all the data if carts variable
  let fgst = 0;//for calculating the total price of the cart
  let TotalCartGst = 0.0;//for calculating GST of the cart
  let FinalPrice = 0;//This variable holds the final price i.e TotalCart+FinalPrice
  Object.keys(carts).forEach(function (item) {
    TotalCart += carts[item].quantity * carts[item].price;
    TotalCartGst = TotalCart * (2 / 100);
    fgst = Number(TotalCartGst.toFixed(2));
    FinalPrice = fgst + TotalCart;
    ListCart.push(carts[item]);
  });

  /* This statement store the value of ListCart
     in localStorage with key cartItem */
  localStorage.setItem(
    "cartItems",
    JSON.stringify(ListCart.map((item) => item))
  );

  /* This statement store the value of Initial price value
     in localStorage with key cartItem */
  localStorage.setItem("Price", TotalCart);

  /* This statement store the gst value in localstorage
     with key gst */ 
  localStorage.setItem("gst", fgst);

   /* This statement store the Final Price value in localstorage
     with key totalAmount */ 
  localStorage.setItem("totalAmount", FinalPrice);

  try{
  return (
    <div id="cart">
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <h2>Cart</h2>
        {FinalPrice != 0 && (
          <button
          data-testid="clear"
          // Onclick of a button it will dispatch the clear cart function
            onClick={() => dispatch(clearcart())}
            className="btn btn-danger"
          >
            Clear Cart
          </button>
        )}
      </div>
      {/* If the Final Price is 0, Carty empty will be shown */}
      {FinalPrice == 0 ? (
        <center>
          <img
            src={cartImage}
            alt="cart"
            height="80px"
            style={{ marginTop: "40px" }}
          ></img>
          <p>
            <b>The Cart is Empty.</b>
          </p>
        </center>
      ) : (
        /* If Final Price is not 0, then it
           will display the items in the cart */ 
        <div>
          <hr />
          {ListCart.map((item, key) => {
            return (
              
              <div key={key}>
                <p>
                  <b>{item.name} </b>
                </p>
                <p style={{ color: "gray", fontSize: "14px" }}>
                  <i>{item.desc}</i>
                </p>
                <div
                  style={{ display: "flex", justifyContent: "space-between" }}
                >
                  <p>Price: ₹ {item.price}</p>
                  <div style={{ display: "flex", margin: "10px" }}>
                    <button
                      className="pzb"
                      data-testid="decrement1"
                      // Onclick of a button it will dispatch the  function
                      onClick={() => dispatch(decreasequantity(item.id))}
                      
                      style={{
                        height: "20px",
                        width: "20px",
                        lineHeight: "0.1em",
                        padding: "1px",
                        backgroundColor: "grey",
                        fontWeight: "bold",
                      }}
                    >
                      -
                    </button>
                    &nbsp;
                    <p data-testid="counter1">{item.quantity}</p>
                    &nbsp;
                    <button
                      className="pzb"
                      data-testid="increment1"
                      style={{
                        height: "20px",
                        width: "20px",
                        lineHeight: "0.1em",
                        padding: "1px",
                        backgroundColor: "grey",
                        fontWeight: "bold",
                        verticalAlign: "middle",
                      }}
                      onClick={() => dispatch(addcart(key,item.id,item.name,item.desc,item.price,item.img))}
                    >
                      +
                    </button>
                  </div>
                </div>
                <hr />
              </div>
            );
          })}
          <p>
            <b>Total Price: ₹ {FinalPrice}</b>
          </p>
          <Link to="/cart" id="gotocart">
            GO TO CART 
          </Link>
        </div>
      )}

      {/* <button id='gotocart'>GO TO CART</button> */}
    </div>
  )
}catch(err){
  return <ErrorHandler />
}
};
export default Cart;
