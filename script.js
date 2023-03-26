const input = document.querySelector("input");
let valorInput = document.querySelector("input");
const cadeadoAberto = document.querySelector("img")

function digitarNumero(e) {
  if (e.key === "Enter") {
    if(valorInput.value === ''){
      alert('Favor, preencha o campo.')
    }else if(valorInput.value.length > 3){
      alert("Apenas três caracteres")
      limpar()
    }else if(valorInput.value === '042'){
      cadeadoAberto.setAttribute('src','imgs/cadeado-desbloqueado.png')
    }else{
      alert('Continue tentando')
      limpar()
    }
  }
}

function limpar() {
  input.value = "";
}

// evento
input.addEventListener("keyup", digitarNumero);
