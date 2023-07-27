//model bizim componentlerimizde kullanıcıya gösterdiğimiz veri tiplerinin veya kullanıcıdan
//alıp api ye gönderdiğimiz veri tipleirnin genel ismi
export default class User {
    constructor(id, firstName, lastName, city, age) {//constructor: oluşturucu yapıcı blok 
        this.id = id
        this.firstName = firstName
        this.lastName = lastName
        this.city = city
        this.age = age
    }
}
