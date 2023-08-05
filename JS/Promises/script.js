const promise = new Promise((resolve, reject) => {
    let condition = false
    if(condition){
        //You can return anything
        resolve({nome:'kelwin',idade: 25})
    }else {
        reject(Error('Um erro ocorreu'))
    }
})

//Then only executes if the promise was resolved
promise.then(res => {console.log(res)
return 'teste';
}).then(res => {
    //teste
    return res + ' 2';
}).then(res => {
    console.log(res)//return teste 2
}).catch(rej => console.log(rej))//catches the error defined in rejected promise
.finally(() => {
    console.log('Its done')
}) // finally executes regardless the promise was resolved or not

//PROMISE.ALL
//It shows the promise's result inside a array

const login = new Promise((res) => {
    setTimeout(() => {
        res('Login succesfull')
    },1100)
})

const data = new Promise((res) => {
    setTimeout(() => {
        res('Data loaded')
    },800)
})


const loadedAll = Promise.all([login,data])

loadedAll.then((res) => {
    console.log(res)
})

//Promise.race shows the first result loaded
