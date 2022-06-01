interface User {
    firstName:string,
    lastName:string 
     sayHi(name:string):string
     fullName():string 
}
interface Humane {
    health:number
}
class Player implements User, Humane {
    constructor(
        public firstName:string,
        public lastName:string,
        public health:number
    ){}
    fullName(){
        return `${this.firstName} ${this.lastName}`
    }
    sayHi(name:string){
        return `Hello ${name}. My name is ${this.fullName()}`
    }
}

//interface를 argument로 
function makeUser(user: User):User{
    return {
    firstName:"nico",
    lastName:"las",
    fullName: () => "xx",
    sayHi: (name) => "string" 
}
}

makeUser({
    firstName:"nico",
    lastName:"las",
    fullName: () => "xx",
    sayHi: (name) => "string" 
})




type PlayerA = {
    name:string 
}
type PlayerAA = PlayerA & {
    lastName:string 
}
const playerA: PlayerAA = {
    name:"nico",
    lastName:"xxx"
}
////
interface PlayerB {
    name:string 
}
interface PlayerBB extends PlayerB {
    lastName:string 
}
const playerB:PlayerBB = {
    name:"nico",
    lastName:"xxx"
}


// type PlayerA = {
//     firstName:string 
// }

// interface PlayerB {
//     firstName:string 
// }

// class User implements PlayerA {
//     constructor(
//         public firstName:string 
//     ){}
// }