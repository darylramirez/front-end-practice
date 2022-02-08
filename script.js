const listsContainer = document.querySelector('[data-lists]')
let lists = [{d: 1, name: 'name'}, {id: 2, name: 'todo'}];
const newListForm = document.querySelector('[data-new-list-form]')
const newListInput = document.querySelector('[data-new-list-input]')

newListForm.addEventListener('submit', e=> {
    e.preventDefault();
    const listName = newListInput.value
    if(!listName) return
    const list = createList(listName);
    newListInput.value = null;
    lists.push(list)
    render()
})

function createList(name){
   return {id: Date.now().toString(), name: name, tasks: []}
}

function render(){
    clearElement(listsContainer)
    lists.forEach(list => {
const listElement = document.createElement('li')
listElement.dataset.listId = list.id
listElement.classList.add('select-list')
const spanElement = document.createElement('span')
spanElement.classList.add('indiv-list')
spanElement.innerText = list.name
const buttonElement = document.createElement('button')
buttonElement.classList.add('material-icons-outlined')
buttonElement.innerText = 'delete'
listsContainer.appendChild(listElement);
listsContainer.appendChild(spanElement);
listsContainer.appendChild(buttonElement);
    })
}

function clearElement(element){
while(element.firstChild){
    element.removeChild(element.firstChild)
}
}

render()