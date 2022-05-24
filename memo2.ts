//overloads
// 리턴 타입이 다른 여러 버전의 함수를 만드는 것 
type Add = {
    (a:number, b:number) : number
    (a:number, b:string) : number
}
const add: Add = (a, b) => {
    if(typeof b === "string") return a
    return a + b 
}  


type Config = {
    path: string,
    state: object
}

type Push = {
    (path:string):void
    (config: Config):void
}

const push:Push = (config) => {
    if(typeof config === "string") { console.log(config) }
    else {
        console.log(config.path, config.state)
    }
}

//signature 갯수 다를때
type Add3 = {
    (a:number, b:number): number
    (a:number, b:number, c:number): number,
}

const add3:Add3 = (a, b, c?:number) => {
    if(c) return a + b + c 
    return a + b
}