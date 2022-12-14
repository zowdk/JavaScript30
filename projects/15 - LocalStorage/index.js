const addItems = document.querySelector(".add-items");
const removeItems = document.querySelectorAll(".btn-remove");
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
        <li class="plate">
            <input type="checkbox" data-index=${i} id="item${i}" ${
        plate.done ? "checked" : ""
      } />
            <label for="item${i}">${plate.text}</label>
            <button type="" class="btn-remove">❌</>
        </li>
        `;
    })
    .join("");
  //loop over each btn-remove and add an event listen for each btn-remove
  const removeBtns = document.querySelectorAll(".btn-remove");
  for (let i = 0; i < removeBtns.length; i++) {
    // add event listeners on btn-remove so that btn works more than once
    removeBtns[i].addEventListener("click", function removeItem(e) {
      itemsList.removeChild(e.target.parentElement);
    });
  }
} // note: possible to update singular items instead of re-rendering entire list for better performance

function toggleDone(e) {
  //check if target matches the input we want aka. event delegation
  if (!e.target.matches("input")) return; //skip unless it's an input

  //find checked item and change state from done to true, store in local storage, and update visually on page
  const el = e.target;
  const index = el.dataset.index;
  items[index].done = !items[index].done;
  localStorage.setItem("items", JSON.stringify(items));
  populateList(items, itemsList);
}

// listen for submit event
addItems.addEventListener("submit", addItem);
itemsList.addEventListener("click", toggleDone);

populateList(items, itemsList);
