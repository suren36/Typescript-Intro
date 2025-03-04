"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var User = {
    name: "suren",
    age: 25,
    email: "suren@gmail.com",
    inActive: true
};
function createUser(user) {
}
var newUser = { name: "suren", "isPaid": true };
createUser(newUser);
function createCourse() {
    return { name: "English ", price: 399 };
}
function createForm(form) {
    console.log(form.name, form.email, form.isActive);
}
createForm({ name: "", email: "", isActive: true });
function createData(user) {
    return { name: "", email: "", isActive: true };
}
var myU = {
    _id: 1,
    name: "suren",
    email: "suren@gmail.com",
    isActive: true,
};
myU.name = "ram";
