const itemsLearned = document.querySelector(".items-learned");
const list = document.createElement("ol");
const textarea = document.querySelector(".text-for-thing");
const submit = document.querySelector(".add-item");
const removeAll = document.querySelector(".remove-all");
const listItems = list.querySelectorAll("li");
list.classList.add("things-i-learned");
itemsLearned.appendChild(list);

for (let i = 1; i < localStorage.length + 1; i++) {
  const element = document.createElement("li");
  element.classList.add("thing-i-learned");
  list.appendChild(element);
  element.innerHTML = localStorage[i];
  itemKey = localStorage.length + 1;
}

submit.addEventListener("click", function () {
  const text = textarea.value;
  if (text) {
    const element = document.createElement("li");
    element.classList.add("thing-i-learned");
    element.innerHTML = text;
    list.appendChild(element);
    localStorage.setItem(localStorage.length + 1, text);
  }
});

removeAll.addEventListener("click", function () {
  localStorage.clear();
  list.querySelectorAll("li").forEach((item) => {
    item.remove();
  });
});
