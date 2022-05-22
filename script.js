const itemsLearned = document.querySelector(".items-learned");
const list = document.createElement("ol");
const textarea = document.querySelector(".thing__thing");
const submit = document.querySelector(".add-item");
const removeAll = document.querySelector(".remove-all");
const listItems = list.querySelectorAll("li");
list.classList.add("things-i-learned");
itemsLearned.appendChild(list);

https://twitter.com/share?url=https%3A//www.annertech.com/node/254&text=Allowing%20Editors%20to%20Choose%20the%20Image%20Style%20in%20Drupal%208%20Image%20Fields

for (let i = 1; i < localStorage.length + 1; i++) {
  const element = document.createElement("li");
  element.classList.add("thing-i-learned");
  list.appendChild(element);
  element.innerHTML = `
    ${localStorage[i]}
    <ul class="share-list">
      <li class="share-list__item">Share on <a class="share-list__link" href="https://twitter.com/share?url=https://til.mark.ie&text=Today I learned: ${localStorage[i]} - shared via til app" target="_blank">Twitter</a></li>
      <li class="share-list__item">Share on <a class="share-list__link" href="https://www.facebook.com/sharer.php?u=https://til.mark.ie&quote=Today I learned: ${localStorage[i]} - shared via til app" target="_blank">Facebook</a></li>
    </ul>
  `;
  itemKey = localStorage.length + 1;
}

submit.addEventListener("click", function () {
  const text = textarea.value;
  if (text) {
    const element = document.createElement("li");
    element.classList.add("thing-i-learned");
    element.innerHTML = `
      ${text}
      <ul class="share-list">
        <li class="share-list__item">Share on <a class="share-list__link" href="https://twitter.com/share?url=https://til.mark.ie&text=Today I learned: ${text} - shared via til app" target="_blank">Twitter</a></li>
        <li class="share-list__item">Share on <a class="share-list__link" href="https://www.facebook.com/sharer.php?u=https://til.mark.ie&quote=Today I learned: ${text} - shared via til app" target="_blank">Facebook</a></li>
      </ul>
    `;
    list.appendChild(element);
    localStorage.setItem(localStorage.length + 1, text);
    textarea.value = '';
    textarea.placeholder = 'Anything else?';
  }
});

removeAll.addEventListener("click", function () {
  localStorage.clear();
  list.querySelectorAll("li").forEach((item) => {
    item.remove();
  });
});
