import {
createSlice
} from "@reduxjs/toolkit";


const cartSlice=createSlice({

name:"cart",


initialState:{

items:[]

},


reducers:{


addCart:(state,action)=>{


const item =
state.items.find(
x=>x.id===action.payload.id
)


if(item){

item.qty++

}

else{

state.items.push({

...action.payload,

qty:1

})

}


},



removeCart:(state,action)=>{


state.items =
state.items.filter(
x=>x.id!==action.payload
)


},



clearCart:(state)=>{

state.items=[]

}


}


})


export const {

addCart,

removeCart,

clearCart

}=cartSlice.actions;



export default cartSlice.reducer;