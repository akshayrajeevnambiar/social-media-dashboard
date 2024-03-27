// Use querySelectorAll directly instead of selecting elements by class name
const radioButtons = document.querySelectorAll(".toggle__wrapper input");

// Function that capializes the first letter fo the word.
const capitilize = (word) => word.charAt(0).toUpperCase() + word.slice(1);

// theme vlaue stored within the local storage.
const localTheme = localStorage.getItem("theme");

// Taking in the previous theme value from the local storage.
if (localTheme) {
  document.body.classList = localTheme;
  document.getElementById(localTheme).checked = true;
  document.getElementById("toggle-text").innerText = `${capitilize(
    localTheme
  )} Mode`;
}

radioButtons.forEach((button) => {
  button.addEventListener("click", (event) => {
    // Toggle theme operation.
    document.body.classList = event.target.value;

    // Storing the theme value to local storage.
    localStorage.setItem("theme", event.target.value);

    // Switching the toggle text.
    document.getElementById("toggle-text").innerText = `${capitilize(
      event.target.value
    )} Mode`;
  });
});
