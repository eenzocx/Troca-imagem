document.addEventListener('DOMContentLoaded', function() {
    var button = document.getElementById('trocaImagem');
    var image = document.querySelector('img');
    var imageIndex = 0;
    var images = ['download.jpg', 'kek.png', 'Mídia.jpg']; 
    button.addEventListener('click', function() {
        image.src = images[imageIndex];
        imageIndex = (imageIndex + 1) % images.length; 
    });
});