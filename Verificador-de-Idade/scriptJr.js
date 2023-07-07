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
        var gênero = ''
        var img = document.createElement('img')
        img.setAttribute ('id', 'foto')
        if (fsex[0].checked) {
            gênero = 'Homem'
            if (idade >=0 && idade < 13) {
                //Criança
                img.setAttribute('src', 'fotos/bebehkkk.png')
            } else if (idade < 21){
                //Jovem
                img.setAttribute('src', 'fotos/jovemkkk.png')
            } else if (idade < 50) {
                //Adulto
                img.setAttribute('src', 'fotos/adultokkk.png')
            } else {
                //Idoso
                img.setAttribute('src', 'fotos/velhokkk.png')
            }
        } else if (fsex[1].checked) {
            gênero = 'Mulher'
            if (idade >=0 && idade < 13) {
                //Criança
                img.setAttribute('src', 'fotos/bebefkkk.png')
            } else if (idade < 21){
                //Jovem
                img.setAttribute('src', 'fotos/jovemfkkk.png')
            } else if (idade < 50) {
                //Adulto
                img.setAttribute('src', 'fotos/adultakkk.png')
            } else {
                //Idoso
                img.setAttribute('src', 'fotos/veiakkk.png')
            }
        }

        resultado.innerHTML = `Detectamos ${gênero} com ${idade} anos!!!`
        resultado.appendChild(img)
    }
}