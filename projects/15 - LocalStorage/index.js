const addItems = document.querySelector(".add-items");
const itemsList = document.querySelector(".plates");
const items = [];

function addItem(e) {
  e.preventDefault();
  console.log("hello");

  const item = {
    text: "Item Name",
    done: false, // done is a state
  };
}

// listen for submit event
addItems.addEventListener("submit", addItem);
