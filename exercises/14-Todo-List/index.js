//add task
let ul = document.querySelector('ul');
let toDoInput = document.querySelector('#addToDo')
toDoInput.addEventListener('keypress', (e) => {
    if (e.keyCode == 13 && toDoInput.value && (/[a-zA-Z]/).test(toDoInput.value)) { 
        ul.innerHTML += `<li><span><i class="fa fa-trash"></i></span>${toDoInput.value}</li>`
        toDoInput.value = '';
    }
})

//remove task
ul.addEventListener('click', (e) => {
    console.log(e)
    if (e.target.nodeName == 'I' || e.target.nodeName == 'SPAN') {
        let li = e.composedPath().filter((element) => element.nodeName == 'LI');
        li[0].remove();
    } 
    else if (e.target.nodeName == 'LI') e.target.remove();
})
