// Use querySelectorAll directly instead of selecting elements by class name
const radioButtons = document.querySelectorAll(".toggle__wrapper input");

// Function that capializes the first letter fo the word.
const capitilize = (word) => word.charAt(0).toUpperCase() + word.slice(1);

// theme vlaue stored within the local storage.
const localTheme = localStorage.getItem("theme");

// creating function to context switch between theme modes;
const contextSwitcher = (id1, id2) => {
  document.getElementById(id1).classList.remove("visually-hidden");
  document.getElementById(id2).classList = "visually-hidden";
};

// Taking in the previous theme value from the local storage.
if (localTheme) {
  document.body.classList = localTheme;
  document.getElementById(localTheme).checked = true;

  // Switching the toggle text.
  localTheme === "dark"
    ? contextSwitcher("toggle-text-light", "toggle-text-dark")
    : contextSwitcher("toggle-text-dark", "toggle-text-light");
}

radioButtons.forEach((button) => {
  button.addEventListener("click", (event) => {
    // Toggle theme operation.
    document.body.classList = event.target.value;

    // Storing the theme value to local storage.
    localStorage.setItem("theme", event.target.value);

    // Switching the toggle text.
    event.target.value === "dark"
      ? contextSwitcher("toggle-text-light", "toggle-text-dark")
      : contextSwitcher("toggle-text-dark", "toggle-text-light");
  });
});
