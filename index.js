import { menuArray } from "./data.js"
const nameYprecioEl = document.getElementById('factura')
const btnAddProducEl = document.getElementById('btn-add-product')
const btnCompleteOrder = document.getElementById('btn-complete-order')
const contentEl = document.getElementById('content')
const formPayEl = document.getElementById('form-pay')
const facturaCompleta = document.getElementById('factura-completa')
const finalMessage = document.getElementById('final-message')
let total = 0



function showFinalMessage(name,numberCard,numberCvv){
    formPayEl.style.display = 'none'
    facturaCompleta.style.display = 'none'
console.log(name,numberCard,numberCvv)
finalMessage.style.display='flex'
finalMessage.innerText = `Thanks ${name}! your oder its on is way`

}

function getTotal(priceItem) {
    let sumEl = document.getElementById('sum')
    total += priceItem
    console.log(total)
    sumEl.innerText = `Total: ${total} $`
}

renderMenu()
formPayEl.addEventListener('submit', function (e) {
    e.preventDefault()
    const dataPay = new FormData(formPayEl)
   const name = dataPay.get('name')
   const numberCard = dataPay.get('number-card')
   const numberCvv= dataPay.get('cvv-number')

   showFinalMessage(name,numberCard,numberCvv)

})

btnCompleteOrder.addEventListener('click', function () {
    formPayEl.style.display = 'flex'
})


document.addEventListener('click', function (e) {


    if (e.target.id === 'btn-add-product') {

        getPriceItem(e.target.dataset.item)
        btnCompleteOrder.style.display = 'block'
    }

    if (e.target.id === 'btn-add-product') {
        getTotal(parseInt(e.target.dataset.price))


    }

})


function getPriceItem(idProducto) {
    let nameAndPrice = ''
    nameAndPrice += `<li>${menuArray[idProducto].name}:......................${menuArray[idProducto].price}</li>`
    nameYprecioEl.innerHTML += nameAndPrice
    finalMessage.style.display ='none'
}
function renderMenu() {
    /* <i class="fa-solid fa-minus" disabled></i> */
    let menu = ''

    menuArray.forEach(function (itemsMenu) {
        menu +=
            `
<section class="container-product">
        <div><i class="img-product">${itemsMenu.emoji}</i></div>
        <div class="info-product">
        <h2 ">${itemsMenu.name}</h2>
    <p  ">PriceUSD: ${itemsMenu.price}</p>
    <p>Ingredients: ${itemsMenu.ingredients.join('+')} </p>
 </div>
   <div >
   <button data-item="${itemsMenu.id}"  data-price="${itemsMenu.price}" id="btn-add-product" class="add-btn" >
            <i data-item="${itemsMenu.id}" data-price="${itemsMenu.price}" id="btn-add-product" class="fa-solid fa-plus" >
   </i></button>
   
   
   </div>
    
</section>
    
    
    `

    })

    contentEl.innerHTML = menu
}

function renderOrderPay() {

    let orderPay = ''

}