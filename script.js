const products=[

{
id:1,
name:"Nike Shoes",
price:3500,
category:"Shoes",
image:"https://picsum.photos/300?1"
},

{
id:2,
name:"Headphone",
price:2500,
category:"Electronics",
image:"https://picsum.photos/300?2"
},

{
id:3,
name:"Laptop",
price:65000,
category:"Electronics",
image:"https://picsum.photos/300?3"
},

{
id:4,
name:"T-Shirt",
price:900,
category:"Fashion",
image:"https://picsum.photos/300?4"
},

{
id:5,
name:"Watch",
price:3000,
category:"Fashion",
image:"https://picsum.photos/300?5"
},

{
id:6,
name:"Sneakers",
price:4500,
category:"Shoes",
image:"https://picsum.photos/300?6"
}

];

let cart=[];

const productDiv=document.getElementById("products");

function display(data){

productDiv.innerHTML="";

data.forEach(product=>{

productDiv.innerHTML+=`

<div class="card">

<img src="${product.image}">

<h3>${product.name}</h3>

<p>₹${product.price}</p>

<button onclick="addCart(${product.id})">

Add to Cart

</button>

</div>

`;

});

}

display(products);

function addCart(id){

const product=products.find(p=>p.id==id);

cart.push(product);

updateCart();

}

function updateCart(){

document.getElementById("count").innerHTML=cart.length;

let html="";

let total=0;

cart.forEach((item,index)=>{

total+=item.price;

html+=`

<div class="item">

${item.name}

₹${item.price}

<button onclick="removeItem(${index})">

Remove

</button>

</div>

`;

});

document.getElementById("cartItems").innerHTML=html;

document.getElementById("total").innerHTML=total;

}

function removeItem(index){

cart.splice(index,1);

updateCart();

}

document.getElementById("search").addEventListener("keyup",function(){

let value=this.value.toLowerCase();

display(products.filter(item=>item.name.toLowerCase().includes(value)));

});

document.getElementById("category").addEventListener("change",function(){

if(this.value=="all"){

display(products);

}

else{

display(products.filter(item=>item.category==this.value));

}

});