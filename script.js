const search = document.getElementById("search-btn");
const countryName = document.getElementById("countryName");
const res = document.getElementById("result");
search.addEventListener("click", () => {
  let country = countryName.value;
  fetch(`https://restcountries.com/v3.1/name/${country}?fullText=true`)
    .then((res) => res.json())
    .then((data) => {
      res.innerHTML = ` <img src="${data[0].flags.svg}" class="flag-img"> <h2>${
        data[0].name.common
      }</h2>
      <div class ="wrapper">
            <div class ="data-wrapper">
            <h4>Capital:</h4>
            <span>${data[0].capital[0]}</span>
      </div>
      <div class ="wrapper">
            <div class ="data-wrapper">
            <h4>Continent:</h4>
            <span>${data[0].continents[0]}</span>
      </div>
      <div class ="wrapper">
            <div class ="data-wrapper">
            <h4>Population:</h4>
            <span>${data[0].population.toLocaleString()}</span>
      </div>
       <div class ="wrapper">
            <div class ="data-wrapper">
            <h4>Currency:</h4>
            <span>${
              data[0].currencies[Object.keys(data[0].currencies)].name
            } -${Object.keys(data[0].currencies)[0]}</span>
      </div>
       <div class ="wrapper">
            <div class ="data-wrapper">
            <h4>Common Languages:</h4>
            <span>${Object.values(data[0].languages)
              .toString()
              .split(",")
              .join(", ")}</span>
      </div>
      </div>`;
    })
    .catch(() => {
      console.log(country.length);
      if (country.length == 0) {
        res.innerHTML = `<h3>The input field cannot be blank</h3>`;
      } else {
        res.innerHTML = `<h3>Enter valid country name</h3>`;
      }
    });
});
