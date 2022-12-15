import { ADD_CART, CLEAR_CART,DECREASE_QUANTITY } from "./cart_types"

//addcart action
const addcart = (num,id,name,desc,price,img)=>{
    return{
        type:ADD_CART,
        payload:{num:Number(num), id: Number(id), name: name ,desc:desc,price:Number(price),img:img}
    }
}
//clearcart action
const clearcart = ()=>{
    return{
        type:CLEAR_CART
    }
}
//decreasequantity action
const decreasequantity = (id)=>{
    return{
        type:DECREASE_QUANTITY,
        payload:{id:Number(id)}
    }
}

export {addcart,clearcart,decreasequantity}