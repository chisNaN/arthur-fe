var bgColor = localStorage.getItem('background') || 'black';
document.body.style.backgroundColor = bgColor;
document.body.style.color = bgColor === 'white' ? 'black' : 'white';