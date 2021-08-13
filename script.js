const body = document.body;

setInterval(rainFall, 10);
function rainFall(){
    const waterDrop = document.createElement('i');

    waterDrop.classList.add('fas');
    waterDrop.classList.add('fa-tint');
    waterDrop.style.fontSize = Math.random() * 10 + 'px';
    waterDrop.style.animationDuration = Math.random() * 2 + 's';
    waterDrop.style.opacity = Math.random() + 0.3;
    body.appendChild(waterDrop);
    waterDrop.style.left = Math.random() * window.innerWidth + "px";

    setTimeout(() => {
        waterDrop.remove();
    }, 6000)
}



