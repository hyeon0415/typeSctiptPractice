// type Age = number;
// type Name = string;

// type Player = {
//     readonly name: string,
//     age?: number 
// }

// // function playerMaker(name:string): Player {
// //     return {
// //         name
// //     }
// // }
// const palyerMake = (name:string) : Player => ({name})

// const nico = palyerMake("nico")
// nico.age = 12 

// // readonly로 인해 수정 불가 
// //nico.name = "la"

// const names: readonly string[] = ["1","2"]
// // names.push("3");

// const player: readonly [string, number, boolean] = ["nico", 1, true]
// // player[0] = "hi"

// function hello() {
//     // return값이 없는 void 
//     console.log('x');
// }

// const a = hello();
// // void라서 안됨
// // a.toUpperCase();

// function hello2(name:string|number) {
//     if(typeof name === "string") {
//         name 
//     } else if(typeof name === "number") {
//         name
//     } else {
//         name
//     }
// }