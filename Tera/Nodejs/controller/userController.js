const userController = {}

const User01 = {
    name: 'Diego',
    age: 24
}

const User02 = {
    name: 'Maria',
    age: 26
}

const USERS = [User01, User02]

userController.addUser = (req,res) => {
    const newUser = req.body;

    // Verifica se os campos 'name' e 'age' existem
    if (!newUser.name || !newUser.age) {
        return res.status(400).json({ error: 'Campos name e age são obrigatórios' });
    }

    USERS.push(newUser);
    res.status(201).json(newUser); // Resposta com status 201 (criado)
}

userController.updateUser = (req,res) => {
    const UserId = req.params.id
    const oldUser = USERS[UserId]
    const newUser = req.body

    USERS[UserId] = {...oldUser,...newUser} //aqui ele compara os ids de ambos e o ultimo subscreve o primeiro
    
    res.send(USERS[UserId])
}

userController.showUser = (req, res) => {
    const userId = req.params.id
    const user = USERS[userId]

    if(user){
        res.json(user)
    } else {
        res.status(404).json({error:"user not found"})
    }
}

userController.showAll = (req,res) => {
    res.send(USERS)
}

userController.deleteUser = (req,res) => {
    const UserId = req.params.id
    USERS[UserId] = {}

    res.send(USERS[UserId])
}

//https://ghibliapi.herokuapp.com/films?director=${director}
/* 
Agora é hora de praticar o que você viu durante esta aula e brincar um pouco de consumir APIs.

Utilize a api Stranger Things Quotes disponível em https://github.com/shadowoff09/strangerthings-quotes para retornar frases aleatórias da série. 

Para isso, crie uma função assíncrona que consuma a API utilizando fetch. Teste seu código chamando a função e mostrando um alerta com a frase entre aspas seguida do autor. 

Exemplo: "I don’t care if anyone believes me." - Joyce Byers. 

O tempo estimado para esse exercício é de 15 minutos.

Aproveite bem o tempo do seu exercício! Reserve um lugar silencioso e busque se concentrar unicamente na atividade, sem abrir abas que não fazem parte do seu processo de resolução. 

Dica: foque no processo e não tenha medo de errar. Os erros fazem parte do processo de aprendizagem!

Vamos lá?
*/

export default userController