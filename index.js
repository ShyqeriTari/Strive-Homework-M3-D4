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
        <div class="card-body">
          <h5 class="card-title">Card title</h5>
          <a href="#" class="btn btn-primary">Add to chart</a>
          <a href="#" class="btn btn-primary">Skip</a>
        </div>
      </div>`

      row.appendChild(card)
 
 })


 


})


