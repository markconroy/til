let itemKey = localStorage.length;
const til = document.querySelector('.til');
const list = document.createElement('ul');
const textarea = document.querySelector('.text-for-thing');
const submit = document.querySelector('.add-item');
const removeAll = document.querySelector('.remove-all');
const listItems = list.querySelectorAll('li');
list.classList.add('things-i-learned');
til.appendChild(list);

for (let i = 0; i < localStorage.length; i++) {
  const element = document.createElement('li');
  element.classList.add('thing-i-learned');
  list.appendChild(element);
  element.innerHTML = localStorage[i];
  itemKey = localStorage.length + 1;
}

submit.addEventListener('click', function() {
  const text = textarea.value;
  const element = document.createElement('li');
  element.classList.add('thing-i-learned'); 
  element.innerHTML = text;
  list.appendChild(element);
  localStorage.setItem(itemKey, text);
  itemKey = localStorage.length + 1;
});

removeAll.addEventListener('click', function() {
  localStorage.clear();
  list.querySelectorAll('li').forEach(item => {
    item.remove();
  })
})


