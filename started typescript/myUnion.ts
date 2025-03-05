let score : number | string =33;


type User ={

name : string;
id: number;

}

type Admin ={

username : string;
id: number;

}

let hitesh : User | Admin = {  name : "hitesh" ,id : 1 }
hitesh ={username : "hitesh", id: 1}

//  
getDbId(3)
getDbId("3")

function getDbId (id:number | string){

    if(typeof id === "string"){
        return id.toUpperCase();
    }
    if(typeof id === "number"){
        return id.toFixed(2);
    }
}
// /------------------------------------------/

const data : number  [] = [1,2,3,4,5,6,7,8,9,10]
const data1 : string []=["a","b","c","d","e","f","g","h","i","j"]
const data2  : (number | string ) [ ]=[1,2,3,4,5,6,7,8,9,10,"a","b","c","d","e","f","g","h","i","j"]

// ------------------------------------------
let seatAllotement : "left" |"right" |"middle"
seatAllotement = "middle"
