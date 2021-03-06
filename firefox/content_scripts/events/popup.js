const popupEvent = (message, type) => {
  const popup = document.querySelector('nle-popup')

  popup.textContent = browser.i18n.getMessage(message)
  popup.classList.add(type)
  popup.classList.remove('hide-popup')
      
  setTimeout(() => {
    popup.className = ''
    popup.classList.add('hide-popup')
    popup.classList.add('default')
  }, 3000)
}

exportFunction(popupEvent, window, { defineAs: 'popupEvent' })