    let btnIMC = document.querySelector('#botaoIMC')
    btnIMC.addEventListener('click', calcularIMC)

    function calcularIMC() {
        let peso = Number(document.getElementById('peso').value)
        let altura = Number(document.getElementById('altura').value)
        let resultado = document.getElementById('resultado')

        total = peso / (altura * altura)

        console.log(total)

        if (total < 18.5) {
            resultado.innerHTML = `<p> Você está <b>abaixo</b> do peso</p>`
        } else if ((total >= 18.5) && (total <= 24.9)) {
            resultado.innerHTML = `<p>Você está com peso <b>normal</b></p>`
        } else if ((total >= 25) && (total <= 29.9)) {
            resultado.innerHTML = `<p>Você está <b>acima</b> do peso</p>`
        } else if ((total >= 30) && (total <= 34.9)) {
            resultado.innerHTML = `<p>Você está com <b>Obesidade Grau I</b></p>`
        } else {
            resultado.innerHTML = `<p>Você está com <b>Obesidade Grau II</b></p>`
        }

        console.log(typeof (peso))
        console.log(typeof (altura))
        console.log(typeof (total))
    }

    let btnMaior = document.querySelector('#botaoMaior')
    btnMaior.addEventListener('click', calcularMaior)

    function calcularMaior() {
        let num1 = Number(document.getElementById('primeiroNumero').value)
        let num2 = Number(document.getElementById('segundoNumero').value)
        let num3 = Number(document.getElementById('terceiroNumero').value)
        resMaior = document.getElementById('resMaior')

        if ((num1 > num2) && (num1 > num3)) {
            resMaior.innerHTML = `<p>O Maior número digitado é ${num1}`
        } else if ((num2 > num1) && (num2 > num3)) {
            resMaior.innerHTML = `<p>O Maior número digitado é ${num2}`
        } else {
            resMaior.innerHTML = `<p>O Maior número digitado é ${num3}`
        }
    }

    let btnZerar = document.querySelector('#btnZerarIMC')
    btnZerar.addEventListener('click', zerarIMC)

    function zerarIMC() {
        document.getElementById('peso').value = ''
        document.getElementById('altura').value = ''
        document.getElementById('resultado').innerHTML = ''
    }

    let btnZerarMaior = document.querySelector('#btnZerarMaior')
    btnZerarMaior.addEventListener('click', zerarMaior)

    function zerarMaior() {
        document.getElementById('primeiroNumero').value = ''
        document.getElementById('segundoNumero').value = ''
        document.getElementById('terceiroNumero').value = ''
        document.getElementById('resMaior').innerHTML = ''
    }