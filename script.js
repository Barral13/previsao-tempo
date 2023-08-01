

const key = "d1a110b878f69b40e9daa2000c50e8a5";

function colocarDadosNaTela(dados) {
    document.querySelector('.city').innerHTML = "Tempo em " + dados.name;
    document.querySelector('.temp').innerHTML = Math.floor(dados.main.temp) + "°C";
    document.querySelector('.texto-previsao').innerHTML = dados.weather[0].description;
    document.querySelector('.umidade').innerHTML = dados.main.humidity + "% " + " de Umidade";
    document.querySelector(".img-previsao").src = `https://openweathermap.org/img/wn/${dados.weather[0].icon}.png`

}

async function BuscarCidade(cidade) {

    if (cidade === '') {
        alert('Insira uma cidade válida.');
        return;
    }

    const dados = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cidade}&appid=${key}&lang=pt_br&units=metric`).then( resposta  => resposta.json())

    colocarDadosNaTela(dados)
}

function cliqueiNoBotao() {

    const cidade = document.querySelector('.input-city').value;

    BuscarCidade (cidade)
}