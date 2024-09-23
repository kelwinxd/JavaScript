var createCounter = function(init) {
    
  let value = init

  return {
    increment: function(){
        let result = value +=1
        console.log(result)
    }
  }
};

const counter = createCounter(10)
counter.increment()