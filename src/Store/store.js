import { configureStore } from "@reduxjs/toolkit";
import cartReduce from './cartSlice'
import productReduce from './productSlice'
const store = configureStore({
  reducer:{
    cart: cartReduce,
    product: productReduce,    
  }

})
export default store;