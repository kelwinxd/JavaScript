


class User {

    static userCount = 0

    constructor(name){
        this.name = name
        User.userCount++
    }
}

const user1 = new User('Kelwin')
const user2 = new User('Gabi')
console.log(user1.name, User.userCount)