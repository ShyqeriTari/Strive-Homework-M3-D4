fetch("https://striveschool-api.herokuapp.com/books")
.then(Response => Response.json())
.then(data => {
    console.log(data)
    let row = document.querySelector(".row")
    data.forEach(book => {

        let card = document.createElement("div")
        card.classList.add("col")
        card.innerHTML = `<div class="card " style="width:14rem; margin-bottom: 10px;">
        <img style = "height:320px; object-fit: cover;"src="${book.img}" class="card-img-top" alt="${book.asin}">
        <div class="card-body" >
          <h5 class="card-title">${book.title}</h5>
          <button class="btn btn-primary" onclick="addToCart()">To cart</button>
          <button class="btn btn-primary" onclick="hideCard()">Skip</button>
        </div>
      </div>`

      row.appendChild(card)

      
  })

})

function addToCart(){
    let buttons = document.querySelectorAll("button:nth-of-type(1)")
    let cards = document.querySelectorAll(".card")
    let cols = document.querySelectorAll(".col")
    let row2 = document.querySelector(".row2")
    for (let i = 0; i < cards.length; i++ ) {
        buttons[i].addEventListener("click", function() {
          cards[i].style.border = "5px solid  crimson"
        //   let cartCard = cols[i].cloneNode(true)
        //   row2.appendChild(cartCard)
        })
      }
}


function hideCard() {

    let buttons = document.querySelectorAll("button:nth-of-type(2)")
    let cards = document.querySelectorAll(".col")
    for (let i = 0; i < cards.length; i++ ) {
      buttons[i].addEventListener("click", function() {
        cards[i].style.display = "none"
      })
    }
  }


let  titles = []

  fetch("https://striveschool-api.herokuapp.com/books")
.then(Response => Response.json())
.then(data => {
  
    let container = document.querySelector(".container")
    let input = document.createElement("div")
    input.innerHTML = `<center><input type="text" placeholder="Search by title" style="margin-bottom: 15px;" onchange="searchFilter(event)"></center>`
container.before(input)
data.forEach(name => {
    titles.push(name.title)
})
  })

  function searchFilter(event) {
    //  titles.filter(word = word.includes(event.target.value))
     console.log( event.target.value)
  }



window.onload = () => {

}




