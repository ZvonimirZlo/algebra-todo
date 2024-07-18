const day = document.getElementById('day')
const check = document.getElementById('check');
const grade = document.getElementById('grade');
const num = document.getElementById('number');
const res = document.getElementById('resultCont');



const time = new Date();

const year = time.getFullYear();
const month = time.getMonth() + 1;
const date = time.getDate();
const hour = time.getHours();
const minute = time.getMinutes();
const secs = time.getSeconds();


let datum = `${date}.${month}.${year} ${hour}:${minute}:${secs}`;


const addRes = () => {

    const form = document.getElementById('form');

    form.addEventListener('submit', (e) => {
        e.preventDefault();
    })

    if (grade.value === "" || num.value === "") {
        return;
    }

    const divElem = document.createElement('div');
    divElem.innerHTML = `
    <div class='res'>           
 <div class='out'>
    <span class="output">${grade.value}-${num.value}</span>
     <p id="day">${datum}</p>
     <p id='favtxt'></p>
 </div>
 <div>
    <button class="fav" id='fav'>Dodaj u favorite</button>
    <button class="del" id="del">Izbrisi</button>
  </div>
  </div>`;

    res.appendChild(divElem);
    grade.value = '';
    num.value = '';

    const del = divElem.querySelector('#del');
    const fav = divElem.querySelector('#fav');
    const favtxt = divElem.querySelector('#favtxt')


    fav.addEventListener('click', () => {
       favtxt.innerText = 'Favorite!';
      })

    fav.addEventListener('dblclick', () => {
        favtxt.innerHTML = '';
     })

   

    del.addEventListener('click', () => {
        res.removeChild(divElem);

    })
}





check.onclick = addRes;








