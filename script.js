const form = document.getElementById('form');
const nome = document.getElementById('nome');
const email = document.getElementById('email');

// Validação do formulário
form.addEventListener("submit",(event) => {
        event.preventDefault();
        checkForm();
})
nome.addEventListener("blur",() => { 
    checkInputnome();})
email.addEventListener("blur",() => { 
    checkEmail();
})
        
function checkInputnome(){
const nomeValue = nome.value;
// Verificar se o nome está preenchido
if (nome.value === "") {
   errorInput(nome,"campo obrigatório.");
 } else {
    const formItem = nome.parentElement;
    formItem.className ="form-group"
 }
 }
 // Veerificar  email preenchido
function checkEmail(){ 
    const emailValue= email.value;
if(emailValue === "" ) {
    errorInput (email,"campo obrigatório.")

}else if (!isValidEmail(email.value)){
errorInput(email,"email inválido")
}else {
     const formItem =email.parentElement;
     formItem.className ="form-group"
}
}

//Função para validar o email
function isValidEmail(email) {
    const emailRegex = new RegExp(
      /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
    );
if (emailRegex.test(email)) {
        return true; 
 }
  return false;
  }
  

     
function errorInput(input, message){
    const formItem = input.parentElement;
    const textMenssage= formItem.querySelector("a");

    textMenssage.innerText = message;
    formItem.className= "form-group error"
}

function checkForm() {
    checkInputnome();
    checkEmail()
    const formItems =form.querySelectorAll(".form-group")
    const isValid =[...formItems].every((item) => {
        return item.className === "form-group"
    });
if (isValid) {
    alert("INSCRIÇÃO REALIZADA COM SUCESSO!")
}}