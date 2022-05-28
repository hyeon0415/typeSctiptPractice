// abstract = 다른 클래스에 상속 가능한 클래스 
// abstract methid = 추상 클래스를 상속받는 모든 것들이 구현을 해야하는 메소드 
abstract class User {
    constructor(
        protected firstName:string,
        protected lastName:string,
        protected nickName:string 
    ){}
    abstract getNickName():void
    getFullName() {
        return `${this.firstName} ${this.lastName}`
    }
}

class Player3 extends User {
    getNickName() {
        console.log(this.nickName)
    }
}

const nico3 = new Player3("nico", "las", "니꼬")