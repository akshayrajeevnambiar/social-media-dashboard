// Use querySelectorAll directly instead of selecting elements by class name
const radioButtons = document.querySelectorAll(".toggle__wrapper input");

console.log(localStorage.getItem("colorMode"));

radioButtons.forEach((button) => {
  button.addEventListener("click", (event) => {
    // Toggle theme operation.
    document.body.classList = event.target.value;

    // Storing the theme value to

    const capitilize = (word) => word.charAt(0).toUpperCase() + word.slice(1);

    // Switching the toggle text.
    document.getElementById("toggle-text").innerText = `${capitilize(
      event.target.value
    )} Mode`;
  });
});
