// import axios from 'axios';

let total_element = document.getElementById('Total');

function Add () {
  let total_value = parseInt(total_element.innerHTML);
  total_element.innerHTML = total_value + 1;
  changeLandscape(total_value);
}


function Subtract () {
  let total_value = parseInt(total_element.innerHTML);
  if (total_value == 0) return; 
  total_element.innerHTML = total_value - 1;
  changeLandscape(total_value);
}

function changeLandscape (temp) {
  if (temp <= 59) {
    document.getElementById('landscape').innerHTML = '🌲🌲⛄️🌲⛄️🍂🌲🍁🌲🌲⛄️🍂🌲';
  } else if (temp <= 69) {
    document.getElementById('landscape').innerHTML = '🌾🌾_🍃_🪨__🛤_🌾🌾🌾_🍃';
  } else if (temp <= 79) {
    document.getElementById('landscape').innerHTML = '🌸🌿🌼__🌷🌻🌿_☘️🌱_🌻🌷';
  } else if (temp>= 80) {
    document.getElementById('landscape').innerHTML = '🌵__🐍_🦂_🌵🌵__🐍_🏜_🦂';
  }
}

function changeCityName () {
  // let cityInput = document.getElementById('city').value;
  document.getElementById('displaycity').innerHTML = document.getElementById('city').value;
}

document.getElementById('city').addEventListener('input', changeCityName);

document.getElementById('Add').addEventListener('click', Add);

document.getElementById('Subtract').addEventListener('click', Subtract);

// window.addEventListener("load", loadpage);
// function cargaPagina() {
//     var btn = document.getElementById("button1").addEventListener("click", changevalues);
// }

// function changevalues() {
//     var inputName = document.getElementById("name");
//     inputName.value = "Search City";
// }

// var x = document.getElementById("myText");



// const axios = require('axios');
// axios
//   .get("https://us1.locationiq.com/v1/location")

