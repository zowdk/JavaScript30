const addItems = document.querySelector(".add-items");
const itemsList = document.querySelector(".plates");
const items = JSON.parse(localStorage.getItem("items")) || []; // convert str back into arr of objects

function addItem(e) {
  e.preventDefault();
  const text = this.querySelector("[name=item]").value; //this refers to form

  const item = {
    text, // es6 shorthand
    done: false, // done is a state
  };
  items.push(item);
  populateList(items, itemsList);
  localStorage.setItem("items", JSON.stringify(items)); // remember to convert to string before passing to local storage
  this.reset();
}
//Write a function populateList that takes empty object (plates), and creates HTML stored in platesList
function populateList(plates = [], platesList) {
  platesList.innerHTML = plates
    .map((plate, i) => {
      return `
        <li>
            <input type="checkbox" data-index=${i} id="item${i}" ${
        plate.done ? "checked" : ""
      }" />
            <label for="item${i}">${plate.text}</label>
        </li>
        `;
    })
    .join("");
} // note: possible to update singular items instead of re-rendering entire list for better performance

// listen for submit event
addItems.addEventListener("submit", addItem);

populateList(items, itemsList);
