var altura = 0;
var largura = 0;
var vidas = 1;
var tempo = 15;
var tempoCriarMosquito = 1500;

var nivel = window.location.search;
nivel = nivel.replace("?", "");

if (nivel === "normal") {
  //1500
  tempoCriarMosquito = 1500;
} else if (nivel === "dificil") {
  //1000
  tempoCriarMosquito = 1000;
} else if (nivel === "souls") {
  //750
  tempoCriarMosquito = 750;
}
//Criando o cronometro
var cronometro = setInterval(function () {
  tempo -= 1;
  if (tempo < 0) {
    clearInterval(cronometro);
    clearInterval(cria_mosca);
    window.location.href = "vitoria.html";
  } else {
    document.getElementById("cronometro").innerHTML = tempo;
  } //InnerHtml representa o valor entre as tags
}, 1000);

//Mostrando a tela de forma dinamica usando o onresize:
function ajusteTamanhojogo() {
  altura = window.innerHeight;
  largura = window.innerWidth;
  //   console.log(largura, altura);
}

ajusteTamanhojogo();

//Setando um valor aleatorio com base na altura e largura da tela:

function posicaoRandomica() {
  //Remover mosquito anterior caso exista e criando o sistema de vida:
  //isso retorna true
  if (document.getElementById("mosquito")) {
    document.getElementById("mosquito").remove(); //remove() é um metodo para apagar o elemento
    if (vidas > 3) {
      window.location.href = "game_over.html";
    } else {
      document.getElementById("v" + vidas).src = "./imgs/coracao_vazio.png";
      vidas++;
    }
  }
  var posicaoX = Math.floor(Math.random() * largura) - 90;
  var posicaoY = Math.floor(Math.random() * altura) - 90;

  posicaoX = posicaoX < 0 ? 0 : posicaoX;
  posicaoY = posicaoY < 0 ? 0 : posicaoY;

  //criar um elemento html:
  var mosquito = document.createElement("img");

  //Setando os atributos que a imagem tem e os valores alearios
  mosquito.src = "./imgs/mosca.png";
  // mosquito.className = "mosquito1";
  //Colando a outra classe porem precisa concatenar e dá um espaço para ficar cetinho
  mosquito.className = tamanhoAleatorio() + " " + ladoAleatorio();

  mosquito.style.position = "absolute";
  mosquito.style.left = posicaoX + "px";
  mosquito.style.top = posicaoY + "px";
  //Setando um id:
  mosquito.id = "mosquito";

  mosquito.onclick = function () {
    this.remove();
  };

  document.body.appendChild(mosquito);

  tamanhoAleatorio();
}

//Setando tamanhos aleatorios

function tamanhoAleatorio() {
  var classe = Math.floor(Math.random() * 3);

  switch (
    classe //Os valores da classe variam entre 0 e 2
  ) {
    case 0:
      return "mosquito1";
    case 1:
      return "mosquito2";
    case 2:
      return "mosquito3";
  }
}

function ladoAleatorio() {
  var classe = Math.floor(Math.random() * 2);

  switch (
    classe //Os valores da classe variam entre 0 e 1
  ) {
    case 0:
      return "ladoA";
    case 1:
      return "ladoB";
  }
}
