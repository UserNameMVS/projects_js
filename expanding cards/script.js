const slides = document.querySelectorAll('.slide')

slides.forEach(slide => {
  slide.addEventListener('click', () => {
    removeClassActive()
    slide.classList.add('active')
  })
})

function removeClassActive() {
  slides.forEach(slide => {
    slide.classList.remove('active')
  })
}