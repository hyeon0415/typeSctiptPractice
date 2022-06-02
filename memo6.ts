interface SStorage<T>  {
    [key:string]: T
}

class Localstorage<T> {
    private storage: SStorage <T>= {}
    set(key:string, value:T) {
        this.storage[key] = value;
    }
        remove(key:string){
            delete this.storage[key]
        }
        get(key:string):T{
            return this.storage[key]
        }
        clear(){
            this.storage = {}
        }
}

const stringStorage = new Localstorage<string>()

stringStorage.get("key")
stringStorage.set("hello", "how are you")

const booleansStorage = new Localstorage<boolean>()

booleansStorage.get("xxx")
booleansStorage.set("hello", true)