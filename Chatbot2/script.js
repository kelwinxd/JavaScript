// Carregar a biblioteca da Google Generative AI SDK
const apiKey = "AIzaSyDU2rig8OVHXzwIrGiFUoP86fqQxXNMXRw"; // Substitua pela sua chave de API
const endpoint = "https://generativelanguage.googleapis.com/v1beta2/models/gemini-1.5-flash:generateText";


const storeData = `
  Você é uma atendente virtual da loja de roupas "Fashion Haven". Aqui estão algumas informações:
  **Tipos de Peças:**
  - Camisas, Calças, Vestidos, Saias, Jaquetas, Acessórios
  **Cores Disponíveis:**
  - Camisas: Branco, Azul, Preto, Verde Limão
  - Calças: Jeans, Cinza, Preto
  - Vestidos: Vermelho, Preto
  **Quantidades Disponíveis:**
  - Camisas: 50, Calças: 40, Vestidos: 30
  **Promoções Atuais:**
  - 20% de desconto em todas as camisas e calças. 
  - Compre 1, leve 2 em vestidos.
`;

async function sendMessage() {
  const userInput = document.getElementById('user-input').value;
  if (!userInput) return;

  // Adicionar a mensagem do usuário ao chat
  addUserMessage(userInput);

  // Enviar a requisição para a API da IA
  const response = await fetch(endpoint, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${apiKey}`,
    },
    body: JSON.stringify({
      prompt: storeData + userInput,
      temperature: 1,
      top_p: 0.95,
      top_k: 64,
      max_tokens: 200,
    }),
  });

  const data = await response.json();
  const aiResponse = data.choices[0].text.trim();

  // Adicionar a resposta da IA ao chat
  addAiMessage(aiResponse);

  // Limpar o campo de input
  document.getElementById('user-input').value = '';
}

function addUserMessage(message) {
  const chatBox = document.getElementById('chat-box');
  const userMessage = document.createElement('div');
  userMessage.classList.add('chat-message', 'user-message');
  userMessage.innerText = message;
  chatBox.appendChild(userMessage);
  chatBox.scrollTop = chatBox.scrollHeight; // Rolar para a última mensagem
}

function addAiMessage(message) {
  const chatBox = document.getElementById('chat-box');
  const aiMessage = document.createElement('div');
  aiMessage.classList.add('chat-message', 'ai-message');
  aiMessage.innerText = message;
  chatBox.appendChild(aiMessage);
  chatBox.scrollTop = chatBox.scrollHeight; // Rolar para a última mensagem
}
