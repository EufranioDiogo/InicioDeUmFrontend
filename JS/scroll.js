window.onscroll = function() {scrollFunction()};
const subMenu = document.querySelector('.subMenuDaLista');
var estadoSubMenu = false;

function scrollFunction() {
  if (document.body.scrollTop > 35 || document.documentElement.scrollTop > 35) {
    document.getElementById("cabecalho").style.height = "6%";
	document.getElementById("listaDesordenada").style.marginTop = "0%";
  } else {
    document.getElementById("cabecalho").style.height = "10%";
	document.getElementById("listaDesordenada").style.marginTop = "2%";
  }
}