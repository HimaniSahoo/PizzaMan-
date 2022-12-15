import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import "../css/styles.css";
import {addcart, decreasequantity } from "../redux";
import ErrorHandler from "./error";

let CartTotal = (props) => {
  props.funcNav(false);
  const carts = useSelector((state) => state.carts.Carts);
  var ListCart = []; //for holding all the  items of carts
  let TotalCart = 0;//for holding all the data if carts variable
  let fg = 0;//for calculating the total price of the cart
  let TotalCartGst = 0.0;//for calculating GST of the cart
  let FinalPrice = 0;//This variable holds the final price i.e TotalCart+FinalPrice
  Object.keys(carts).forEach(function (item) {
    TotalCart += carts[item].quantity * carts[item].price;
    TotalCartGst = TotalCart * (2 / 100);
    fg = Number(TotalCartGst.toFixed(2));
    FinalPrice = fg + TotalCart;
    ListCart.push(carts[item]);
  });

  /* It will set the localStorage for cart
     with the key cartItems */
  localStorage.setItem(
    "cartItems",
    JSON.stringify(ListCart.map((item) => item))
  );

  /* This statement set the TotalCart value to localstorage */
  localStorage.setItem("Price", TotalCart)

  /* This statement set the GST value to localstorage */
  localStorage.setItem("gst", fg)

  /* This statement set the Final Price value to localstorage */
  localStorage.setItem("totalAmount", FinalPrice) 

  //price will get the initial cart value
  var price = localStorage.getItem("Price")

  //gst will get the gst value 
  var gst = localStorage.getItem("gst")

  //total will get the final pice
  var total = localStorage.getItem("totalAmount")

  const dispatch = useDispatch();
  try{
  return (
    <div className="container">
      <h1>CART</h1>
      <hr />
      <div className="row">

        {ListCart.map((val, idx) => {
          return (
            <div
              className="col-12 col-md-12 col-lg-3 col-xl-3 col-xxl-3 card1"
              key={val.id}
            >
              <div className="pizzaCard">
                <div>
                  <img
                    className="images"
                    style={{
                      borderTopRightRadius: "10px",
                      borderTopLeftRadius: "10px",
                    }}
                    height={90}
                    width={200}
                    key={idx}
                    src={val.img}
                  />
                </div>
                <div style={{ padding: "10px" }}>
                  <p>{val.name}</p>
                  <p style={{ fontSize: "10px", marginTop: "-15px" }}>
                    <i>{val.desc}</i>
                  </p>
                  <div
                    style={{ display: "flex", justifyContent: "space-between" }}
                  >
                    <p>₹ {val.price}</p>
                    <div style={{ display: "flex" }}>
                      <button
                        className="pzb"
                        onClick={() => dispatch(decreasequantity(val.id))}
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
                      <p>{val.quantity}</p>
                      &nbsp;
                      <button
                        className="pzb"
                        style={{
                          height: "20px",
                          width: "20px",
                          lineHeight: "0.1em",
                          padding: "1px",
                          backgroundColor: "grey",
                          fontWeight: "bold",
                          verticalAlign: "middle",
                        }}
                        onClick={() => dispatch(addcart(idx,val.id,val.name,val.desc,val.price,val.img))}
                      >
                        +
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
      <br />

      {/* If the Final Price is not 0
          then it will display the calculation */}
      {FinalPrice != 0 ? (
        <div>
          <h3>Price: ₹ {price} </h3>
          <h3 data-testid="gst">GST: ₹ {gst} (rate: 2%)</h3>
          <h3>Total Price: ₹ {total} </h3>
          <Link to={"/thankyou"} className=" btn checkout">
            CHECKOUT
          </Link>
        </div>
      ) : (
       /*Otherwise it will show cart is empty
       and ask to go back*/
        <div>
          <h1>Cart is empty</h1>{" "}
            <Link className="goback" to={"/"}>
          <button className="btn btn-primary">
              Go back
          </button>
            </Link>
        </div>
      )}
    </div>
  );
  }catch(err){
    return <ErrorHandler />
  }
};
export default CartTotal;
