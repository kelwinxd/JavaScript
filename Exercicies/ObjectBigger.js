const pessoas = [
    { nome: "João", idade: 17 },
    { nome: "Maria", idade: 19 },
    { nome: "Pedro", idade: 15 },
    { nome: "Ana", idade: 22 }
  ];

function returnBigger(list){
    return list.filter((i) =>  i.idade >= 18)
}

console.log(returnBigger(pessoas))
