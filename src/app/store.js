import {
configureStore
} from "@reduxjs/toolkit";


import menuReducer 
from "../features/menu/menuSlice";


import cartReducer
from "../features/cart/cartSlice";


import transactionReducer
from "../features/transaction/transactionSlice";



const loadState=()=>{

const data =
localStorage.getItem("kantin");


return data?
JSON.parse(data):
undefined;

}



export const store =
configureStore({

reducer:{

menu:menuReducer,

cart:cartReducer,

transaction:transactionReducer

},


preloadedState:loadState()


});



store.subscribe(()=>{

localStorage.setItem(
"kantin",
JSON.stringify(
store.getState()
)
)

})