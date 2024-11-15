
const nomeInput = document.getElementById('nome');
const emailInput = document.getElementById('email'); 
let nomeIn = document.querySelector('input [for="nome]');  
let nomePlaceholder= document.querySelector (placeholder="*Nome"); 

//função mostrar popup de campo obrigatório

function mostrarPopup (){
nomeInput.classList.add("requerid-popup")
}
nomeInput.addEventListener("focus", mostrarPopup)
        
function estilizarNomeValido(){
    nomeInput.classList.add("correct");
    nomeInput.classList.remove("error");
    nomeInput.classList.remove("visible");
}

function estilizarUserNameInvalido(){
    nomeInput.classList.add("error");
    nomeInput.classList.remove("correct");
    nomeInput.classList.add("visible");
   nomeInput.innerText="mínimo 3 caracteres";
}