function addTwo(num : number) : number{
    return num + 2;
}
addTwo(5);


let  detail = (name : string , email : string , isProvided : false = false) =>{




}
detail( "ram" , "asd@gmail.com")


const heros = ["thor", "spiderman", "ironman"];

heros.map( ( h ) : string =>{
    return `I am ${h}`
})


function consoleError(errmsg : string) :void {
    console.error(errmsg);
}

function handleError (errmsg : string): never
{
    throw new Error(errmsg)
}export {}