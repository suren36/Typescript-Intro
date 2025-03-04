const User = {
    name:"suren",
    age:25,
    email:"suren@gmail.com",
    inActive : true
}
 
function createUser(user:{name:string,isPaid:boolean}){


}
let newUser ={name:"suren","isPaid":true}
createUser(newUser) 


function createCourse():{name:String,price:number}
{

    return {name: "English ", price : 399}
}

// ------------------
type User = {
    name : string;
    email:string;
    isActive : boolean;
}

function createForm (form:User){
    console.log( form.name, form.email, form.isActive);

}
createForm({name:"", email:"", isActive:true});

function createData(user:User):User
{
    return {name:"", email:"", isActive:true}
}
// -----------------------------------------------------------------------------
type u = {
    readonly _id :number;
    name:string;
    email:string;
    isActive:boolean;
    creditCard?:number
}
let myU:u ={
    _id:1,
    name:"suren",
    email:"suren@gmail.com",
    isActive:true,
}
myU.name = "ram";


//  -------------------------------------------------------------------


type cardNumber = {
    cardNumber :number;
}
type cardDate ={
    cardDate : string;
}
type cardCvv ={
    cardCvv : number;
}
type cardDetails = cardNumber & cardDate & cardCvv;
const myCard: cardDetails = {
    cardNumber: 1234567890123456,
    cardDate: "12/26",
    cardCvv: 123
};

console.log(myCard);
export {}