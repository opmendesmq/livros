// Função para mostrar uma mensagem de confirmação quando um livro é comprado
function comprarLivro(titulo) {
    alert(`Você comprou o livro: ${titulo}`);
}

// Adicionando eventos de clique nos botões de "Comprar"
document.addEventListener('DOMContentLoaded', function () {
    const botoesCompra = document.querySelectorAll('.livro button');
    
    botoesCompra.forEach(function (botao) {
        botao.addEventListener('click', function () {
            const tituloLivro = this.parentElement.querySelector('h3').textContent;
            comprarLivro(tituloLivro);
        });
    });
});
