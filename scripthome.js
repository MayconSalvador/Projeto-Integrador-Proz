

const imgs = document.querySelector('.container');
const img = document.querySelectorAll('.container img');
const imgWidth = img[0].clientWidth; // Obtém a largura da primeira imagem

let idx = 0;
function carrossel() {
  idx++;
  if (idx > img.length - 1) {
    idx = 0;
  }
  imgs.style.transform = `translateX(-${idx * imgWidth}px)`;
  imgs.style.transition = 'transform 0.5s ease-in-out'; // Adiciona transição suave
}
setInterval(carrossel, 3000);


const images = document.querySelectorAll('.highlight-posts .imagem');

images.forEach(image => {
    image.addEventListener('mousemove', (event) => {
        const x = event.clientX - image.offsetLeft;
        const y = event.clientY - image.offsetTop;

        // Calcula o centro da imagem
        const centerX = image.clientWidth / 2;
        const centerY = image.clientHeight / 2;

        // Calcula a distância do mouse em relação ao centro
        const dx = x - centerX;
        const dy = y - centerY;

        // Aplica o efeito de hover
        image.style.transformOrigin = `${dx}px ${dy}px`;
        image.style.transform = "scale(1.1)"; // Aumenta a escala para 110%
    });

    image.addEventListener('mouseleave', () => {
        // Remove todos os estilos de transformação para garantir o estado inicial
        image.style.transform = '';
        image.style.transformOrigin = '';
    });
});