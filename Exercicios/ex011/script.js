function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.getElementById('res')
    if(fano.value.length == 0 || Number(fano.value) > ano ){
        window.alert('[Erro] Verifique os dados e tente novamente!')
    }else{
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = document.createElement('img')//cria imagem no html
        img.setAttribute('id', 'foto')//cria imagem no html
        if(fsex[0].checked){
            genero = 'Homem'
            if(idade >=0 && idade < 10){
            //criança
            img.setAttribute('src','Imagens/')
            }else if(idade < 21){
                //jovem
                img.setAttribute('src','Imagens/')
            }else if (idade < 50){
                //adulto
                img.setAttribute('src','Imagens/')
            }else{
                //idoso
                img.setAttribute('src','Imagens/')
            }
        }else if (fsex[1].checked){
            genero = 'Mulher'
            if(idade >=0 && idade < 10){
                img.setAttribute('src','Imagens/')
                //criança
                }else if(idade < 21){
                    img.setAttribute('src','Imagens/')
                    //jovem
                }else if (idade < 50){
                    img.setAttribute('src','Imagens/')
                    //adulto
                }else{
                    //idoso
                    img.setAttribute('src','Imagens/')
                }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
        res.appendChild(img)
    }

}

/*Comando (o que voce quer atribuir).SetAttribute , realiza a atribuição no html através do js
Comando AppendChild faz aparecer na tela
*/