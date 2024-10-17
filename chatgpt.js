document.getElementById('showImageButton').addEventListener('click', function() {
    const image = document.getElementById('myImage');
    const audio = document.getElementById('myAudio');

    image.style.display = 'block'; // Show the image
    audio.play();
});
