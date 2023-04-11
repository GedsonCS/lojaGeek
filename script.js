let itens = [
{
    Image:"./assets/img/painting/clock.jpg",
    Name:"Quadro de Relógio",
    Price:"R$ 1,99",
    type:"produtosPaintings",
},
{
    Image:"./assets/img/painting/gamepad.jpg",
    Name:"Quadro de Gamepad",
    Price:"R$ 350,00",
    type: "produtosPaintings",
},
{
    Image:"./assets/img/painting/personagem.jpg",
    Name:"Quadro do C-3PO",
    Price:"R$ 999,99",
    type: "produtosPaintings",
},
{
    Image:"./assets/img/actions/animewoman.jpg",
    Name:"Boneco Anime Woman",
    Price:"R$ 10.000,00",
    type: "produtosActionFigures",
},
{
    Image:"./assets/img/actions/dragonballpersonagem.jpg",
    Name:"Boneco Goku na Batalha contra Freeza",
    Price:"R$ 100.000,00",
    type: "produtosActionFigures",
},
{
    Image:"./assets/img/actions/starwarspersonagem.jpg",
    Name:"Boneco Mestre Yoda",
    Price:"R$ 10.000,00",
    type: "produtosActionFigures",
},
]

let listFigures = []
let listFrames = []

function separateItens(listaItens){
    for(let i = 0; i < listaItens.length; i++){
        if(listaItens[i].type == "produtosPaintings"){
            listFrames.push(listaItens[i])
        }
        else if(listaItens[i].type == "produtosActionFigures"){
            listFigures.push(listaItens[i])
        }
    }
}
separateItens(itens)

console.log(listFigures)
console.log(listFrames)

let secaoListFigure = document.getElementsByClassName("listaActionFigures")[0]
let secaoListaFrames = document.getElementsByClassName("listaPainting")[0]

function InsereFigure(listFigures){
    
    for(let i = 0; i < listFigures.length; i++){
    
    let elementoLista = document.createElement('li')
    elementoLista.classList.add("produtosActionFigures")

    let img = document.createElement('img')
    img.classList.add("img_produtos")
    img.src = listFigures[i].Image
    elementoLista.appendChild(img)
    
    let nome = document.createElement('span')
    nome.innerText = `${listFigures[i].Name}`
    elementoLista.appendChild(nome)
    nome.classList.add ("descrição")

    let price = document.createElement('span')
    price.innerText = `${listFigures[i].Price}`
    elementoLista.appendChild(price)
    price.classList.add("descriçãov")

    secaoListFigure.appendChild(elementoLista)
    }
}
InsereFigure(listFigures)
console.log(InsereFigure)

function InserePaintings(listFrames){
    
    for(let i = 0; i < listFrames.length; i++){
    
    let elementoLista = document.createElement('li')
    elementoLista.classList.add("produtosPaintings")

    let img = document.createElement('img')
    img.classList.add("img_produtos")
    img.src = listFrames[i].Image
    elementoLista.appendChild(img)
    
    let nome = document.createElement('span')
    nome.innerText = `${listFrames[i].Name}`
    elementoLista.appendChild(nome)
    nome.classList.add ("descrição")

    let price = document.createElement('span')
    price.innerText = `${listFrames[i].Price}`
    elementoLista.appendChild(price)
    price.classList.add("descriçãov")

    secaoListaFrames.appendChild(elementoLista)
    }
}
InserePaintings(listFrames)
