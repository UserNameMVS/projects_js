const search =  document.querySelector('.search'),
input = document.querySelector('.input'),
btn = document.querySelector('.btn')

btn.addEventListener('click', () => {
  search.classList.toggle('active')
  input.focus()
})