const imagemBanner = document.getElementById('bannerImg');
const caminhoDasImagens = [
    {src:"./imagens/banner1.jpg"},
    {src:"./imagens/banner2.jpg"},
    {src:"./imagens/banner3.jpg"},
    {src:"./imagens/banner4.jpg"}
]

let indiceBannerAtual = 0;
function atualizaBanner(indice){
    imagemBanner.src = caminhoDasImagens[indice].src;
    // console.log("Imagem atualizada!")
}

// atualizaBanner(1);

function nextSlide(){
    if (indiceBannerAtual == caminhoDasImagens.length - 1){
        indiceBannerAtual = 0
        
    } else {
        indiceBannerAtual = indiceBannerAtual + 1
    }
    atualizaBanner(indiceBannerAtual);
}

let meuIntervalo = setInterval(nextSlide,2000);

const imagens = document.getElementsByClassName("minhaclasseimg");
imagens.forEach(cadaImg => {
    // console.log(cadaImg);
});
