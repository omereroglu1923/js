import User from "./user.js"

export default class Customer extends User{//extends User nesnesini genişletir.
    constructor(id, firstName, lastName, city,age, creditCardNumber) {
        super(id, firstName, lastName, city,age)//super=User dir. Onun constructorunu çalıştır.     
        this.creditCardNumber = creditCardNumber
    }
}