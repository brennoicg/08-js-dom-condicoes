function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var resultado = document.querySelector('div#resultado')
    if(fano.value.length == 0 || fano.value > ano){
        window.alert('Verifique os dados e tente novamente!!!')
    }else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        resultado.innerHTML = `Idade calculada: ${idade}`
    }
}