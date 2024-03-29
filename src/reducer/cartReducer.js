

const cartReducer = (state, action) => {
  if (action.type === "ADD_TO_CART") {
    let { id, color, amount, product } = action.payload;
    // console.log(
    //   "🚀 ~ file: cartReducer.js ~ line 4 ~ cartReducer ~ product",
    //   product
    // );

    //Tackle the existing product
    

    let existingProduct = state.cart.find(
      (curItem) => curItem.id == id + color
    );

    if (existingProduct) {
      let updatedProduct = state.cart.map((curElem) => {
        if (curElem.id == id + color) {
          let newAmount = curElem.amount + amount;

          if (newAmount >= curElem.max) {
            newAmount = curElem.max;
          }
          return {
            ...curElem,
            amount: newAmount,
          };
        } else {
          return curElem;
        }
      });
      return {
        ...state,
        cart: updatedProduct,
      };
    } else {
      let cartProduct = {
        id: id + color,
        name: product.name,
        color,
        amount,
        image: product.image[0].url,
        price: product.price,
        max: product.stock,
      };

      return {
        ...state,
        cart: [...state.cart, cartProduct],
      };
    }
  }

  // to set the increment and decrement
  if(action.type==="SET_DECREASE"){
    let updatedData=state.cart.map((curElem) =>{
      if(curElem.id===action.payload){
        let decAmount=curElem.amount-1;
        if(decAmount<=1){
          decAmount=1;
        }
        return {
          ...curElem,
          amount:decAmount
        }
        return curElem;
      }
    })
    return {...state,cart:updatedData}
  }
  
//setIncreament

if(action.type==="SET_INCREASE"){
  let updatedData=state.cart.map((e) =>{
    if(e.id===action.payload){
      let inc=e.amount+1;
      if(inc >=6){
        inc=6;
      } 
      return {
      ...e,
      amount:inc
      }
    }else {
      return e;
    }
  })
  return {
    ...state, cart:updatedData
  }
}










if (action.type === "REMOVE_ITEM") {
    let updatedCart = state.cart.filter(
      (curItem) => curItem.id !== action.payload
    );
    return {
      ...state,
      cart: updatedCart,
    };
  }

  // to empty or to clear to cart
  if (action.type === "CLEAR_CART") {
    return {
      ...state,
      cart: [],
    };
  }

  if (action.type === "CART_TOTAL_ITEM") {
    let updatedItemVal = state.cart.reduce((initialVal, curElem) => {
      let { amount } = curElem;

      initialVal = initialVal + amount;
      return initialVal;
    }, 0);

    return {
      ...state,
      total_item: updatedItemVal,
    };
  }

  if (action.type === "CART_TOTAL_PRICE") {
    let total_price = state.cart.reduce((initialVal, curElem) => {
      let { price, amount } = curElem;

      initialVal = initialVal + price * amount;
      // 25000 + 0 = 25000
      // 10199 + 25000 = 121

      return initialVal;
    }, 0);

    return {
      ...state,
      total_price,
    };
  }

  return state;
};

export default cartReducer;

