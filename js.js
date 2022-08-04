let pegabutton = document.querySelector('#button-calculate-imc');
pegabutton.addEventListener('click', handleButtonClick);

console.log(pegabutton); // verificando se conseguiu pegar o botão

let pegaAltura = document.querySelector('#informeSuaAltura'); // DOM está pegando o input altura
let pegaInputPeso = document.querySelector('#InformeSeuPeso'); // DOM está pegando o input peso
//pegaAltura.addEventListener('input', handleButtonClick) //  Escutar o valor inserido e acionar a função
//pegaInputPeso.addEventListener('input', handleButtonClick) //  Escutar o valor inserido e acionar a função


// função teste
function start() {
    console.log("hellow");
} start(); // chamando a função


// Função para calcular o imc e pegar os valores com o DOM //
// toFixed() arredonda os numeros e o replace() substitui um valor por outro.

function handleButtonClick() {
    let resulPeso = Number(pegaInputPeso.value);
    let resulAlt = Number(pegaAltura.value);
    let MostraResultado = document.querySelector('#resposta')
    let calco = resulPeso / (resulAlt * resulAlt);
    let formated = calco.toFixed(2).replace('.', ',')
    MostraResultado.innerHTML = formated;
    MostraLegenda(calco);
}

function MostraLegenda(calculo) {

    let pegaPara = document.querySelector('#resposta2')

    if (calculo >= 16 && calculo <= 16.9) {
         pegaPara.innerHTML = "Muito abaixo do peso!"
    }
    else if (calculo >= 17 && calculo <= 18.4){
        pegaPara.innerHTML = "Abaixo do peso"
    }
    else if (calculo >= 18.5 && calculo <= 24.9){
        pegaPara.innerHTML = "Peso normal!"
    }
    else if (calculo >= 25 && calculo <= 29.9){
        pegaPara.innerHTML = "Acima do peso"
    }
    else if (calculo >= 30 && calculo <= 34.9){
        pegaPara.innerHTML = "Obesidade Grau I"
    }
    else if (calculo >= 35 && calculo <= 40){
        pegaPara.innerHTML = "Obesidade Grau II!"
    }
    else if (calculo > 40){
        pegaPara.innerHTML = "Obesidade Grau III"
    }else{
        alert("este valor não existe na tabela!")
    }
}

