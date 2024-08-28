const form = document.querySelector("[data-form]");
const result = document.querySelector("[data-result]");

form.addEventListener("submit", (event) => {
  try {
    event.preventDefault();
    const entries = new FormData(event.target);
    const { dividend, divider } = Object.fromEntries(entries);
    const noDataErr =
      "Division not performed. Both values are required in inputs. Try again";
    const invalidNumberErr =
      "Division not performed. Invalid number provided. Try again";

    if (dividend === "" || divider === "") throw noDataErr;
    if (dividend == 0 || divider == 0) throw invalidNumberErr;
    result.innerText = Math.floor(dividend / divider);
  } catch (err) {
    result.innerHTML = err;
    if (err === "Division not performed. Invalid number provided. Try again") {
      console.error(err);
      console.trace();
    }
  }
});
