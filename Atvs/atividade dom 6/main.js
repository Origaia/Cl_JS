const div = document.getElementById("div-g")

const imagem = document.getElementById("img")

const name = document.getElementById("name")

const prof = document.getElementById("profissao")

let src_img= [
    'users/1.jpg',
    'users/2.jpg',
    'users/3.jpg',
    'users/4.jpg',
    'users/5.jpg',
    'users/6.jpg',
    'users/7.jpg',
    'users/8.jpg',
    'users/9.jpg',
    'users/10.jpg'
]
let src

let name_al = [
    'Maria ',
    'Alice ',
    'Mariana ',
    'Leticia ',
    'Marcela ',
    'João ',
    'Jose ',
    'Gabriel ',
    'Felipe ',
    'Gustavo '
]
let nm

let sobrenome_al = [
    'Silva',
    'Santos',
    'Pereira',
    'Oliveira',
    'Costa',
    'Rodrigues',
    'Ferreira',
    'Almeida',
    'Carvalho',
    'Gonçalves'
]
let sbr

let prof_al = [
    'Médico',
    'Professor',
    'Engenheiro',
    'Advogado',
    'Designer gráfico',
    'Chef de cozinha',
    'Jornalista',
    'Eletricista',
    'Ator/atriz',
    'Bombeiro'
]
let prf

const butt = document.getElementById("gerador")

butt.addEventListener("click", 
function (){
    imagem.src=src_img[Match.random()*10-1]

    name.innerHTML=${name_al[Match.random()*10-1]}$+${name_al[Match.random()*10-1]}$


})