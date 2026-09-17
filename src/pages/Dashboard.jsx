import {
useSelector
} from "react-redux";


export default function Dashboard(){


const transaksi =
useSelector(
state=>state.transaction.items
);



const total =
transaksi.reduce(
(a,b)=>a+b.total
,0);



return(

<div className="
p-5
">


<h1 className="
text-3xl
font-bold
mb-5
">

Dashboard Kantin

</h1>



<div className="
grid
md:grid-cols-2
gap-5
">


<div className="
bg-white
p-5
rounded-xl
shadow
">

<h2>Total Penjualan</h2>

<p className="
text-2xl
font-bold
">

Rp {total.toLocaleString()}

</p>


</div>



<div className="
bg-white
p-5
rounded-xl
shadow
">

<h2>Total Transaksi</h2>

<p className="
text-2xl
font-bold
">

{transaksi.length}

</p>


</div>


</div>


</div>

)

}