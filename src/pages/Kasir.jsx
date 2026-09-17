import {
useSelector
} from "react-redux";


import MenuCard from "../components/MenuCard";

import Cart from "../components/Cart";



export default function Kasir(){


const menu =
useSelector(
state=>state.menu.items
);



return(

<div

className="
grid
grid-cols-1
lg:grid-cols-3
gap-5
p-5
"

>


<div
className="
lg:col-span-2
grid
grid-cols-1
md:grid-cols-2
gap-4
"
>


{

menu.map(item=>(

<MenuCard

key={item.id}

item={item}

/>

))

}


</div>



<Cart/>


</div>


)

}