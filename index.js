let  titles = []

  fetch("https://striveschool-api.herokuapp.com/books")
.then(Response => Response.json())
.then(data => {
  
    let container = document.querySelectorAll(".container")
    let input = document.createElement("div")
    input.innerHTML = `<center><input type="text" placeholder="Search by title" style="margin-bottom: 15px;" onchange="searchFilter(event)"></center>`
container[1].before(input)
data.forEach(name => {
    titles.push(name)
})
  }).catch((err) => console.error(err.message))




  function searchFilter(event) {
    //  titles.filter(word = word.includes(event.target.value))
    let cards = document.querySelectorAll(".col")
    // let titles = document.querySelectorAll("h5")
    // for (let i = 0; 0 < cards.length; i++){
    //     let titlesText = titles[i].innerHTML
    //     if (titlesText != event.target.value){
    //         cards[i].style.display = "none"
    //     }
    // }
     console.log( )
  }


  function displayCart() {
    let cards = document.querySelectorAll(".colCart")
    let span = document.querySelector("span")
    if (cards.length === 1){span.innerText = cards.length + " book in the cart"}else{
    span.innerText = cards.length + " books in the cart"
    }
}

  function cartRemove() {

    let buttons = document.querySelectorAll(".remove")
    let cards = document.querySelectorAll(".colCart")
    for (let i = 0; i < cards.length; i++ ) {
      buttons[i].addEventListener("click", function() {
        cards[i].remove()
        displayCart()
      })
    }
  }

function addToCart(){
    let buttons = document.querySelectorAll("button:nth-of-type(1)")
    let cards = document.querySelectorAll(".card")
    let cols = document.querySelectorAll(".col")
    let row2 = document.querySelector(".row2")
            
    for (let i = 0; i < cards.length; i++ ) {
        buttons[i].addEventListener("click", function() {
          cards[i].style.border = "5px solid  crimson"
          let cartCard = document.createElement("div")
          cartCard.classList.add("col")
          cartCard.classList.add("colCart")
          cartCard.innerHTML =  `<div class="card " style="width:14rem; margin-bottom: 10px;">
          <img style = "height:320px; object-fit: cover;"src="${titles[i].img}" class="card-img-top" alt="${titles[i].asin}">
          <div class="card-body" >
            <h5 class="card-title">${titles[i].title}</h5>
            <button class="btn btn-primary remove">Remove</button>
          </div>
        </div>` 
        row2.classList.add("row")
          row2.appendChild(cartCard)
          cartRemove()
          displayCart()
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
          <button class="btn btn-primary">To cart</button>
          <button class="btn btn-primary">Skip</button>
        </div>
      </div>`

      row.appendChild(card)

      
      hideCard()
  })
  addToCart()
}).catch((err) => console.error(err.message))










window.onload = () => {
    
}




