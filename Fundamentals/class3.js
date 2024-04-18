class Rectangle {

    

    constructor(height){
         this.height = height
         
    }

    set height(newHeight){
        if(newHeight>0){
            this._height = newHeight
        }
        else {
            console.error("Height must be a positive number")
        }
    }

    get height(){
        return this._height
    }


}

const rect = new Rectangle(45)

console.log(rect.height)