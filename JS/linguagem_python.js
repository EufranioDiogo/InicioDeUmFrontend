function mouseover(id){
    var divConteudo = document.getElementById(id);
    divConteudo.style.transition = '0.5s';
    divConteudo.style.background = 'rgba(31, 31, 31, 1)';
}
function mouseout(id){
    var divConteudo = document.getElementById(id);
    divConteudo.style.transition = '0.5s';
    divConteudo.style.background = 'rgba(31, 31, 31, 0.5)';
}
