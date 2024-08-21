const Model = document.querySelector('.model');
const modelButtons = document.querySelectorAll('.model-btn');
const pedraButtons = document.querySelectorAll('.pedra-btn');
const path = './imgs/';
const names = ['ringreta', 'ringchanf', 'tradring'];  // Modelos disponíveis
const End = document.querySelector('.toend');
const Range = document.getElementById('size');

let currentModel = names[0];  // Modelo inicial é "ringreta"
let Pedra = false;
let isThin = false;  // Flag para verificar se o modelo é a versão fina

// Função para atualizar o modelo
function updateModel() {
    let modelPath = `${path}${currentModel}`;
    
    // Adiciona "fina" se o range for 0
    if (isThin) {
        modelPath += 'fina';
    }

    // Adiciona "compedra" se a opção de pedra estiver ativa
    if (Pedra) {
        modelPath += 'compedra.glb';
    } else {
        modelPath += '.glb';
    }

    Model.src = modelPath;
    Update(Model.src);
}

// Função para definir o botão ativo
function setActiveButton(buttons, activeButton) {
    buttons.forEach(button => {
        button.classList.remove('active');  // Remove a classe 'active' de todos os botões
    });
    activeButton.classList.add('active');  // Adiciona a classe 'active' ao botão clicado
}

// Adiciona evento aos botões de modelo
modelButtons.forEach(button => {
    button.addEventListener('click', () => {
        currentModel = button.getAttribute('data-model');
        setActiveButton(modelButtons, button);  // Define o botão ativo
        updateModel();
    });
});

// Adiciona evento aos botões de pedra
pedraButtons.forEach(button => {
    button.addEventListener('click', () => {
        Pedra = button.getAttribute('data-pedra') === 'sim';
        setActiveButton(pedraButtons, button);  // Define o botão ativo para pedra
        updateModel();
    });
});

// Função para atualizar o link do botão de fabricação
function Update(some) {
    if (some == path + 'ringreta.glb') {
        End.href = 'google.com';
    }
    else if (some == path + 'ringretacompedra.glb') {
        End.href = 'amazon.com';
    }
    else if (some == path + 'ringchanf.glb') {
        End.href = 'chanfrada';
    }
    else if (some == path + 'ringchanfcompedra.glb') {
        End.href = 'chanfrada com pedra';
    }
    else if (some == path + 'tradring.glb') {
        End.href = 'tradicional';
    }
    else if (some == path + 'tradringcompedra.glb') {
        End.href = 'tradicional com pedra';
    }
}

// Função para alternar entre as abas de Modelo, Pedra e Tamanho
const Btns = document.querySelectorAll('.btns button');
const Cards = document.querySelectorAll('.card');

function activeBtn(e) {
    document.querySelector('.active').classList.remove('active');
    e.target.classList.add('active');

    Cards.forEach((card) => {
        card.classList.add('hide');

        if (card.dataset.name == e.target.dataset.name) {
            card.classList.remove('hide');
        }
    });
}

Btns.forEach((btn) => {
    btn.addEventListener('click', activeBtn);
});

// Adiciona evento ao controle de tamanho (range)
Range.addEventListener('input', () => {
    isThin = Range.value === '0';  // Verifica se o valor do range é 0
    updateModel();
});


document.querySelector('.reset').addEventListener('click',() => {
    document.location.reload()
})

const shareBtn = document.querySelector('.share')
shareBtn.addEventListener('click', () => {
    document.querySelector('.share-options').classList.toggle('active')
    console.log('lclils')
})