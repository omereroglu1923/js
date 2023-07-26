function addToCart(quantity,productName="Elma") {
    console.log("Sepete eklendi : ürün : " + productName + " adet : " + quantity)
}

addToCart()
addToCart(10)
addToCart("Karpuz")

//fonskiyonu bir değişkene atayabiliyorsun
let sayHello = ()=>{
    console.log("Hello JS")
}

sayHello()

let sayHello2 = function () {
    console.log("Hello 2JS")
}

sayHello2()

function addToCart2(productName, quantity, unitPrice){

}

addToCart2("Elma",5,10)
addToCart2("Liman",15,40)
addToCart2("Armut",25,110)

let product1 ={productName:"Elma", unitPrice:10, quantity:5}

function addToCart3(product) {
    console.log("Ürün : "+product.productName)
    console.log("Adet : "+product.quantity)
    console.log("Fiyat : "+product.unitPrice)
}

addToCart3(product1)

//objeler referans tiptir.
let product2 ={productName:"Elma", unitPrice:10, quantity:5}
let product3 ={productName:"Elma", unitPrice:10, quantity:5}
product2 = product3
product2.productName = "KARPUZ"
console.log(product3.productName)

//sayılar değer tiptir.
let sayi1 = 10
let sayi2 =20
sayi1 = sayi2
sayi2 = 100
console.log(sayi1)

function addToCart4(products) {
    console.log(products)
}

let products = [
    {productName:"Elma", unitPrice:10, quantity:5},
    {productName:"Armut", unitPrice:10, quantity:5},
    {productName:"Karpuz", unitPrice:10, quantity:5}
]

addToCart4(products)

//rest (...) operatörü
function add(bisey,...numbers){
    let total = 0;
    for(let i=0; i < numbers.length; i++){
        total = total + numbers[i]
    }
    console.log(total)
    console.log(bisey)
}

add(26,58,102,34)

let numbers = [30,56,465,652,200,65]
//console.log(...numbers)
console.log(Math.max(...numbers))

//distinct kullanımı
//apilerden gelen verileri hızlıca parçalamak için kullanılır
let [icAnadolu,marmara,karadeniz,[icAnadoluSehirleri]] = [
    {name:"İç Anadolu", population:"20M"},
    {name:"Marmara", population:"30M"},
    {name:"Karadeniz", population:"10M"},
    [
        ["Ankara","Konya"],
        ["İstanbul","Bursa"],
        ["Sinop","Trabzon"],
    ]
]

console.log(icAnadolu)
console.log(marmara)
console.log(karadeniz.name)
console.log(karadeniz.population)
console.log(icAnadoluSehirleri)

let newProductName, newUnitPrice, newQuantity 
({productName:newProductName, unitPrice:newUnitPrice, quantity:newQuantity}
= {productName:"Üzümlü Kek", unitPrice:10, quantity:5})

console.log(newProductName)
console.log(newUnitPrice)
console.log(newQuantity)
