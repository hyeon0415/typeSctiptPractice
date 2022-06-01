// //overloads
// // 리턴 타입이 다른 여러 버전의 함수를 만드는 것 
// type Add = {
//     (a:number, b:number) : number
//     (a:number, b:string) : number
// }
// const add: Add = (a, b) => {
//     if(typeof b === "string") return a
//     return a + b 
// }  


// type Config = {
//     path: string,
//     state: object
// }

// type Push = {
//     (path:string):void
//     (config: Config):void
// }

// const push:Push = (config) => {
//     if(typeof config === "string") { console.log(config) }
//     else {
//         console.log(config.path, config.state)
//     }
// }

// //signature 갯수 다를때
// type Add3 = {
//     (a:number, b:number): number
//     (a:number, b:number, c:number): number,
// }

// const add3:Add3 = (a, b, c?:number) => {
//     if(c) return a + b + c 
//     return a + b
// }


// //polymorphism 다형성 

// // type SuperPrint = <T, M>(a: T[], b:M) => T
// //type SuperPrint = <T>(a: T[]) => T

// //const  superPrint: SuperPrint = (arr) => arr[0]
// function superPrint<T>(a: T[]) {
//     return a[0]
// }

// //const  superPrint: SuperPrint = (arr) => arr[0]

// const a2 = superPrint([1, 2, 3, 4])
// const b = superPrint([true, false, true])
// const c = superPrint(["a", "b", "c"])
// const d = superPrint([1, 2, true, false])

// // generic 예시 
// type Player2<E> = {
//     name:string
//     extraInfo:E
// }

// type NicoExtra = {
//     favFood:string
// }

// type NicoPlayer = Player2<NicoExtra>

// const nico2: Player2<{favoriteFood:string}> = {
//     name:"nico",
//     extraInfo: {
//         favoriteFood:"kimchi"
//     }
// }

// const lynn:Player2<null> = {
//     name:"lynn",
//     extraInfo:null
// }


// type A = Array<number>

// let a3:A = [1, 2, 3, 4, 5]