function inicio() {
  console.log('Omma')
}
inicio()

const receitas = [];

receita1 = {
    id: 1,
    titulo: 'Bolo de cenoura',
    dificuldade: 'Fácil',   
    ingredientes: 'farinha',
    linkdoVideo: 'https://www.youtube.com/watch?v=1Q8fG0TtVAY',
    isVegan: false
}


receita2 = {
    id: 2,
    titulo: 'pizza',
    dificuldade: 'Médio',   
    ingredientes: 'Massa',
    linkdoVideo: 'https://www.youtube.com/watch?v=1Q8fG0TtVAY',
    isVegan: true
}

function cadastrarReceita(receita) {
    receitas.push(receita)
}

function exibirReceitas(receitas) {
    for (i= 0; i <= receitas.length; i++) {
        //console.log(receita[i].titulo, receita[i].ingredientes, receita[i].isVegan)
        console.log(receita.titulo[i])
    }
}

cadastrarReceita(receita1)
cadastrarReceita(receita2)

exibirReceitas(receitas)

