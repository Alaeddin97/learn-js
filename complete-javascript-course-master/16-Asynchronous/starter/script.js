'use strict';

const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');

///////////////////////////////////////
//Old way for working with api
// Problem: Callback hell

function renderCountry(data,className) {
  const html = `
<article class="country ${className}">
<img class="country__img" src=${data.flags.png} />
<div class="country__data">
  <h3 class="country__name">${data.name.common}</h3>
  <h4 class="country__region">${data.region}</h4>
  <p class="country__row"><span>👫</span>${(data.population / 1000000).toFixed(
    1
  )} people</p>
  <p class="country__row"><span>Capital: </span>${data.capital[0]}</p>
  <p class="country__row"><span>Continent: </span>${data.continents[0]}</p>
</div>
</article>
`;
  countriesContainer.insertAdjacentHTML('beforeend', html);
  countriesContainer.style.opacity = 1;
}
/*
function getCountryAndNeighbour(country) {
  const request1 = new XMLHttpRequest();
  request1.open('GET', 'https://restcountries.com/v3.1/name/' + country);
  request1.send();
  request1.addEventListener('load', function () {
    // console.log(this.responseText);
    const [data1] = JSON.parse(this.responseText);
    console.log(data1);
    renderCountry(data1,'');

    // Neighbour
    const neighbouCountryCode = data1.borders?.[0];
    const request2 = new XMLHttpRequest();
    request2.open(
      'GET',
      'https://restcountries.com/v3.1/alpha/' + neighbouCountryCode
    );
    request2.send();
    request2.addEventListener('load', function () {
      // console.log(this.responseText);
      const [data2] = JSON.parse(this.responseText);
      console.log(data2);
      renderCountry(data2,'neighbour');
    });
  });
}
getCountryAndNeighbour('usa');

*/
//Modern way for working with api in js

const getCountryData=function(country){
  const request=fetch(`https://restcountries.com/v3.1/name/${country}`)
  .then(
    function(response){
      //console.log(response);
     return response.json();
    }
  ).then(function([data]){
    console.log(data);
    renderCountry(data);
  })
}

getCountryData('tunisia');