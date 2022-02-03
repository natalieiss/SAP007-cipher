import cipher from './cipher.js';

document.getElementById('buttonPolinizar').addEventListener("click", polinizar);
document.getElementById('buttonDespolinizar').addEventListener("click", despolinizar);
document.getElementById('buttonReturnColmeia').addEventListener("click", retornarAColmeia);

function polinizar() {

  let text = document.getElementById("txt").value.toUpperCase();
  let offset = Number(document.getElementById("offset").value);
  document.getElementById("textResult").value = cipher.encode(offset, text);
  /*polinizarTextValue.textContent let textContentVai = document.getElementById("txtResult")
  textContentVai.textContent */ //utilizar esse procedimento para mensagens
}


function despolinizar() {
  let text = document.getElementById("txt").value.toUpperCase();
  let offset = Number(document.getElementById("offset").value);

  document.getElementById("textResult").value = cipher.decode(offset, text);
}


function retornarAColmeia() {
  document.getElementById("txt").value = "";
  document.getElementById("textResult").value = "";
  document.getElementById("offset").value = "1";
}


/* const messangerDecod = document.getElementById("letters") // const para pegar o valor de letters e gravar na variavel pra manipular no js as palavras
const offsetJs = document.getElementById("offset") // const para pegar o valor de offset no html e gravar na variavel pra manipular no js o numero escolhido
const buttonHtml = document.getElementById("send1") // const para pegar o valor de send1 (botão) e gravar na variavel
// as variaveis acima não possuem .value pois iriam capturar um valor antes mesmo dele existir

let offsetValue //variavel criada para ser manipulada na função pra agregar o valor de offsetJs
let nameValue //variavel criada para ser manipulada na função

function offsetMessangerDecode() {
    offsetValue = offsetJs.value //offsetValue e nameValue sendo manipulado para coletar os valores que o usuario ira utilizar
    nameValue = messangerDecod.value
    console.log(nameValue, offsetValue)
    cipher.code(nameValue, offsetValue)
}

buttonHtml.addEventListener('click', offsetMessangerDecode) // evento para que o botão inicie a captura das letras e numeros escolhidos pelo usuário

import cipher from './cipher.js';


/*console.log("letters1")


console.log(cipher);

console.log('') */


//usar code e decode */