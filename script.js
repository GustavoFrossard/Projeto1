function toggleMode()
{
  const html = document.documentElement
  html.classList.toggle("light")

  /*pegar tag img
  const img = document.querySelector("#profile img")

  sub a img
  if (html.classList.contains("light")){
  se tiver light add img light
  img.setAttribute("src", "./assets/avatar-light.png")
  } else{
   se tiver sem light manter img
  img.setAttribute("src", "./assets/avatar.png")
  }
  */
}