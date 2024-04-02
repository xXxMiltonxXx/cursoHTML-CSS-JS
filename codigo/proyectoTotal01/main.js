//las variables que tienen $ antes del nombre es por que hace referencia a un elemento del Dom, es decir hacer refencia a una parte del html
const $prev = document.querySelector('.prev');
const $next = document.querySelector('.next');

$next.addEventListener('click', () => {
    const items = document.querySelectorAll('.item');
    document.querySelector('.slide').appendChild(items[0]);
});

$prev.addEventListener('click', () => {
    const items = document.querySelectorAll('.item');
    document.querySelector('.slide').prepend(items[items.length - 1]);
});