// interfaces
interface Data  {

    name:string,
    userId:number,
    googleId?: number,
    readonly dbid : 1,
    startTrial() :string /* startTrial :()=> string */
    getCoupon(couponname : string ,value : number): number

}

interface Data {
    githubToken: string;
}

//inheritance
interface NewData extends Data {

    role : "admin" | "user " | " guest"
}


const userData : NewData ={
    name : "suren",userId:1,dbid:1 , role:"admin", githubToken : "sad", startTrial : ()=>{return("Trial Started")},getCoupon :(couponname : "asd" , value:1)=> {return(2) }}
console.log(userData.startTrial())
console.log(userData.getCoupon("asd",1))


