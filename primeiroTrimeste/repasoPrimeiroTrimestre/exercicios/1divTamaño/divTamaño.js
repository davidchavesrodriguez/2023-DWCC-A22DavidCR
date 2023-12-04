let divTamaño = document.getElementById('divTamaño');
let width = document.getElementById('width');
let height = document.getElementById('height');

width.addEventListener('input', () => {
  divTamaño.style.width = width.value + 'px';
});

height.addEventListener('input', () => {
  divTamaño.style.height = height.value + 'px';
});
