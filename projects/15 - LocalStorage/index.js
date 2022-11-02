const addItems = document.querySelector(".add-items");
const itemsList = document.querySelector(".plates");
const items = [];

function addItem(e) {
  e.preventDefault();
  const text = this.querySelector("[name=item]").value; //this refers to form

  const item = {
    text, // es6 shorthand
    done: false, // done is a state
  };
  items.push(item);
  this.reset();
}

// listen for submit event
addItems.addEventListener("submit", addItem);
