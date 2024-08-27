let count = 0;

const heading = document.querySelector('#heading');
const increaseBtn = document.querySelector('#increase');
const decreaseBtn = document.querySelector('#decrease');
const reset = document.querySelector('#reset');

increaseBtn.onclick = function () {
    count++;
    heading.textContent=count;
}
decreaseBtn.onclick = function () {
    count--;
    heading.textContent=count;
}
reset.onclick = function () {
    count=0;
    heading.textContent=count;
}
