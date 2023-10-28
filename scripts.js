

const key = "b01d1a80a638fea8f0c045ca8b3d19e2"

function colocarDadosNaTela (dados) {
   console.log (dados)
   document.querySelector ( ".cidade").innerHTML = "Tempo em " + dados.name
   document.querySelector (".temp").innerHTML = Math.floor(dados.main.temp) + "°C"
   document.querySelector (".texto-previsao").innerHTML = dados.weather [0].description
   document.querySelector (".Umidade").innerHTML = "Umidade " + dados.main.humidity + "%"
   document.querySelector(".img-previsao").src = `https://openweathermap.org/img/wn/${dados.weather [0].icon}.png`
}

async function buscarCidade (cidade) {
    const dados = await fetch (`https://api.openweathermap.org/data/2.5/weather?q=${cidade}&appid=${key}&lang=pt_br&units=metric`).then (resposta => resposta.json ())

colocarDadosNaTela (dados)}



function cliqueiNoBotao () {
   const cidade = document.querySelector (".input-cidade").value

     buscarCidade (cidade)    
}


