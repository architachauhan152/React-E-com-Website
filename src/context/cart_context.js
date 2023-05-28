import { createContext, useContext, useReducer ,useEffect } from "react";
import reducer from "../reducer/cartReducer";

const CartContext = createContext();

const getLocalCartData= () =>{
  let newCartData=localStorage.getItem('rituCart');
  if(newCartData=== []) {
    return [];
  }else {
    return JSON.parse(newCartData)
  }
}

const initialState = {
  // cart: [],
  cart:getLocalCartData(),
  total_item: "",
  total_amount: "",
  shipping_fee: 50000,
};

const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const addToCart = (id, color, amount, product) => {
    dispatch({ type: "ADD_TO_CART", payload: { id, color, amount, product } });
  };
  //increase and decrease the product
   const setDecrease =(id)=>{
    dispatch({type:"SET_DECREASE", payload:id})

   }

   const setIncrease=(id) =>{
    dispatch ({type:"SET_INCREASE", payload:id})
   }


  const removeItem = (id) => {
    dispatch({ type: "REMOVE_ITEM", payload: id });
  };

  //to clear the cart
  const clearCart=() =>{
    dispatch({ type: "CLEAR_CART"});
}

  

  // to add the data in local storage
  //get vs set

  useEffect(() =>{
    localStorage.setItem("rituCart",JSON.stringify(state.cart))
  },[state.cart])


  return (
    <CartContext.Provider value={{ ...state, addToCart, removeItem,clearCart,setDecrease,setIncrease }}>
      {children}
    </CartContext.Provider>
  );
};

const useCartContext = () => {
  return useContext(CartContext);
};

export { CartProvider, useCartContext };