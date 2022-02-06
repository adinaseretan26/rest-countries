const flags = document.getElementById("flags");

document.addEventListener("DOMContentLoaded", (e) => {
  fetchData();
});

const fetchData = async () => {
  try {
    const res = await fetch("api.json");
    const data = await res.json();
    smallFlag(data);
    searchForm(data);
    filter(data);
    // console.log(data);
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
      <br>
      <a href="countrydetails.html?name=${item.name}" style="color:rgba(63, 63, 63, 0.8); text-transform:uppercase; font-weight:bolder;">More information</a>
    </p>
    </div>
  </article>`;
  });
  flags.innerHTML = elements;
};
