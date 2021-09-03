console.log("Hello world" );

var foto1=document.querySelector('.foto1');
var titulo=document.querySelector('h1');
var msg01=document.querySelector('#msgJs01 button');
var j = 0;
//functn de tmep
function mostraFgur() {
    if(j<3){
        setTimeout(function() {
         j++;
         console.log(j);
         document.querySelector(".foto" + j).style.opacity='1';
         mostraFgur();
        }, 1000)
    }
}
titulo.onmouseover=function(){
    //document.querySelector("#msgJs01").style.top='10vh';
    document.querySelector("#msgJs01").style.display='block';
    document.querySelector('#msgJs01').style.opacity='1';
}

msg01.onclick=function () {
    //document.querySelector("#msgJs01").style.top='100%';
    //document.querySelector("#msgJs01").style.opacity='0';
    document.querySelector("#msgJs01").style.display='none';
    mostraFgur()
}

//data hra header p
var tempo=new Date();
var saudacao=document.querySelector('header p');
var dia =tempo.getDate();
var mes =tempo.getMonth();
var semana=tempo.getDay();
var ano=tempo.getFullYear();

var diaDaSemana=['Domingo',
'Segunda-Feira',
'Terça-Feira',
'Quarta-Feira',
'Quinta-Feira',
'Sexta-Feira',
'Sábado' ]
var mesDoAno=['Janeiro',
'Fevereiro',
'Março',
'Abril',
'Maio',
'Junho',
'Julho',
'Agosto',
'Setembro',
'Outubro',
'Novembro',
'Dezembro']

saudacao.innerHTML= 'Manaus, '+ dia + ' de ' + mesDoAno[mes] +' de '+ ano