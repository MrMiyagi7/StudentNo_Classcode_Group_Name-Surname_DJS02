const form = document.querySelector("[data-form]");
const result = document.querySelector("[data-result]");

form.addEventListener("submit", (event) => {
  try {
    event.preventDefault();
    const entries = new FormData(event.target);
    const { dividend, divider } = Object.fromEntries(entries);
    const noDataErr =
      "Division not performed. Both values are required in inputs. Try again";
    console.log(dividend);
    console.log(divider);
    if (dividend === "" || divider === "") throw noDataErr;
    result.innerText = Math.floor(dividend / divider);
  } catch (err) {
    result.innerHTML = err;
  }
});
