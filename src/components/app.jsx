import Content from "./content";
import Footer from "./footer";
import Top from "./header";
import "../css/styles.css";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import CartTotal from "./cartTotal";
import { useState } from "react";
import Thankyou from "./thankyou";
import Admin from "./admin";


let App = () => {
  //this useState is used to hide and unhide the footer
  const [showNav, setShowNav] = useState(true);
  return (
    //Routers are used for routing to the cart, thankyou and admin page
    <BrowserRouter>
      <div>
      
        {/* This is the header component */}
        <Top />
        <Routes>
          {/* This is the content component */}
          <Route path="/" element={<Content funcNav={setShowNav} />} />

          {/* This is the admin component */}
          <Route path="/admin" element={<Admin funcNav={setShowNav} />} />

          {/* This component shows the cart item and calculation */}
          <Route path="/cart" element={<CartTotal funcNav={setShowNav} />} />

          {/* This component shows the thankyou page */}
          <Route path="/thankyou" element={<Thankyou funcNav={setShowNav} />} />
        </Routes>
        {/* here showNav is holding the value i.e true or false 
            for hiding and unhiding the footer*/}
        {showNav && <Footer />}
      </div>
    </BrowserRouter>
  );
};
export default App;
