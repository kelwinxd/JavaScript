
 

class Bookstore {
    constructor(book){
    
         this.book = [book]
    }

    

    listing(){
        for (let index = 0; index < this.book.length; index++) {
            const element = this.book[index];
            console.log(element)
            
        }
    }

    
    

}

class Book {
    constructor(name,price){
        this.name = name;
        this.price = price;
        this.avaib = true
    }

    

    buy(){
        if(this.avaib == false){
            console.log("its unavailable")
        }
        this.avaib = false
        console.log("you bought " + this.name)
    }



}

const Book1 = new Book("Book1",155)