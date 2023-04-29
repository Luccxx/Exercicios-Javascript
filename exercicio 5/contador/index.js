const button = document.getElementById('btn')

button.addEventListener('click', index)

function index(){
    let n1 = document.getElementById('n1')
    let valorn1 = Number(n1.value)

    

    let n2 = document.getElementById('n2')
    let valorn2 = Number(n2.value)

    let passo = document.getElementById('passo')
    let valorpasso = Number(passo.value)
    
    let resultado = document.querySelector("div#result")
    
    if(n1.value.length == 0 || n2.value.length == 0 || passo.value.length == 0){
        alert("Digite algum número para começar")
    }else if(n1.value < 0 || n2.value < 0 || passo.value < 0){
        alert("Número inválido")
    }else if(passo.value == 0){
        alert('Passo desconsiderado. Começando passo 1')
        resultado.innerHTML = ""
        for(c = valorn1; c<=valorn2; c+=1){
           resultado.innerHTML += `${c}\n &#128073`
        }
        resultado.innerHTML += ("FIM" + "&#127882")
    }else{
        resultado.innerHTML = ""
        for(c = valorn1; c<=valorn2; c+=valorpasso){
           resultado.innerHTML += `${c}\n &#128073`
        }
        resultado.innerHTML += ("FIM" + "&#127882")
        
    }
    
    
}
