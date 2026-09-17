import {
useSelector,
useDispatch
} from "react-redux";


import {
removeCart,
clearCart
} from "../features/cart/cartSlice";


import {
addTransaction
} from "../features/transaction/transactionSlice";



export default function Cart(){


const cart =
useSelector(
state=>state.cart.items
);


const dispatch=useDispatch();



const total =
cart.reduce(

(sum,item)=>
sum+(item.harga*item.qty)

,0);



function bayar(){


dispatch(
addTransaction({

id:Date.now(),

tanggal:
new Date()
.toLocaleDateString(),

total

})
);


dispatch(clearCart());


alert("Pembayaran berhasil");

}



return(

<div

className="
bg-white
rounded-xl
shadow
p-5
"

>


<h2
className="
font-bold
text-xl
mb-3
"
>

🛒 Keranjang

</h2>



{
cart.map(item=>(


<div
key={item.id}
className="
flex
justify-between
mb-2
"
>


<p>

{item.nama}

x {item.qty}

</p>


<button

onClick={()=>dispatch(
removeCart(item.id)
)}

className="
text-red-500
"

>

X

</button>


</div>


))
}



<hr className="my-3"/>


<h3 className="font-bold">

Total:
Rp {total.toLocaleString()}

</h3>



<button

onClick={bayar}

className="
bg-blue-600
text-white
px-4
py-2
rounded
mt-4
w-full
"

>

Bayar

</button>



</div>

)

}