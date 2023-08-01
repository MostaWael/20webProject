const cinema = document.querySelector(".cinema");
const seats = document.querySelectorAll(".row .seat:not(.occupied)");
const total = document.getElementById("total");
const price = document.getElementById("price");
const movieSelect = document.getElementById("movie");
let tiketPirce = +movieSelect.value;

updateSelectedCount();

populateUI();

//Save selected movie index
function setMovieData(movie_index, movie_price) {
  localStorage.setItem("selectedMovieIndex", movie_index);
  localStorage.setItem("selectedMoviePrice", movie_price);
}

function updateSelectedCount() {
  const selectedSeats = document.querySelectorAll(".row .seat.selected");

  //Storing the seats in session storage
  //steps
  /* 
  Copy selected seats into arr
  Map through array
  return a new array indexes
  */

  const seatIndex = [...selectedSeats].map((seat) => [...seats].indexOf(seat));

  localStorage.setItem("selectedSeats", JSON.stringify(seatIndex));

  total.textContent = selectedSeats.length.toString();
  price.textContent = selectedSeats.length * tiketPirce;
  console.log(seatIndex);
}

//Get data from localStorage and populate UI
function populateUI() {
  const selectedSeats = JSON.parse(localStorage.getItem("selectedSeats"));

  if (selectedSeats.length > 0 && selectedSeats !== null) {
    seats.forEach((seat, index) => {
      if (selectedSeats.indexOf(index) > -1) {
        seat.classList.add("selected");
      }
    });
  } else {
    return;
  }
  const selectedMovieIndex = localStorage.getItem("selectedMovieIndex");

  if (selectedMovieIndex !== null) {
    movieSelect.selectedIndex = selectedMovieIndex;
  }
  // total.textContent = selectedSeats.length.toString();
  // price.textContent = selectedSeats.length * tiketPirce;
}

movieSelect.addEventListener("change", (e) => {
  tiketPirce = +movieSelect.value;
  setMovieData(e.target.selectedIndex, e.target.value);
  updateSelectedCount();
});

cinema.addEventListener("click", (e) => {
  //console.log(e.target);
  if (
    e.target.classList.contains("seat") &&
    !e.target.classList.contains("occupied")
  ) {
    console.log(e.target);
    //console.log(e.target.index);
    e.target.classList.toggle("selected");
    updateSelectedCount();
  }
});

updateSelectedCount();
