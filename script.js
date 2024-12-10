// Script para abrir e fechar o modal de imagens com descrição

// Pegando todos os elementos de imagem da galeria
const images = document.querySelectorAll('.gallery-img');
const modal = document.getElementById('imageModal');
const modalImg = document.getElementById('modalImage');
const modalDescription = document.getElementById('modalDescription');
const closeModal = document.getElementsByClassName('close')[0];

// Função para abrir o modal com a imagem clicada e mostrar a descrição
images.forEach(image => {
    image.addEventListener('click', function () {
        modal.style.display = "block";
        modalImg.src = this.src;
        modalDescription.textContent = this.getAttribute('data-description');
    });
});

// Função para fechar o modal
closeModal.addEventListener('click', function () {
    modal.style.display = "none";
});

// Fechar o modal se o usuário clicar fora da imagem
window.addEventListener('click', function (event) {
    if (event.target === modal) {
        modal.style.display = "none";
    }
});
