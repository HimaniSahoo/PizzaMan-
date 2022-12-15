import { ADD_CART,  CLEAR_CART,DECREASE_QUANTITY } from "./cart_types"

//initial state of the cart
const cartInitialState = {
    itemMap: {},
    Carts: []
}

//reducer of the cart
const cartReducer = (state=cartInitialState,action)=>{
    //takes the type and payload of action
    const {  payload } = action 
    //takes the copy of Carts array
    let updatedCart = [...state.Carts]
    //takes the copy of itemMap array
    const updatedMap = { ...state.itemMap }

    switch(action.type){
        case ADD_CART:
            /* If the selected item is already in the cart
               this condition helps in updating the quantity
               of that particular item  */
               
            if (payload.id in state.itemMap) {
                updatedCart[state.itemMap[payload.id]].quantity += 1
            
            /* otherwise this condition helps in pushing
               the selected item in the cart */
            } else {
                updatedMap[payload.id] = updatedCart.length
                
                updatedCart.push({
                    num:[payload.num],
                    id: [payload.id],
                    quantity:1,
                    name:[payload.name],
                    desc:[payload.desc],
                    price:[payload.price],
                    img:[payload.img]
                })
                
            }
            return {
                ...state,
                Carts: updatedCart,
                itemMap: updatedMap,
            } 

        /* This case helps in clearing all the cart items
           by returning the empty cart */
        case CLEAR_CART:return cartInitialState

        case DECREASE_QUANTITY:

            /* This statement decreases the quantity of the selected item */
            updatedCart[state.itemMap[action.payload.id]].quantity -= 1
            
            /* This conditions checks whether that selected item
               quantity is zero or not */
            if (updatedCart[state.itemMap[action.payload.id]].quantity == 0) {
                 
                 /* This statement filters the selected item's id from the array */
                 updatedCart = updatedCart.filter(item => item.id != action.payload.id)

                 /* index variable holds the selected item's id position */
                 const index = updatedMap[action.payload.id]
                 /* This statement deletes the position from the actual array */
                 delete updatedMap[action.payload.id]
                 /* This loop helps in deleting the position of selected item
                    permanently from cart */
                for (let i = index; i < updatedCart.length; i++) {
                    updatedMap[updatedCart[i].id] -= 1
                }
            }
          
            return {
                ...state,
                Carts: updatedCart,
                itemMap: updatedMap
            }
        default: return state
    }
}
export {cartReducer}