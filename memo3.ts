// abstract = 다른 클래스에 상속 가능한 클래스 
// abstract method = 추상 클래스를 상속받는 모든 것들이 구현을 해야하는 메소드 

// abstract class User {
//     constructor(
//         protected firstName:string,
//         protected lastName:string,
//         protected nickName:string 
//     ){}
//     abstract getNickName():void 
//     getFullName() {
//         return `${this.firstName} ${this.lastName}`
//     }
// }

// class Player3 extends User {
//     getNickName(): void {
//         console.log(this.nickName)
//     }
// }

// const nico3 = new Player3("nico", "las", "니꼬");
// nico3.getFullName();

//hashMap 
// 제한된 양의 property 
// property 에 대해 미리 알진 못하지만 타입은 알고 있을 때 
// type Words = {
//     [key:string]:string 
// }

// class Dict {
//     private words: Words 
//     constructor(){
//         this.words = {}
//     }

//     add(word:Words){
//         if(this.words[word.term] === undefined)
//         this.words[word.term] = word.def;
//     }
//     def(term:string){
//         return this.words[term];
//     }
// }

// class Word {
//     constructor(
//         public term:string,
//         public def:string 
//     ){}
// }

// const kimchi = new Word("kimchi", "한국의 음식");

// const dict = new Dict();

// dict.add(kimchi);
// dict.def("kimchi");