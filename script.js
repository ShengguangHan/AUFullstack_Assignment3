const Image = document.querySelectorAll('.image')
Image.forEach(image => {
  image.addEventListener('click', () => {
      removeActiveClasses()
      image.classList.add('active')
  })
})

function removeActiveClasses() {
  Image.forEach(image => {
    image.classList.remove('active')
  })
}