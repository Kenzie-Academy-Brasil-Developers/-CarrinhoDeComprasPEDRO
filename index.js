let listaDeProdutos = [{
    nome: "Filé de peito de frango 1kg",
    preco: 21.99
},
{
    nome: "Bandeja de ovos com 30 unidades",
    preco: 16.99
},
{
    nome: "Whey protein carnibol 1,8kg",
    preco: 389.90
},
{
    nome: "Creatina 300g",
    preco: 189.90
},
{
    nome: "palatinose growth 1kg",
    preco: 110.00
}
]


function soma(arr) {

    let soma = 0

    for (let i = 0; i < arr.length; i++) {
        soma += arr[i].preco

    }
    return soma
}
soma(listaDeProdutos)


let body = document.querySelector("body")

let main = document.createElement("main")
body.appendChild(main)

let productList = document.createElement("ul")
main.appendChild(productList)


for (let i = 0; i < listaDeProdutos.length; i++) {
    let productsDetails = document.createElement("li")
    let name = document.createElement("p")
    let price = document.createElement("p")

    name.innerHTML = listaDeProdutos[i].nome
    price.innerHTML = listaDeProdutos[i].preco
    productsDetails.append(name, price)

    productList.appendChild(productsDetails)
}

let section = document.createElement("section")
main.appendChild(section)

let total = document.createElement("p")
let somaTotal = document.createElement("p")
let button = document.createElement("button")

total.innerHTML = "Total"
somaTotal.innerHTML = soma(listaDeProdutos)
button.innerHTML = "Finalizar"

section.append(total, somaTotal, button)


console.log(body)






