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
  populateList(items, itemsList);
  this.reset();
}
//Write a function populateList that takes empty object (plates), and creates HTML stored in platesList
function populateList(plates = [], platesList) {
  platesList.innerHTML = plates
    .map((plate, i) => {
      return `
        <li>
            <label for="">${plate.text}</label>
        </li>
        `;
    })
    .join("");
} // note: possible to update singular items instead of re-rendering entire list for better performance

// listen for submit event
addItems.addEventListener("submit", addItem);
