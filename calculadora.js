let input = document.getElementById("input");
let button = document.querySelectorAll(".adicionar");
let numero = document.querySelectorAll(".num");
let apagar = document.querySelector(".icon");
let reset = document.querySelector(".reset");
let add = document.querySelector('.add')
let result = document.querySelector('.result')
let addSinal = document.querySelector('.add_sinal')
num = false;


numero.forEach((numero) => {
  numero.addEventListener("click", clicar);
  function clicar() {
    input.value = input.value + numero.innerHTML;
    num = true;
  }
});

button.forEach((button) => {
  button.addEventListener("click", clicar_num);
  function clicar_num() {
    if (input.value === "") {
      input.value = "";
    } else if (num === true) {
      input.value = input.value + button.innerHTML;
      num = false;
    } else {
      texto = input.value;
      palavra = texto.split("");
      palavra.pop();
      novapalavra = palavra.join("");
      input.value = novapalavra;
      input.value = input.value + button.innerHTML;
    }
  }
});

addSinal.addEventListener('click',add_sinal)
function add_sinal(){
     virgula = input.value
     if(virgula.includes(',') == false){
        input.value = input.value + ','
     }else{
      alert('ação indisponivel')
     }
       
    // console.log(virgulaArray.includes(','))  
}


add.addEventListener('click', adicionar)

function adicionar() {
  let barra1 = 0
  let barra2 = 0

  if(num === true && barra2 < barra1){
  input.value = input.value + ')'
    barra2 = barra2 + 1
       console.log('true')
       console.log(barra2, 'barra2')
   }else {
   input.value = input.value + '('
    barra1 = barra1 = barra1 + 1
    console.log(barra1, 'barra1')
   console.log('false')
   }
}

apagar.addEventListener("click", apaga);
function apaga() {
  if (input.value.length > 0) {
    input.value = input.value.slice(0, -1);
  }
}
reset.addEventListener("click", resetar);
function resetar() {
  input.value = "";
}

result.addEventListener('click', resultado)
function resultado() {
  result = input.value
  novoValor = result.replace(/x/g, '*')
  valorPorce = novoValor.replace(/%/g, '/100*')
  valorFinal = valorPorce.replace(/÷/g, '/')
  input.value = eval(valorFinal)
}





