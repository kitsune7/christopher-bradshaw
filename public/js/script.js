function addNavClickListeners (element) {
  element.addEventListener('click', event => {
    event.preventDefault()
    document.querySelector(`a[name="${element.getAttribute('href').replace(/#/g, '')}"]`)
      .scrollIntoView({
        behavior: 'smooth',
        block: 'start',
        inline: 'nearest'
      })
  })
}

const elements = [].slice.call(document.querySelectorAll('nav a'))
elements.map(addNavClickListeners)
