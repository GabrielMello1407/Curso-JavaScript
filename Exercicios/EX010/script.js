function carregar(){
var mens = window.document.getElementById('msg')
var img = window.document.getElementById('imagem')
var data = new Date()
var hora = data.getHours()
msg.innerHTML = `Agora são ${hora} horas.`
if (hora >= 0 && hora < 12){
    //Bom Dia!
    img.src = 'Imagens/dia.jpg'
    document.body.style.background = '#d8f1ae'
}else if (hora >=12 && hora <18) {
    //boa tarde
    img.src = 'Imagens/tarde.jpg'
    document.body.style.background = '#eef126c9'
}
else{
    img.src = 'Imagens/noite.jpg'
    document.body.style.background = '#262729'
    //boa noite
}
}