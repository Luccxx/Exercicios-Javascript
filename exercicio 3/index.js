function idades(){
    var ano = new Date() //importa o objeto Date()
    var ano_atual = ano.getFullYear(); //Define o ano atual
    var idades = document.getElementById('idade');
    var texto = document.getElementById('texto');
    var sexo = document.getElementsByName('radsex');
    var img = document.getElementById('img');
    var ide = idades.value; //pega o valor do id idoso
    var conversao = ano_atual - ide;
    
    if (ide < 1900 || ide > ano_atual){
        alert("Digite um ano válido")
    }else{
        if (sexo[0].checked) { //seleciona o primeiro radio que começa com [0]
            var genero = "Masculino"
            if (conversao <5) {
                texto.innerHTML = `Detectamos Bebê do gênero ${genero} com ${conversao} anos`; // escreve dentro da variavel $texto 
                img.src = "img/bebe_masculino.jpg"
            } else if(conversao >=5 && conversao <12){
                texto.innerHTML = `Detectamos Criança do gênero ${genero} com ${conversao} anos`;
                img.src = "img/crianca_masculina.jpg"
            } else if(conversao >=12 && conversao <18){
                texto.innerHTML = `Detectamos Adolescente do gênero ${genero} com ${conversao} anos`;
                img.src = "img/adolescente_homem.jpg"
            } else if(conversao >=18 && conversao <60){
                texto.innerHTML = `Detectamos Adulto do gênero ${genero} com ${conversao} anos`;
                img.src = "img/homem.jpg"
            }else{
                texto.innerHTML = `Detectamos Idoso do gênero ${genero} com ${conversao} anos`;
                img.src = "img/homem_velho.jpg"
            }
        }else if(sexo[1].checked){
            var genero = "Feminino"
            if (conversao <5) {
                texto.innerHTML = `Detectamos Bebê do gênero ${genero} com ${conversao} anos`; // escreve dentro da variavel $texto 
                img.src = "img/bebe_feminino.jpg"
            } else if(conversao >=5 && conversao <12){
                texto.innerHTML = `Detectamos Criança do gênero ${genero} com ${conversao} anos`;
                img.src = "img/crianca_feminina.jpg"
            } else if(conversao >=12 && conversao <18){
                texto.innerHTML = `Detectamos Adolescente do gênero ${genero} com ${conversao} anos`;
                img.src = "img/adolescente_feminino.jpg"
            } else if(conversao >=18 && conversao <60){
                texto.innerHTML = `Detectamos Adulto do gênero ${genero} com ${conversao} anos`;
                img.src = "img/mulher.jpg"
            }else{
                texto.innerHTML = `Detectamos Idosa do gênero ${genero} com ${conversao} anos`;
                img.src = "img/mulher_velha.jpg"
            }
        }else{
            alert("Informe o gênero")
        }
    }
    
    
}