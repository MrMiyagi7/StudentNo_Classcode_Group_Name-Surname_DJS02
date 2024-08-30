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
    const criticalErr = "Something critical went wrong. Please reload the page";

    // logical operators to throw errors based on error type
    if (isNaN(dividend) || isNaN(divider)) throw criticalErr;
    if (dividend === "" || divider === "") throw noDataErr;
    if (dividend == 0 || divider == 0) throw invalidNumberErr;

    result.innerText = Math.floor(dividend / divider);
  } catch (err) {
    // logic that simulates an app crash due to critical error
    if (err === "Division not performed. Invalid number provided. Try again") {
      console.error(err);
      console.trace();

      result.innerHTML = `<h1 class="error-message">${err}</h1>`;
    } else if (
      err === "Something critical went wrong. Please reload the page"
    ) {
      document.body.innerHTML = `<div class="critical-error">
      <img id="critical-error" src="./assets/critical-error.gif">
      <h2>${err}</h2>
      <div>
      `;
      console.error(err);
      console.trace();
    } else {
      result.innerHTML = `<h1 class="error-message">${err}</h1>`;
    }
  }
});
