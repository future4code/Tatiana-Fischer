//capturar valores HTML, input

let posts = []

function criarPost() {
    const inputTitle = document.querySelectorAll("#inputTitle")[0]
    const inputAutor = document.querySelectorAll("#inputAutor")[0]
    const textarea = document.querySelectorAll("#textarea")[0]
    
    let objetoPost = {
        titulo: inputTitle.value,
        autor: inputAutor.value,
        conteudo: textarea.value
    }

    posts.push(objetoPost)

   const titlePost = objetoPost.titulo;
   const autorPost = objetoPost.titulo;
   const conteudoPost = objetoPost.titulo;
   
  console.log(posts)
    
   //limpar:
   inputTitle.value = ""
   inputAutor.value = ""
   textarea.value = ""

   
} 


