const counterEl = document.querySelector('.counter');
const decreaseBtnEl = document.querySelector('.decrease-btn');
const increaseBtnEl = document.querySelector('.increase-btn');
const resetBtnEl = document.querySelector('.reset-btn');

decreaseBtnEl.addEventListener('click', () => {
    //parseInt() converts string into integer
    let currentValue = parseInt(counterEl.textContent);
    // console.log(typeof(currentValue));
    counterEl.textContent = currentValue - 1;
    console.log(currentValue);
    if (currentValue - 1 === 0) {
        counterEl.style.color = 'black';
    }
    else if (currentValue - 1 <= 0) {
        counterEl.style.color = 'red';
    }
    

})
increaseBtnEl.addEventListener('click', () => {
    //parseInt() converts string into integer
    let currentValue = parseInt(counterEl.textContent);
    counterEl.textContent = currentValue + 1;
    if (currentValue + 1 === 0) {
        counterEl.style.color = 'black';
    }
    else if (currentValue + 1 > 0) {
        counterEl.style.color = 'green';
    }

})
resetBtnEl.addEventListener('click', () => {
    let currentValue = parseInt(counterEl.textContent);
    counterEl.textContent = '0';
    counterEl.style.color = 'black'
})