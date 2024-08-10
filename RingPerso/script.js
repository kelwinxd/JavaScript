const Model = document.querySelector('.model');
const modelButtons = document.querySelectorAll('.model-btn');
const pedraButtons = document.querySelectorAll('.pedra-btn');
const path = './imgs/';
const names = ['ringreta','ringchanf'];
const End = document.querySelector('.toend');

let currentModel = names[0];
let Pedra = false;

// Função para atualizar o modelo
function updateModel() {
    let modelPath = `${path}${currentModel}`;
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
        setActiveButton(modelButtons, button); // Define o botão ativo
        updateModel();
    });
});

// Adiciona evento aos botões de pedra
pedraButtons.forEach(button => {
    button.addEventListener('click', () => {
        Pedra = button.getAttribute('data-pedra') === 'sim';
        setActiveButton(pedraButtons, button); // Define o botão ativo para pedra
        updateModel();
    });
});

function Update(some){
    if (some == path + 'ringreta.glb'){
        End.href = 'google.com';
    }
    else if (some == path + 'ringretacompedra.glb'){
        End.href = 'amazon.com';
    }
    else if (some == path + 'ringchanf.glb'){
        End.href = 'chanfrada';
    }
    else if (some == path + 'ringchanfcompedra.glb'){
        End.href = 'chanfrada com pedra';
    }
}
