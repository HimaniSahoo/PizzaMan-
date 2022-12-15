import "../css/styles.css";
import { useSelector } from "react-redux";
import Cart from "./cart";
import PizzaCard from "./pizzaCard";
import { Link } from "react-router-dom";
import ErrorHandler from "./error";
let Content = (props) => {
  //For displaying footer 
  props.funcNav(true);
  //carts holds all the add to cart data
  var carts = useSelector((state) => state.carts.Carts);
  
  // var carts=null
  var ListCart = [];//for holding all the data if carts variable
  let TotalCart = 0;//for calculating the total price of the cart
  let TotalCartGst = 0.0;//for calculating GST of the cart
  let FinalPrice = 0;//This variable holds the final price i.e TotalCart+FinalPrice
  
  try{
  //this for each loop is to push the item of carts into ListCart
  Object.keys(carts).forEach(function (item) {
    TotalCart += carts[item].quantity * carts[item].price;
    TotalCartGst = TotalCart * (2 / 100);
    // debugger
    FinalPrice = Math.round(TotalCartGst * 100) / 100 + TotalCart;
    ListCart.push(carts[item]);
  });

  
  return (
    <div className="container">
      <h1>Menu</h1>
      <span style={{color:'black'}}><hr/></span>
      <div className="row">
        <div className="col-12 col-md-12 col-lg-7 col-xl-7 col-xxl-7">
          <div className="row">
            <h2 className="category">
              <span>Best Sellers</span>
            </h2>
            {/* This component is sending the props
                do that it display each section in different part */}
              
            <PizzaCard title="Best Sellers" />
            <p/><p/><p/>

            <h2 className="category">
              <span>Veg Pizzas</span>
            </h2>
            <PizzaCard title="Veg Pizzas" />
            <p/><p/><p/>

            <h2 className="category">
              <span>Non Veg Pizzas</span>
            </h2>
            <PizzaCard title="Non Veg Pizzas" />
            <p/><p/><p/>

            <h2 className="category">
              <span>Side Dishes</span>
            </h2>
            <PizzaCard title="Side Dishes" />
            <p/><p/><p/>

            <h2 className="category">
              <span>Desserts</span>
            </h2>
            <PizzaCard title="Desserts" />
          </div>
          <br />
        </div>
        <div className="col-12 col-md-12 col-lg-5 col-xl-5 col-xxl-5">
          <Cart />
          <br />
        </div>
          {/* If FinalPrice is not 0 then it will display
              Go to cart Link */}
          {FinalPrice != 0 && (
          <Link to="/cart" className="fixedbutton">
            GO TO CART
          </Link>
          )}
      </div>
    </div>
  );
  }catch(err){
    return <ErrorHandler  />
  }
};
export default Content;
