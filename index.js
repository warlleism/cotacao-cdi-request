const item = "";
const ptax2021USD = document.getElementById('ptax2021USD')
const ptax2021EUR = document.getElementById('ptax2021EUR')
const jan2021 = document.getElementById('jan2021')
const fev2021 = document.getElementById("fev2021")
const mar2021 = document.getElementById("mar2021")
const abr2021 = document.getElementById("abr2021")
const maio2021 = document.getElementById("maio2021")
const jun2021 = document.getElementById("jun2021")
const jul2021 = document.getElementById("jul2021")
const ago2021 = document.getElementById("ago2021")
const set2021 = document.getElementById("set2021")
const out2021 = document.getElementById("out2021")
const nov2021 = document.getElementById("nov2021")
const dez2021 = document.getElementById("dez2021")

const jan2022 = document.getElementById('jan2022')
const fev2022 = document.getElementById("fev2022")
const mar2022 = document.getElementById("mar2022")
const abr2022 = document.getElementById("abr2022")
const maio2022 = document.getElementById("maio2022")
const jun2022 = document.getElementById("jun2022")
const jul2022 = document.getElementById("jul2022")
const ago2022 = document.getElementById("ago2022")
const set2022 = document.getElementById("set2022")
const out2022 = document.getElementById("out2022")
const nov2022 = document.getElementById("nov2022")
const dez2022 = document.getElementById("dez2022")

var today = new Date();
var dia = (today.getDate()).toString();
var diaAnterior = (today.getDate() - 2).toString();
var mes = (today.getMonth() + 1).toString();
var ano = (today.getFullYear()).toString();

//Requisição feita em dia de feriado, então os dados não foram disponibilizados pelo banco central, por isso o atraso de 2 dias para o dia anterior
const urlUSD = `https://www.okanebox.com.br/api/cambioptax/hist/USD/${ano}${mes}${diaAnterior}/${ano}${mes}${dia}/`
const urlEUR = `https://www.okanebox.com.br/api/cambioptax/hist/EUR/${ano}${mes}${diaAnterior}/${ano}${mes}${dia}/`

const requestPTAXUSD = async () => {
    const dadosUsd = []
    const dadosEur = []

    await fetch(urlUSD)
        .then((res) => res.json())
        .then((dados) => dados.map(e => {
            dadosUsd.push(e.COTACAO_COMPRA)
        }))

    await fetch(urlEUR)
        .then((res) => res.json())
        .then((dados) => dados.map(e => {
            dadosEur.push(e.COTACAO_COMPRA)
        }))

    if (dadosUsd.length == 0) {
        dadosUsd.push(" ")
    }
    if (dadosEur.length == 0) {
        dadosEur.push(" ")
    }

    ptax2021USD.innerHTML = dadosUsd[0]
    ptax2021EUR.innerHTML = dadosEur[0]
}


const requestCDI = async () => {

    const camposTaxaJuros2021 = {
        jan: "",
        fev: "",
        mar: "",
        abr: "",
        maio: "",
        jun: "",
        jul: "",
        ago: "",
        set: "",
        out: "",
        nov: "",
        dez: "",
    }


    const camposTaxaJuros2022 = {
        jan: "",
        fev: "",
        mar: "",
        abr: "",
        maio: "",
        jun: "",
        jul: "",
        ago: "",
        set: "",
        out: "",
        nov: "",
        dez: "",
    }



    await fetch('https://api.bcb.gov.br/dados/serie/bcdata.sgs.4390/dados?formato=json')
        .then((res) => res.json())
        .then((dados) => {
            //Setando dados de 2021

            camposTaxaJuros2021.jan = dados[415].valor
            camposTaxaJuros2021.fev = dados[416].valor
            camposTaxaJuros2021.mar = dados[417].valor
            camposTaxaJuros2021.abr = dados[418].valor
            camposTaxaJuros2021.maio = dados[419].valor
            camposTaxaJuros2021.jun = dados[420].valor
            camposTaxaJuros2021.jul = dados[432].valor
            camposTaxaJuros2021.ago = dados[422].valor
            camposTaxaJuros2021.set = dados[423].valor
            camposTaxaJuros2021.out = dados[424].valor
            camposTaxaJuros2021.nov = dados[425].valor
            camposTaxaJuros2021.dez = dados[426].valor

            camposTaxaJuros2022.jan = dados[427].valor
            camposTaxaJuros2022.fev = dados[428].valor
            camposTaxaJuros2022.mar = dados[429].valor
            camposTaxaJuros2022.abr = dados[430].valor
            camposTaxaJuros2022.maio = dados[431].valor
            camposTaxaJuros2022.jun = dados[432].valor
            camposTaxaJuros2022.jul = dados[433] == undefined ? " " : dados[433].valor
            camposTaxaJuros2022.ago = dados[434] == undefined ? " " : dados[434].valor
            camposTaxaJuros2022.set = dados[435] == undefined ? " " : dados[435].valor
            camposTaxaJuros2022.out = dados[436] == undefined ? " " : dados[436].valor
            camposTaxaJuros2022.nov = dados[437] == undefined ? " " : dados[437].valor
            camposTaxaJuros2022.dez = dados[438] == undefined ? " " : dados[438].valor
        })


    jan2021.innerHTML = camposTaxaJuros2021.jan
    fev2021.innerHTML = camposTaxaJuros2021.fev
    mar2021.innerHTML = camposTaxaJuros2021.mar
    abr2021.innerHTML = camposTaxaJuros2021.abr
    maio2021.innerHTML = camposTaxaJuros2021.maio
    jun2021.innerHTML = camposTaxaJuros2021.jun
    jul2021.innerHTML = camposTaxaJuros2021.jul
    ago2021.innerHTML = camposTaxaJuros2021.ago
    set2021.innerHTML = camposTaxaJuros2021.set
    out2021.innerHTML = camposTaxaJuros2021.out
    nov2021.innerHTML = camposTaxaJuros2021.nov
    dez2021.innerHTML = camposTaxaJuros2021.dez

    jan2022.innerHTML = camposTaxaJuros2022.jan
    fev2022.innerHTML = camposTaxaJuros2022.fev
    mar2022.innerHTML = camposTaxaJuros2022.mar
    abr2022.innerHTML = camposTaxaJuros2022.abr
    maio2022.innerHTML = camposTaxaJuros2022.maio
    jun2022.innerHTML = camposTaxaJuros2022.jun
    jul2022.innerHTML = camposTaxaJuros2022.jul
    ago2022.innerHTML = camposTaxaJuros2022.ago
    set2022.innerHTML = camposTaxaJuros2022.set
    out2022.innerHTML = camposTaxaJuros2022.out
    nov2022.innerHTML = camposTaxaJuros2022.nov
    dez2022.innerHTML = camposTaxaJuros2022.dez


}

requestCDI()

requestPTAXUSD()


