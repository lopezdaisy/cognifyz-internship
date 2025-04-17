const colors = ['#2196F3', '#1565C0', '#64B5F6', '#0D47A1', '#BBDEFB'];
const button = document.getElementById('colorButton');

button.addEventListener('click', function() {
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    document.body.style.backgroundColor = randomColor;
});