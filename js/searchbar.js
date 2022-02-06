const form = document.getElementById("form");
const inputForm = document.getElementById("input-form");

const searchForm = (data) => {
  form.addEventListener("keyup", (e) => {
    e.preventDefault();

    const nameForm = inputForm.value.toLowerCase();
    const capitalForm = inputForm.value.toLowerCase();
    // const codeForm = inputForm.value.toLowerCase();

    // console.log(letraCliente)

    const formFilter = data.filter((item) => {
      const capitalApi = item.capital.toLowerCase();
      const nameApi = item.name.toLowerCase();
      // const codeApi = item.code.toLowerCase();
      if (
        capitalApi.indexOf(capitalForm) !== -1 ||
        nameApi.indexOf(nameForm) !== -1 /*||
        codeApi.indexOf(codeForm) !== -1*/
      ) {
        return item;
      }
    });
    smallFlag(formFilter);
  });
};
