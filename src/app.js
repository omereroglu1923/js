console.log("Merhaba Kodlama.io")

let dolarBugun = 9.30
let dolarDun = 9.20

{
    let dolarDun = 9.10
}
console.log(dolarDun)

const euroDun = 11.2
//euroDun = 11

console.log(euroDun)

//array
let konutKredileri = ["Konut kredisi","Emlak Konut Kredisi","Kamu Konut Kredisi","Özel Konut Kredisi"]

console.log("<ul>")
for (let index = 0; index < konutKredileri.length; index++) {
    console.log("<li>"+konutKredileri[index]+"</li>")
}
console.log("</ul>")
