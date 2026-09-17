import {
useState
} from "react";


import {
useDispatch
} from "react-redux";


import {
addMenu
} from "../features/menu/menuSlice";



export default function AddMenu(){


const dispatch=useDispatch();


const [nama,setNama]=useState("");

const [harga,setHarga]=useState("");



function submit(e){

e.preventDefault();



dispatch(
addMenu({

id:Date.now(),

nama,

harga:Number(harga),

kategori:"Makanan"

})

);



setNama("");

setHarga("");

}



return(

<form

onSubmit={submit}

className="
bg-white
p-5
rounded-xl
shadow
"

>


<h2 className="
font-bold
mb-3
">

Tambah Menu

</h2>


<input

className="
border
p-2
w-full
mb-2
"

placeholder="Nama makanan"

value={nama}

onChange={
e=>setNama(e.target.value)
}

/>


<input

className="
border
p-2
w-full
"

placeholder="Harga"

value={harga}

onChange={
e=>setHarga(e.target.value)
}

/>



<button

className="
bg-green-600
text-white
px-4
py-2
rounded
mt-3
"

>

Tambah

</button>


</form>

)

}