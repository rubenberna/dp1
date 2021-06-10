if ('fonts' in document) {
  Promise.all([
    document.fonts.load('1em VolvoNovum'),
    document.fonts.load('700 1em VolvoNovum'),
    document.fonts.load('italic 1em VolvoNovum'),
    document.fonts.load('300 1em VolvoNovum')
  ]).then(_ => {
    document.documentElement.classList.add('fonts-loaded')
  })
}
