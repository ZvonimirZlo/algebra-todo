//Variables
const form = document.getElementById('form');
const inputOne = document.getElementById('grade');
const inputTwo = document.getElementById('number');
const output = document.getElementById('output');

//Date object and instances needed to create correct time format
const time = new Date();
const year = time.getFullYear();
const month = time.getMonth() + 1;
const date = time.getDate();
const hours = time.getHours();
const minutes = time.getMinutes();
const secs = time.getSeconds();

//Time format 
const timeFormat = `${date}.${month}.${year} ${hours}:${minutes}:${secs}`

//Add task function, creates task elements and renders it on the screen
const addTask = () => {
    
    //Prevents creating empty tasks if input one or input two is empty
    if (inputOne.value === '' || inputTwo.value === '') {
        return;
    }
 
    //Creates new task element
    const divElem = document.createElement('div');
    
    //Task element with inputs values and time when the element was created
    divElem.innerHTML = `
    <div class="div-two">
    <div>
        <span id="gradeSpan">${inputOne.value}-${inputTwo.value}</span>
        <p id='timeFormat'>${timeFormat}</p>
    </div>
    <span id="favorite"></span>

    <div class="out-buttons-two">
        <button class="add-favorite" type="button">Add to favorite!</button>
        <button class="del">Delete</button>
    </div>
    `

    output.appendChild(divElem);

    const del = divElem.querySelector('.del');
    del.onclick = () => {
        output.removeChild(divElem);
    }

    const addFav = divElem.querySelector('.add-favorite');
    const favorite = divElem.querySelector('#favorite');
    const divTwo = divElem.querySelector('.div-two');


    //Add to favorite event handler, toggles style and button text and adds 'FAVORITE!' or removes it from task element
    addFav.onclick = () => {
        favorite.innerHTML === 'FAVORITE!' ? favorite.innerHTML = '' : favorite.innerHTML = 'FAVORITE!';
        divTwo.style.backgroundColor === 'lime' ? divTwo.style.backgroundColor = 'lightgray' : divTwo.style.backgroundColor = 'lime';
        addFav.innerHTML === 'Remove from favorite!' ? addFav.innerHTML = 'Add to favorite!' : addFav.innerHTML = 'Remove from favorite!';
    }
    
    //Reset inputs to empty when task is created, prevents of creating multiple same tasks 
    inputOne.value = '';
    inputTwo.value = '';

}

form.addEventListener('submit', (e) => {
    e.preventDefault();
    addTask();
})













