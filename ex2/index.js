function carregar(){
    var data = new Date();
    var label_hora = window.document.getElementById('label');
    var body = document.body;
    var titulo = document.getElementById('titulo')
    var img = document.getElementById('img');
    var hora_atual = data.getHours();
    label_hora.innerHTML = `A hora atual é: ${hora_atual}:00`;
    if (hora_atual >0 && hora_atual <12) {
        titulo.innerHTML = "Bom Dia!"
        body.style.backgroundColor = "skyblue";
        img.src = 'img/manha.jpg';
    } else if (hora_atual >=12 && hora_atual<18) {
        titulo.innerHTML = "Boa Tarde!"
        body.style.backgroundColor = "green";
        img.src = "img/tarde.jpg"
    } else{
        titulo.innerHTML = "Boa noite!"
        body.style.backgroundColor = "darkblue";
        body.style.color = "white"
        img.src = "img/noite.jpg"
    }
}
