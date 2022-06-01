type NickName = string 
type Health = number
type Friends = Array<string>

type Player4 = {
    nickname:string,
    healthbar: number,

}

const nico4 : Player4 = {
    nickname:"nico",
    healthbar:10
}

type Food = string;

const kimchi2:Food = "delecious";

//keyword
type Team = "read" | "blue" | "yello"
type Health2 = 1 | 5 | 10 

interface Person {
    nickname:string,
    team:Team,
    health: Health
}

type Player5 = {
    nickName:string,
    team:Team,
    health:Health
}

// const nico: Player = {
//     nickname:"nico",
//     team:"yello",
//     health: 10 
// }


// type이 좀 더 유연함, interface는 보여주려는 정보만 딱 보여줌 

// interface User {
//     name:string 
// }

// interface User {
//     lastname:string 
// }

// interface User {
//     health: number
// }

// const nico: User = {
//     name:"nici",
//     lastname="la",
//     health:10
// }