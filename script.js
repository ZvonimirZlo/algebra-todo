const form = document.getElementById('form');
const inputOne = document.getElementById('grade');
const inputTwo = document.getElementById('number');
const output = document.getElementById('output');


let time = new Date();
let year = time.getFullYear();
let month = time.getMonth() + 1;
let date = time.getDate();
let hour = time.getHours();
let minutes = time.getMinutes();
let secs = time.getSeconds();

let vrijeme = `${date}.${month}.${year} ${hour}:${minutes}:${secs}`

const addTask = () => {
    if(inputOne.value === '' || inputTwo.value === ''){
        return;
    }

    const divElem = document.createElement('div');

    divElem.innerHTML = `
    <div class="div-two">
    <div>
        <span id="gradeSpan">${inputOne.value}-${inputTwo.value}</span>
        <p id='vrijeme'>${vrijeme}</p>
    </div>
    <span id="favorite"></span>

    <div class="out-buttons-two">
        <button class="fav" type="button">Dodaj u favorite</button>
        <button class="del">Izbriši</button>
    </div>
    `

    output.appendChild(divElem);

    const del = divElem.querySelector('.del');
    del.onclick = () => {
        output.removeChild(divElem);
    }

    const addFav = divElem.querySelector('.fav');
    const fav = divElem.querySelector('#favorite');
    const divTwo = divElem.querySelector('.div-two');

    addFav.onclick = () => {
      fav.innerHTML = 'FAVORIT!';
      divTwo.style.backgroundColor = 'lime';
      addFav.innerText = 'Izbaci iz favorita';
    }

    addFav.addEventListener('dblclick',() => {
        fav.innerHTML = '';
        divTwo.style.backgroundColor = 'lightGray'; 
        addFav.innerText = 'Dodaj u favorite';
    })

    inputOne.value = '';
    inputTwo.value = '';

}

form.addEventListener('submit' , (e) => {
    e.preventDefault();
    addTask();
})











