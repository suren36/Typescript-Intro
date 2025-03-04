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
 

export {}