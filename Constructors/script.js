
//Constructors
function CPU(type, price){
    const taxes = 1.5;
    const Total = price * taxes;
    this.type = type;
    this.price = Total
}


const CPU2 = new CPU('Amd', 3000)

document.body.innerHTML = `<h2>${CPU2.type}</h2>
<p> Price: ${CPU2.price} </p>
`