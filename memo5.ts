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