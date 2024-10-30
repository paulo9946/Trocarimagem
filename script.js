//Selecionar a imagem principal
const imagem = document.getElementById('imagem');


//selecionar os botões
const botao1 =document.getElementById('botao1');
const botao2 =document.getElementById('botao2');
const botao3 =document.getElementById('botao3');

//Função para trocar a imagem
function trocarImagem(img){
    imagem.src = img;
}
//Adicionar eventos aos botões para trocar a imagem
botao1.addEventListener('click', function(){
    trocarImagem('imagem1.jpg');
})
botao2.addEventListener('click', function(){
    trocarImagem('imagem2.jpg');
})

botao3.addEventListener('click', function(){
    trocarImagem('imagem3.jpg');
})

const botoes=document.querySelectorAll('.botoes button')

function ativarBotao(botao){
    botoes.forEach(b=> b.classList.remove('ativo'));
    botao.classList.add('ativo')
}

//adicionar eventos aos botões para trocar a imagem e mudar a cor do botão.
botoes.forEach((botao, index)=>{
    botao.addEventListener('click', function(){
        trocarImagem(`imagem${index+1}.jpg`);
            ativarBotao(botao)
    })
})