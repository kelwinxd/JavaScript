
class Animal {
    constructor(name, age){
        this.name = name
        this.age = age
    }

    runned(){
        console.log(`${this.name} runned`)
    }
}


class Armadillo extends Animal{
    constructor(name,age){
        super(name,age);
    }

    run(){
        console.log("started running")
        setTimeout(()=>{
            super.runned()
        },1000)
    }
}

const armad = new Armadillo('Armadillo','20')

armad.run()