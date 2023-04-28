var btn = document.getElementById('btnMostrar')


btn.addEventListener('click', index)

function index(){
    var n = document.getElementById('number')
    var valor = n.value
    var tabuada = document.getElementById('tab')
    tabuada.innerHTML = ""

    if (valor.length==0) {
        alert("Digite um valor para iniciar")
    } else {
        for(var cont = 1; cont<=10; cont++){
            var result = valor * cont;
            var p = document.createElement('option')
            p.text = `${valor} X ${cont} = ${result}`
            tabuada.appendChild(p)
            
        }
    }
}
