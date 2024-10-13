startConfetti();

createBackgroundBalloons();

startGame();

const cakeImages = [
    'cake/cake5.png',
    'cake/cake4.png',
    'cake/cake3.png',
    'cake/cake2.png',
    'cake/cake1.png',
    'cake/cake0.png'
];
let cakeSlice = 0;
const birthdayCake = document.getElementById('birthday-cake');
birthdayCake.addEventListener('click', eatCakeSlice);

const popSound = new Audio('pop.mp3');


function startConfetti() {
    var duration = 5 * 1000; 
    var animationEnd = Date.now() + duration;
    var defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 4000 };

    function randomInRange(min, max) {
        return Math.random() * (max - min) + min;
    }

    var interval = setInterval(function() {
        var timeLeft = animationEnd - Date.now();

        if (timeLeft <= 0) {
            return clearInterval(interval);
        }

        var particleCount = 50 * (timeLeft / duration);
        confetti(Object.assign({}, defaults, {
            particleCount,
            origin: { x: randomInRange(0, 1), y: Math.random() - 0.2 }
        }));
    }, 250);
}

function createBackgroundBalloons() {
    const balloonContainer = document.getElementById('background-balloons');
    const colors = ['#FF5E78', '#FFD15C', '#8DEFFF', '#93F9B9', '#FF6B6B', '#B28DFF', '#FF8F87', '#87FFEB'];
    for (let i = 0; i < 20; i++) {
        let balloon = document.createElement('div');
        balloon.classList.add('background-balloon');
        balloon.style.left = Math.random() * 100 + 'vw';
        balloon.style.animationDelay = Math.random() * 5 + 's';
        balloon.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
        balloonContainer.appendChild(balloon);
    }
}

function eatCakeSlice() {
    cakeSlice++;
    if (cakeSlice < cakeImages.length) {
        birthdayCake.src = cakeImages[cakeSlice];
    } else {
        birthdayCake.style.display = 'none';
        alert('Yum! That was a delicious crumbl cookie!');
    }
}

function startGame() {
    const canvas = document.getElementById('game-canvas');
    const ctx = canvas.getContext('2d');

    let balloons = [];
    let animationFrameId;

    class GameBalloon {
        constructor(x, y, radius, color, speed) {
            this.x = x;
            this.y = y;
            this.radius = radius;
            this.color = color;
            this.speed = speed;
            this.popped = false;
        }

        draw() {
            ctx.beginPath();
            ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
            ctx.fillStyle = this.color;
            ctx.fill();
            ctx.closePath();
        }

        update() {
            this.y -= this.speed;
            this.draw();
        }
    }

    function createGameBalloon() {
        const radius = 15;
        const x = Math.random() * (canvas.width - radius * 2) + radius;
        const y = canvas.height + radius;
        const speed = Math.random() * 1 + 1;
        const colors = ['#FF5E78', '#FFD15C', '#8DEFFF', '#93F9B9'];
        const color = colors[Math.floor(Math.random() * colors.length)];
        balloons.push(new GameBalloon(x, y, radius, color, speed));
    }

    function animate() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        balloons.forEach((balloon, index) => {
            if (balloon.y + balloon.radius < 0 || balloon.popped) {
                balloons.splice(index, 1);
            } else {
                balloon.update();
            }
        });
        animationFrameId = requestAnimationFrame(animate);
    }

    canvas.addEventListener('click', function(event) {
        const rect = canvas.getBoundingClientRect();
        const mouseX = event.clientX - rect.left;
        const mouseY = event.clientY - rect.top;

        balloons.forEach(balloon => {
            const dist = Math.hypot(balloon.x - mouseX, balloon.y - mouseY);
            if (dist - balloon.radius < 1 && !balloon.popped) {
                balloon.popped = true;
                playPopSound();
            }
        });
    });

    function playPopSound() {
        popSound.currentTime = 0;
        popSound.play();
    }

    setInterval(createGameBalloon, 1000);
    animate();
}

var birthdaySong = document.getElementById('birthday-song');
birthdaySong.volume = 0.1;