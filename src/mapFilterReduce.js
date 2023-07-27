let cart = [
    {id:1, productName:"Telefon", quantity:3, unitPrice:4000},
    {id:2, productName:"MacOS", quantity:1, unitPrice:32000},
    {id:3, productName:"Bardak", quantity:12, unitPrice:40},
    {id:4, productName:"Tripot", quantity:2, unitPrice:1200},
    {id:5, productName:"Klima", quantity:4, unitPrice:9800},
    {id:6, productName:"Çanta", quantity:5, unitPrice:640},
]
console.log("map_KULLANIMI###########################")
console.log("<ul>")
cart.map(product=>{
    console.log("<li>"+product.productName+ " : " + product.unitPrice * product.quantity+"</li>")})
console.log("</ul>")

console.log("filter_KULLANIMI###########################")

let quantityOver2 = cart.filter(product=>product.quantity>2)
console.log(quantityOver2)
 
console.log("reduce_KULLANIMI###########################")
let total = cart.reduce((acc,product)=>acc+ product.unitPrice * product.quantity,0)

console.log(total)
console.log("###########################")

//SPA: Reacta yapılan uygulamaya denir.
function addToCart(sepet){
    sepet.push({id:7, productName:"Kalem", quantity:4, unitPrice:40})
}
addToCart(cart)
console.log(cart)

//değer atamaya örnek
let sayi = 10
function sayiTopla(number){
    number += 1
}
sayiTopla(sayi)
console.log(sayi)
//#değer atamaya örnek