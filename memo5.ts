// interface User {
//     firstName:string,
//     lastName:string 
//     sayHi(name:string):string 
//     fullName():string 
// }
// interface Human {
//     health:number
// }
// class Player implements User, Human {
//     constructor(
//         public firstName:string,
//         public lastName:string,
//         public health:number
//     ){}
//     fullName(): string {
//         return `${this.firstName} ${this.lastName}`
//     }
//     sayHi(name: string){
//         return `Hello ${name}. My nams is ${this.fullName}`
//     }
// }

// //interface를 argument로 
// function makeUser(user:User):User{
//     return{
//         firstName:"nico",
//         lastName:"las",
//         fullName: () => "xx",
//         sayHi: (name) => "string"
//     }
// }
// makeUser({
//     firstName:"nico",
//     lastName:"las",
//     fullName: () => "xx",
//     sayHi: (name) => "string"
// })

// type PlayerA = {
//     name:string 
// }
// type PlayerAA = PlayerA & {
//     lastName:string 
// }
// const PlayerA: PlayerAA = {
//     name:"nico",
//     lastName:"xxx"
// }

// /////

// interface PlayerB {
//     name:string 
// }
// interface PlayerBB extends PlayerB {
//     lastname:string 
// }
// const PlyerB:PlayerBB = {
//     name:"nico",
//     lastname:"xxx"
// }

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

// implements = interface의 타입 값이 없으면 에러, 반드시 포함해야 
// extends = 해당 클래스의 타입 값에 다른걸 더할 때 