import data from "../data.json"
import { useDispatch, useSelector } from "react-redux";
import { addcart, decreasequantity } from "../redux";
import ErrorHandler from "./error";
let PizzaCard=(props)=>{
    /* itemMap is used to map the carts array */ 
    const itemMap = useSelector(state=>state.carts.itemMap)
    /* carts holds all the add to cart data */
    const carts = useSelector(state=>state.carts.Carts)
    // var data="Anmol"
    const dispatch = useDispatch()
    var ListCart =[]//for holding all the data if carts variable
    Object.keys(carts).forEach(function(item){ 
      ListCart.push(carts[item]);
    }); 
    try{
    return(
        <>
          {
            data.map((val1) => {
              /* Here val1 has the orignal data and 
                 props.title has the title coming from
                 parent */
              if (val1.name === props.title)
                return val1.items.map((val, idx) => {
                  return (
                    <div
                      className="col-12 col-md-12 col-lg-5 col-xl-4 col-xxl-4 card1"
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
                                className="pzb pzb1"
                                data-testid="decrement"
                                style={{
                                  height: "20px",
                                  width: "20px",
                                  lineHeight: "0.1em",
                                  padding: "1px",
                                  backgroundColor: "grey",
                                  fontWeight: "bold",
                                  textAlign: "center",
                                  verticalAlign: "middle",
                                }}
                                onClick={() => dispatch(decreasequantity(val.id))}
                              >
                                -
                              </button>
                              &nbsp;
                              <p data-testid="counter">
                                {/* If the selected item is in itemMap
                                    then it will show the particular
                                    item's quantity otherwise 0 */}
                                {val.id in itemMap
                                  ? ListCart[itemMap[val.id]].quantity
                                  : 0}
                              </p>
                              &nbsp;
                              <button
                                className="pzb"
                                data-testid="increment"
                                style={{
                                  height: "20px",
                                  width: "20px",
                                  lineHeight: "0.1em",
                                  padding: "1px",
                                  backgroundColor: "grey",
                                  fontWeight: "bold",
                                  textAlign: "center",
                                  verticalAlign: "middle",
                                }}
                                onClick={() =>
                                  dispatch(
                                    addcart(
                                      idx,
                                      val.id,
                                      val.name,
                                      val.desc,
                                      val.price,
                                      val.img
                                    )
                                  )
                                }
                              >
                                +
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  )
                })
            })
          }

      </>
    )
}catch(error){
  return <ErrorHandler  />
}
}
export default PizzaCard