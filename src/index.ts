import crypto from "crypto";

interface BlockShap {
    hash:string;
    prevHash:string;
    height:number;
    data:string;
}

class Block implements BlockShap{
    public hash: string;
    constructor(
        public prevHash:string,
        public height:number,
        public data: string 
    ){
        this.hash = Block.calculateHash(prevHash, height, data);
    }
    static calculateHash(prevHash:string, height:number, data:string){
        const toHash = `${prevHash}${height}${data}`
    }
}

