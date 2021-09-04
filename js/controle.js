console.log("Hello world");

var foto1 = document.querySelector('.foto1');
var titulo = document.querySelector('h1');
var msg01 = document.querySelector('#msgJs01 button');
var j = 0;
//functn de tmep
function mostraFgur() {
    if (j < 3) {
        setTimeout(function () {
            j++;
            console.log(j);
            document.querySelector(".foto" + j).style.opacity = '1';
            mostraFgur();
        }, 1000)
    }
}
titulo.onmouseover = function () {
    //document.querySelector("#msgJs01").style.top='10vh';
    document.querySelector("#msgJs01").style.display = 'block';
    document.querySelector('#msgJs01').style.opacity = '1';
}

msg01.onclick = function () {
    //document.querySelector("#msgJs01").style.top='100%';
    //document.querySelector("#msgJs01").style.opacity='0';
    document.querySelector("#msgJs01").style.display = 'none';
    mostraFgur()
}

//data hra header p
var tempo = new Date();
var saudacao = document.querySelector('header p');

var msgSemana = document.querySelector('#semana');
var dia = tempo.getDate();
var mes = tempo.getMonth();
var semana = tempo.getDay();
var ano = tempo.getFullYear();

var diaDaSemana = ['Domingo', 'Segunda-Feira', 'Terça-Feira', 'Quarta-Feira', 'Quinta-Feira', 'Sexta-Feira', 'Sábado'];
var mesDoAno = ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'];


//diaDaSemana[semana] != 'Domingo' && //diaDaSemana[semana] != 'Sabado' ? diaDaSemana[semana] = diaDaSemana[semana] + '-feira' : null;

var exibeRelogio = setInterval(function () {
    timer();
}, 1000);

function timer() {
    //horario relogio
    var horario = new Date();
    var hora, minutos, segundos, relogio;
    hora = horario.getHours();
    minutos = horario.getMinutes();
    segundos = horario.getSeconds();
    hora < 10 ? hora = '0' + hora : null;
    minutos < 10 ? minutos = '0' + minutos : null;
    segundos < 10 ? segundos = '0' + segundos : null;
    relogio = hora + ':' + minutos + ':' + segundos;
    //console.log(relogio);
    msgSemana.innerHTML = diaDaSemana[semana] + ' - ' + relogio;
}
timer();

saudacao.innerHTML = 'Manaus, ' + dia + ' de ' + mesDoAno[mes] + ' de ' + ano
dia < 10 ? dia = '0' + dia : null;

//Troca de imagens    
var foto, btbr, bteua, btfr, btjp;
foto = document.querySelector('.boxImg02 img');

//identifica bot~ao e faz funcao on click
//bteua = document.querySelector('#bteua');
//bteua.onclick = function () {
//    foto.src = '../imagens/paises/eua.jpg';
//}

//ABAIXO 'E MUITO IMPORTANTE!!!.. BOTOES FOREACH
var paises = ['brasil.jpg', 'eua.jpg', 'franca.jpg', 'japao.jpg'];
document.querySelectorAll(".boxBt02 .btn").forEach(function (obj, index) {
    obj.onclick = function () {
        console.log(this, index);
        foto.src = '../imagens/paises/' + paises[index];
    }
});

//Exibir uma das fotos sorteada ao carregar  a pa'gina
var sorteio = parseInt(Math.random() * paises.length);
foto.src = '../imagens/paises/' + paises[sorteio];
console.log(sorteio);
document.querySelectorAll(".boxBt02 .btn")[sorteio].style.backgroundColor = 'green';

paises.forEach(function (obj, index) {
    console.log(obj);
});