//https://youtu.be/81ms2BDc0SM
var fundomenu;
var z = 90;
var w = 110;
var opcao = 1;
var tela = 0;
var x = 250;
var y = 480;
var xd = 0;
var yd = 0;
var arect = 100;
var brect = 400;
var crect = 200;
var drect = 200;
var erect = 200;
var frect = 90;
var grect = 100;
var hrect = 400;
var irect = 100;
var jrect = 250;
var xrect = 235;
var yrect = 30;
var Vidas = 3;
var Pontos = 0;
var personagem;
var fundofase1;
var estadoDisparo = false;
var img = [];
var imgbaixo = [];
var imgdireita = [];
var imgesquerda = [];
var zumbi = [];
var zumbi2 = [];
var contador = 0;
var tempo = 0;
var telafinal;
var telavitoria;

/*
     1 
    2 3
     4
*/
var direcaoPersonagem = 1

function preload() {
  fundomenu = loadImage("Menu 3.jpg");
  fundofase1 = loadImage("battleback1.png");
  criador = loadImage("Criador.jpeg");
  personagem = loadImage("Jeremy_Blonde - Copia.png");
  img[0] = loadImage("Jeremy_Blonde - Copia.png");
  img[1] = loadImage("Jeremy_Blonde - Copia 2.png");
  img[2] = loadImage("Jeremy_Blonde - Copia 3.png");
  imgbaixo[0] = loadImage("Jeremy_Blonde - baixo 1.png");
  imgbaixo[1] = loadImage("Jeremy_Blonde - baixo 2.png");
  imgbaixo[2] = loadImage("Jeremy_Blonde - baixo 3.png");
  imgdireita[0] = loadImage("Jeremy_Blonde - direita 1.png");
  imgdireita[1] = loadImage("Jeremy_Blonde - direita 2.png");
  imgdireita[2] = loadImage("Jeremy_Blonde - direita 3.png");
  imgesquerda[0] = loadImage("Jeremy_Blonde - esquerda 1.png");
  imgesquerda[1] = loadImage("Jeremy_Blonde - esquerda 2.png");
  imgesquerda[2] = loadImage("Jeremy_Blonde - esquerda 3.png");
  zumbi[0] = loadImage("zumbi 1.png");
  zumbi[1] = loadImage("zumbis 2.png");
  zumbi[2] = loadImage("zumbis 3.png");
  zumbi2[0] = loadImage("zumbis 4.png");
  zumbi2[1] = loadImage("zumbis 5.png");
  zumbi2[2] = loadImage("zumbis 6.png");
  telafinal = loadImage("Fim de Jogo.jpg");
  telavitoria = loadImage("fundo de vitoria.jpg")
}

function setup() {
  createCanvas(600, 500);
}

function draw() {

  if (tela == 0) {
    menu();
  }
  if (tela == 1) {
    fase1();
  }
  if (tela == 2) {
    instrucoes();
  }
  if (tela == 3) {
    creditos();
  }
  if (tela == 4) {
    acura();
  }

  //Animações
  tempo++;
  if (tela == 1 && keyIsDown(38)) {
    image(img[contador % 2], x, y, 28, 32);
    if (tempo > 15) {
      contador++;
      tempo = 0;
    }
  }
  tempo++;
  if (tela == 1 && keyIsDown(40)) {
    image(imgbaixo[contador % 2], x, y, 28, 32);
    if (tempo > 15) {
      contador++;
      tempo = 0;
    }
  }
  tempo++;
  if (tela == 1 && keyIsDown(37)) {
    image(imgesquerda[contador % 2], x, y, 28, 32);
    if (tempo > 15) {
      contador++;
      tempo = 0;
    }
  }
  tempo++;
  if (tela == 1 && keyIsDown(39)) {
    image(imgdireita[contador % 2], x, y, 28, 32);
    if (tempo > 15) {
      contador++;
      tempo = 0;
    }
  }
  tempo++
  if (tela == 1) {
    image(zumbi[contador % 2], yrect, xrect, 30, 30)
    if (tempo > 15) {
      contador++;
      tempo = 0;
    }
  }
  tempo++
  if (tela == 1) {
    image(zumbi[contador % 2], brect, arect, 30, 30)
    if (tempo > 15) {
      contador++;
      tempo = 0;
    }
  }
  tempo++
  if (tela == 1) {
    image(zumbi[contador % 2], drect, crect, 30, 30)
    if (tempo > 15) {
      contador++;
      tempo = 0;
    }
  }
  tempo++
  if (tela == 1) {
    image(zumbi2[contador % 2], erect, frect, 30, 30)
    if (tempo > 15) {
      contador++;
      tempo = 0;
    }
  }
  tempo++
  if (tela == 1) {
    image(zumbi2[contador % 2], grect, hrect, 30, 30)
    if (tempo > 15) {
      contador++;
      tempo = 0;
    }
  }
  tempo++
  if (tela == 1) {
    image(zumbi2[contador % 2], irect, jrect, 30, 30)
    if (tempo > 15) {
      contador++;
      tempo = 0;
    }
  }
}

function menu() {
  imageMode(CORNER)
  background(fundomenu);
  fill(100)
  rect(z, w, 150, 50)
  fill(255)
  textSize(40);
  text("A cura para o mal", 110, 40);
  textSize(30)
  text("Jogar", 90, 150);
  text("Instruções", 90, 250);
  text("Créditos", 90, 350);
  text("A cura", 90, 450);
}

function fase1() {
  imageMode(CORNER)
  background(fundofase1)
  textSize(25);
  text("  Vidas:  " + Vidas +"                SOBREVIVA            Pontos: " + Pontos, 10, 30);
  fill(255)

  //Jogador
  ellipse(x, y, 35, 38);
  imageMode(CENTER);
  image(personagem, x, y);

  //Controle
  if (keyIsDown(37)) { //esquerda
    x -= 2;
    if (estadoDisparo == false)
      direcaoPersonagem = 2;
  }
  if (keyIsDown(39)) { //direita
    x += 2;
    if (estadoDisparo == false)
      direcaoPersonagem = 3;
  }
  if (keyIsDown(38)) { //cima
    y -= 2;
    if (estadoDisparo == false)
      direcaoPersonagem = 1;
  }
  if (keyIsDown(40)) { //baixo
    y += 2;
    if (estadoDisparo == false)
      direcaoPersonagem = 4;
  }
  if (keyIsDown(90) && estadoDisparo == false) {
    xd = x;
    yd = y;
    estadoDisparo = true;
  }

  //Disparo
  else if (estadoDisparo == true && direcaoPersonagem == 4) { //baixo
    ellipse(xd, yd, 4, 4);
    yd = yd + 8;
    if (yd > 512) {
      estadoDisparo = false;
    }
  } 
  else if (estadoDisparo == true && direcaoPersonagem == 3) { //direita
    ellipse(xd, yd, 4, 4);
    xd = xd + 8;
    if (xd > 512) {
      estadoDisparo = false;
    }
  } 
  else if (estadoDisparo == true && direcaoPersonagem == 2) { //esquerda
    ellipse(xd, yd, 4, 4);
    xd = xd - 8;
    if (xd < 0) {
      estadoDisparo = false;
    }
  } 
  else if (estadoDisparo == true) { //cima/normal
    ellipse(xd, yd, 4, 4);
    yd = yd - 8;
    if (yd < 0) {
      estadoDisparo = false;
    }
  }

  //Inimigo
  rect(yrect, xrect, 30, 30);
  xrect = xrect + 4;
  if (xrect > 512) {
    xrect = -random(700);
  }
  rect(brect, arect, 30, 30);
  arect = arect + 2;
  if (arect > 512) {
    arect = -random(700);
  }
  rect(drect, crect, 30, 30);
  crect = crect + 5;
  if (crect > 512) {
    crect = -random(700);
  }
  rect(erect, frect, 30, 30);
  erect = erect + 4;
  if (erect > 512) {
    erect = -random(700);
  }
  rect(grect, hrect, 30, 30);
  grect = grect + 4;
  if (grect > 512) {
    grect = -random(700);
  }
  rect(irect, jrect, 30, 30);
  irect = irect + 4;
  if (irect > 512) {
    irect = -random(700);
  }

  //Colisão
  if (dist(x, y, yrect, xrect) < 45) {
    x = 250;
    y = 480;
    Vidas--;
  }
  if (dist(x, y, brect, arect) < 45) {
    x = 250;
    y = 480;
    Vidas--;
  }
  if (dist(x, y, drect, crect) < 45) {
    x = 250;
    y = 480;
    Vidas--;
  }
  if (dist(x, y, erect, frect) < 45) {
    x = 250;
    y = 480;
    Vidas--;
  }
  if (dist(x, y, grect, hrect) < 45) {
    x = 250;
    y = 480;
    Vidas--;
  }
  if (dist(x, y, irect, jrect) < 45) {
    x = 250;
    y = 480;
    Vidas--;
  }
  if (dist(xd, yd, yrect, xrect) < 30 && estadoDisparo == true) {
    xrect = -random(700);
    Pontos = Pontos + 10;
  }
  if (dist(xd, yd, brect, arect) < 30 && estadoDisparo == true) {
    arect = -random(700);
    Pontos = Pontos + 10;
  }
  if (dist(xd, yd, drect, crect) < 30 && estadoDisparo==true) {
     crect = -random(700);
     Pontos=Pontos+10;
  }
  if (dist(xd, yd, erect, frect) < 30 && estadoDisparo==true) {
     erect = -random(700);
     Pontos=Pontos+10;
  }
  if (dist(xd, yd, grect, hrect) < 30 && estadoDisparo==true) {
     grect = -random(700);
     Pontos=Pontos+10;
  }
  if (dist(xd, yd, irect, jrect) < 30 && estadoDisparo==true) {
     irect = -random(700);
     Pontos=Pontos+10;
  }

  if (Vidas == 0) {
    fimdejogo();
  }
  
  if (Pontos == 200){
    vitoria();
  }
}

function instrucoes() {
  background(fundomenu);
  textSize(20)
  text("Esse jogo é direcionado para estudantes do 7º ano que" + "\n" + " estudam sobre Ciências para que" + "\n" + "trabalhem com a seguinte habilidade:" + "\n" + "Argumentar sobre a IMPORTÂNCIA" + "\n" + "da vacinação para a saúde pública," + "\n" + "com base em informações sobre a" + "\n" + " maneira COMO A VACINA ATUA" + "\n" + "no organismo e o PAPEL HISTÓRICO" + "\n" + "da vacinação para a manutenção" + "\n" + "da saúde individual e coletiva e para" + "\n" + "a erradicação de doenças." + "\n" + "Você está em uma vila no interior do" + "\n" + "país cheia de pessoas dominadas por" + "\n" + "uma doença horrível, descubra o que" + "\n" + "aconteceu enquanto tenta sobreviver.", 0, 30)
}

function acura(){
  background(fundomenu);
  textSize(20)
  text("Quando nos vacinamos, apresentamos ao nosso corpo um"+"\n"+" antígeno desconhecido.O corpo passa a produzir anticorpos"+"\n"+"contra ele. Nesse primeiro momento, a produção de anticorpos é"+"\n"+" relativamente lenta. Além da produção de anticorpos, o organismo"+"\n"+" produz células de memória, ou seja, células que, ao serem"+"\n"+" expostas novamente ao mesmo antígeno, serão capazes de"+"\n"+"produzir anticorpos mais rapidamente. A vacina é importante"+"\n"+"porque diminui a transmissão de doenças,"+"\n"+"o número de hospitalizações, os gastos"+"\n"+"com medicamentos,a mortandade e já"+"\n"+"acabou com doenças como sarampo,"+"\n"+"poliomielite, difteria e rubéola no Brasil,"+"\n"+"quantas doenças você acha que já"+"\n"+"não foram extintas por causa da vacina no mundo?",0,30)
}

function creditos() {
  background(fundomenu);
  textSize(20)
  text("Eduardo Freire - Programador.", 30, 200)
  image(criador, 120, 220);
}

function fimdejogo() {
  imageMode(CORNER)
  background(telafinal)
  textSize(40);
  text("Fim de Jogo", 130, 130);
  text("     Recarregue a página", 20, 200);
}

function vitoria(){
  imageMode(CORNER)
  background(telavitoria)
  textSize(40);
  text("Você ganhou !", 180, 50);
  text("     Recarregue a página", 70, 100);
}

function keyPressed() {
  if (key == "ArrowUp" && w > 150) {
    w = w - 100;
    opcao = opcao - 1;
  }
  if (key == "ArrowDown" && w < 320) {
    w = w + 100;
    opcao = opcao + 1;
  }
  if (key == "Enter") {
    tela = opcao;
  }
  if (key == "Escape") {
    tela = 0;
  }
}