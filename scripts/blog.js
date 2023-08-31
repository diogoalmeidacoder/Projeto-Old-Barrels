async function carregaPost(){
    const divPost = document.getElementById('post');
    const response = await fetch("https://jsonplaceholder.typicode.com/posts/1/");
    const postRecebido = await response.json()
    
    divPost.innerHTML = `
        <h3>Título do Post: ${postRecebido.title}</h3>
        <p>Conteúdo do Post: ${postRecebido.body}</p>`;
}
carregaPost();

async function carregaComentarios(){
    const divComentarios = document.getElementById('comentarios');
    const response = await fetch("https://jsonplaceholder.typicode.com/posts/1/comments");
    const comentariosRecebidos = await response.json()
    console.log(comentariosRecebidos)    

    comentariosRecebidos.forEach(comentario => {
        let divCadaComentario = document.createElement('div');
        divCadaComentario.innerHTML = `
            <h4>Nome: ${comentario.name}</h4>
            <h5>Email: ${comentario.email}</h5>
            <p>Conteúdo do Comentário: ${comentario.body}</p>`;

            divComentarios.appendChild(divCadaComentario);
        
    });
}
carregaComentarios();