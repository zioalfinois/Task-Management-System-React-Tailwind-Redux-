import {
useDispatch
} from "react-redux";


import {
addCart
} from "../features/cart/cartSlice";



export default function MenuCard({item}){


const dispatch=useDispatch();



return(

<div

className="
bg-white
rounded-xl
shadow
p-4
"

>


<h2
className="
font-bold
text-lg
"
>

{item.nama}

</h2>


<p>

Rp {item.harga.toLocaleString()}

</p>


<p
className="
text-sm
text-gray-500
"
>

{item.kategori}

</p>



<button

onClick={()=>dispatch(
addCart(item)
)}

className="
bg-green-500
text-white
px-3
py-2
rounded
mt-3
"

>

Tambah

</button>


</div>


)

}