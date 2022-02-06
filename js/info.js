const flags = document.getElementById("flags");
const query = new URLSearchParams(window.location.search);
const params = query.get("name");
console.log(params);

document.addEventListener("DOMContentLoaded", (e) => {
  fetchData();
});

const fetchData = async () => {
  try {
    const res = await fetch("api.json");
    const data = await res.json();
    const dataFilter = data.filter((item) => item.name === params);

    smallFlag(dataFilter);
  } catch (error) {
    console.log(error);
  }
};

const smallFlag = (data) => {
  let elements = "";
  data.forEach((item) => {
    elements += `<article class="card">
    <img src="${item.flag}" alt="${item.name} Flag" class="img" />
    <div class="card-content">
      <h3>${item.name}</h3>
      <p>
        <strong>Alpha code: </strong>
        ${item.alpha2Code}
      </p>
      <p>
        <strong>Capital: </strong>
        ${item.capital}
      </p>    
      <p>
        <strong>Region: </strong>
        ${item.region}
      </p>
      <p>
        <strong>Population range: </strong>
        ${item.population}
      </p>
      <p>
        <strong>Latitude and longitude coordinates: </strong>
        ${item.latlng}
      </p>
      <p>
        <strong>Area: </strong>
        ${item.area}
      </p>
      <p>
        <strong>Time zone: </strong>
        ${item.timezones}
      </p>
      <p>
        <strong>Neighbor countries: </strong>
        ${item.borders}
      </p>
      <p>
        <strong>Currencies: </strong>
        ${item.currencies[0].code},
        ${item.currencies[0].name},
        ${item.currencies[0].symbol}
      </p>
      <p>
        <strong>Official languages: </strong>
        ${item.languages[0].name}
        
      </p>
    </div>
  </article>`;
  });
  flags.innerHTML = elements;
};
