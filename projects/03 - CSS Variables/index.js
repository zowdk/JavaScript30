const inputs = document.querySelectorAll(".controls input");

function handleUpdate() {
  //what is the suffix of the value that we're working with?
  const suffix = this.dataset.sizing || "";

  document.documentElement.style.setProperty(
    `--${this.name}`,
    this.value + suffix
  );
}

// trigger change when input value is moved
inputs.forEach((input) => input.addEventListener("change", handleUpdate));
inputs.forEach((input) => input.addEventListener("mousemove", handleUpdate));
