import {
createSlice
} from "@reduxjs/toolkit";


const initialState={

items:[

{
id:1,
nama:"Nasi Goreng",
harga:10000,
kategori:"Makanan"
},

{
id:2,
nama:"Ayam Geprek",
harga:12000,
kategori:"Makanan"
},

{
id:3,
nama:"Es Teh",
harga:3000,
kategori:"Minuman"
}

]

}



const menuSlice=createSlice({

name:"menu",

initialState,


reducers:{


addMenu:(state,action)=>{

state.items.push(action.payload)

},


deleteMenu:(state,action)=>{

state.items =
state.items.filter(
item=>item.id!==action.payload
)

}


}


})


export const {
addMenu,
deleteMenu

}=menuSlice.actions;


export default menuSlice.reducer;