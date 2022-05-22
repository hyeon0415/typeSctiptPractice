type Age = number;
type Name = string;

type Player = {
    readonly name: string,
    age?: number
}

// function playerMake(name:string) : Player {
//     return {
//         name
//     }
// }
const playerMake = (name:string) : Player => ({name})


const nico = playerMake("nico")
nico.age = 12 

// readonly로 인해 수정 불가 
// nico.name = "al"


const names: readonly string[] = ["1","2"]
// names.push("2");


const player: readonly [string, number, boolean] = ["nico", 1, true]
// player[0] = "hi"