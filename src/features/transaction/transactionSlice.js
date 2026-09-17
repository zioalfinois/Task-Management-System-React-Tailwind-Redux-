import {
createSlice
} from "@reduxjs/toolkit";


const transactionSlice=createSlice({

name:"transaction",


initialState:{

items:[]

},


reducers:{


addTransaction:(state,action)=>{

state.items.push(action.payload)

}


}


})


export const {
addTransaction

}=transactionSlice.actions;


export default transactionSlice.reducer;