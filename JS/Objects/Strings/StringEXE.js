// Utilizando o foreach na array abaixo,
// some os valores de Taxa e os valores de Recebimento

const transacoes = [
    {
      descricao: 'Taxa do Pão',
      valor: 'R$ 39',
    },
    {
      descricao: 'Taxa do Mercado',
      valor: 'R$ 129',
    },
    {
      descricao: 'Recebimento de Cliente',
      valor: 'R$ 99',
    },
    {
      descricao: 'Taxa do Banco',
      valor: 'R$ 129',
    },
    {
      descricao: 'Recebimento de Cliente',
      valor: 'R$ 49',
    },
  ];

  let TaxaTotal = 0

  transacoes.forEach((item) => {
     //Cleaned the number
     //adding + before transform string in a number
    const cleanNumber = +item.valor.replace('R$ ','')

      //then we just touch in items that contains Taxa
    if(item.descricao.includes('Taxa')){
        // it Sums all the current numbersb4
        TaxaTotal += cleanNumber
    }
  })

  console.log(TaxaTotal)



  








  
  // Retorne uma array com a lista abaixo
  const transportes = 'Carro;Avião;Trem;Ônibus;Bicicleta';

  console.log(transportes.split(';'))
  
  // Substitua todos os span's por a's
  const html = `<ul>
                  <li><span>Sobre</span></li>
                  <li><span>Produtos</span></li>
                  <li><span>Contato</span></li>
                </ul>`;

    //console.log(html.replace(/[span]+/g, 'a'))     
    const Split = html.split('span')
    const Join = Split.join('a')
    console.log(Join)

  
  // Retorne o último caracter da frase
  const frase = 'Melhor do ano!';
  console.log(frase.slice(-1))
  
  // Retorne o total de taxas
  const transacoes2 = ['Taxa do Banco', '   TAXA DO PÃO', '  taxa do mercado', 'depósito Bancário', 'TARIFA especial'];
  let count = 0
  transacoes2.forEach((item) => {
    if(item.toLowerCase().includes('taxa')){
          count++
    }
  })
  console.log(count)
  