function toggleMode() {
  const html = document.documentElement

  /* if(html.classList.contains('light')) {
    html.classList.remove('light')
  } else {
    html.classList.add('light')
  } */

  /* todo esse código pode ser simplificado para: */

  html.classList.toggle('light')

  // pegar a tag img

  const img = document.querySelector("#profile img")

  // substituir a imagem
  if(html.classList.contains('light')){
    //se estiver em light mode, substituir a imagem
    img.setAttribute('src', './assets/avatar2.png')
  } else {
    //se estiver sem light mode, manter avatar normal
    img.setAttribute('src', './assets/avatar.png')
  }
}