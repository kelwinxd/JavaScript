async function getData() {

  try {
    const Data = await fetch('./data.json')
    const jsonData = await Data.json()
    console.log(jsonData)

    document.body.innerText = jsonData.name
    document.body.style.color = 'red'
  }
  catch (err) {
    console.log('Erro causado: \n' + err)
  }

}
//await is the same than THEN, but
getData()