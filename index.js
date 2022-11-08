const container = document.getElementById("row");
const firstButton = document.getElementById("first-button");
const secondButton = document.getElementById("second-button");

const loadPhotos = () => {
  fetch("https://api.pexels.com/v1/search?query=dog", {
    method: "GET",

    headers: {
      Authorization: "563492ad6f9170000100000103d029e54f944cb4934d839adc4be886",
    },
  })
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      const photos = data.photos;
      console.log(photos);
      for (img of photos) {
        container.innerHTML += `<div class="col-md-4">
        <div class="card mb-4 shadow-sm">
          <img class="card-img-top" src=${img.src.tiny} width="100%"
          height="225"/>
          
          <div class="card-body">
            <p class="card-text">
              This is a wider card with supporting text below as a natural
              lead-in to additional content. This content is a little bit
              longer.
            </p>
            <div
              class="d-flex justify-content-between align-items-center"
            >
              <div class="btn-group">
                <button
                  type="button"
                  class="btn btn-sm btn-outline-secondary"
                >
                  View
                </button>
                <button
                  type="button"
                  class="btn btn-sm btn-outline-secondary"
                  onclick="hideCard(event)"
                >
                  Hide
                </button>
              </div>
              <small class="text-muted">ID: ${img.id}</small>
            </div>
          </div>
        </div>
      </div>`;
      }
    });
};
const secondPhotos = () => {
  fetch("https://api.pexels.com/v1/search?query=london", {
    method: "GET",

    headers: {
      Authorization: "563492ad6f9170000100000103d029e54f944cb4934d839adc4be886",
    },
  })
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      const photos = data.photos;
      console.log(photos);
      for (img of photos) {
        container.innerHTML += `<div class="col-md-4">
        <div class="card mb-4 shadow-sm">
          <img class="card-img-top" src=${img.src.tiny} width="100%"
          height="225"/>
          
          <div class="card-body">
            <p class="card-text">
              This is a wider card with supporting text below as a natural
              lead-in to additional content. This content is a little bit
              longer.
            </p>
            <div
              class="d-flex justify-content-between align-items-center"
            >
              <div class="btn-group">
                <button
                  type="button"
                  class="btn btn-sm btn-outline-secondary"
                >
                  View
                </button>
                <button
                  type="button"
                  id="hide"
                  class="hide btn btn-sm btn-outline-secondary"
                  onclick="hideCard(event)"
                >
                  hide
                </button>
              </div>
              <small class="text-muted">ID: ${img.id}</small>
            </div>
          </div>
        </div>
      </div>`;
      }
    });
};

firstButton.addEventListener("click", () => {
  loadPhotos();
});

secondButton.addEventListener("click", () => {
  secondPhotos();
});

// let hideCard = (event) => {
//     let card =
//       event.target.parentElement.parentElement.parentElement.parentElement
//         .parentElement;
//     card.remove()
// }

// function hideCard(event) {
//     let buttonRow = event.target.parentElement
//     let buttoncontainer = buttonRow.parentElement
//     let cardText = buttoncontainer.parentElement
//     let card = cardText.parentElement
//     card.classList.add("d-none")
//   }
//   hideCard()

const search = document.getElementById("search-button");

const seachImages = () => {
  search.addEventListener("click", () => {
    let input = document.getElementById("input").value;
    
    
    fetch(`https://api.pexels.com/v1/search?query=${input}`, {
      method: "GET",

      headers: {
        Authorization:
          "563492ad6f9170000100000103d029e54f944cb4934d839adc4be886",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        const photos = data.photos;

        for (img of photos) {
          console.log(input);

          container.innerHTML += `<div class="col-md-4">
        <div class="card mb-4 shadow-sm">
          <img class="card-img-top" src=${img.src.tiny} width="100%"
          height="225"/>
          
          <div class="card-body">
            <p class="card-text">
              This is a wider card with supporting text below as a natural
              lead-in to additional content. This content is a little bit
              longer.
            </p>
            <div
              class="d-flex justify-content-between align-items-center"
            >
              <div class="btn-group">
                <button
                  type="button"
                  class="btn btn-sm btn-outline-secondary"
                >
                  View
                </button>
                <button
                  type="button"
                  id="hide"
                  class="hide btn btn-sm btn-outline-secondary"
                  onclick="hideCard(event)"
                >
                  hide
                </button>
              </div>
              <small class="text-muted">ID: ${img.id}</small>
            </div>
          </div>
        </div>
      </div>`;
        }
        
      });
  });
  input.innerHTML=""
};
seachImages();
