//capturar valores HTML, input

let posts = []

function criarPost() {
    event.preventDefault()//para nao recarregar a página e apagar
    const inputTitle = document.querySelectorAll("#inputTitle")[0]//para pegar o da primeira posição
    const inputAutor = document.querySelectorAll("#inputAutor")[0]
    const textarea = document.querySelectorAll("#textarea")[0]
    const inputImg = document.querySelectorAll("#inputImg")
    
    let objetoPost = {
        titulo: inputTitle.value,
        autor: inputAutor.value,
        conteudo: textarea.value,
        imagem: inputImg.value
    }

    posts.push(objetoPost)

   let titlePost = objetoPost.titulo;
   let autorPost = objetoPost.autor;
   let conteudoPost = objetoPost.conteudo;
   let imgPost = objetoPost.imagem;

    
   //limpar:
   inputTitle.value = ""
   inputAutor.value = ""
   textarea.value = ""
   inputImg.value = ""

console.log(titlePost,autorPost,conteudoPost,imgPost)
let postsBlog = document.querySelector("#blog")

postsBlog.innerHTML += `<h2> ${titlePost} </h2> <br> <h3>${autorPost}</h3> <br> <p>${conteudoPost}</p><br>
<img src="&{imgPost}">`


} 