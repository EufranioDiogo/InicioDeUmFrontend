function overButton(id, cor) {
    const menuItem = document.getElementById(`${id}`);
    menuItem.style.transition = "1.0s";
    menuItem.style.background = `rgb(${cor})`;
    menuItem.style.color = "white";
}

function outButton(id) {
	if(id != "li1") {
		fecharSubMenu();
	}
	document.getElementById(id).style.transition = "0.5s";
    document.getElementById(id).style.background = "rgba(255, 255, 255, 0.975)";
    document.getElementById(id).style.color = `rgb(0, 18, 46)`;
}

function abrirSubMenu() {
    subMenu.style.display = "block";
    estadoSubMenu = true;
}

function fecharSubMenu() {
    subMenu.style.display = "none";
    estadoSubMenu = false;
}

function overVideo(id) {
    document.getElementById(id).style.transition = "0.5s";
    document.getElementById(id).style.boxShadow = "0px 0px 5px rgb(45, 45, 45)";
}

function outVideo(id) {
    document.getElementById(id).style.transition = "0.5s";
    document.getElementById(id).style.boxShadow = "0px 0px 0px rgb(255, 255, 255)";
}

function indicacoesHover(id) {
    var div = document.querySelector(`#${id}`);
    div.style.transition = '0.8s';
    div.style.background = "rgb(0, 70, 136)";
    var text = document.querySelector(`#${id} span p`);
    text.style.color = "white";
}

function indicacoesOut(id) {
    var div = document.querySelector(`#${id}`);
    div.style.transition = "0.8s";
    div.style.background = "rgb(220, 220, 220)";
    var text = document.querySelector(`#${id} span p`);
    text.style.color = "#222222";
}
