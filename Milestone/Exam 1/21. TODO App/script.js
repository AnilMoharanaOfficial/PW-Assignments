const itemName = document.getElementById("list");
const addItem = document.getElementById("btn");
const showItems = document.getElementById("iteam-list");

let storeItem = ["Lear Web Dev", "Create Projects"];

addItem.addEventListener("click", () => {
  const item = itemName.value;
  storeItem.push(item);
  itemName.value = "";

  showTodos(storeItem);
});

function showTodos(items) {
  showItems.innerHTML = "";

  items.forEach((el) => {
    const listItem = document.createElement("li");

    listItem.textContent = el;

    showItems.appendChild(listItem);
  });
}

showTodos(storeItem);
