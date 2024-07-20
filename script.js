const form = document.getElementById('form');
const inputOne = document.getElementById('grade');
const inputTwo = document.getElementById('number');
const output = document.getElementById('output');


const time = new Date();
const year = time.getFullYear();
const month = time.getMonth() + 1;
const date = time.getDate();
const hours = time.getHours();
const minutes = time.getMinutes();
const secs = time.getSeconds();

const vrijeme = `${date}.${month}.${year} ${hours}:${minutes}:${secs}`

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
      fav.innerHTML === 'FAVORITE!' ? fav.innerHTML = '' : fav.innerHTML = 'FAVORITE!';
      divTwo.style.backgroundColor === 'lime' ? divTwo.style.backgroundColor = 'lightgray' : divTwo.style.backgroundColor = 'lime';
      addFav.innerHTML === 'Izbaci iz favorita!' ? addFav.innerHTML = 'Dodaj u favorite!' : addFav.innerHTML = 'Izbaci iz favorita!';
    }

    // addFav.ondblclick = () => {
    //     fav.innerHTML = '';
    //     divTwo.style.backgroundColor = 'lightgray';
    //     addFav.innerText = 'Dodaj u favorite!';
    //   }

    

    inputOne.value = '';
    inputTwo.value = '';

}

form.addEventListener('submit' , (e) => {
    e.preventDefault();
    addTask();
})













