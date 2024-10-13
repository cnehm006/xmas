function createSnowflake() {
    const snowflake = document.createElement('div');
    snowflake.classList.add('snowflake');
    const size = Math.random() * 5 + 2;
    snowflake.style.width = size + 'px';
    snowflake.style.height = size + 'px';
    snowflake.style.left = Math.random() * 100 + 'vw';
    snowflake.style.animation = 'fall ' + (Math.random() * 5 + 5) + 's linear forwards';

    document.getElementById('snow-container').appendChild(snowflake);

    setTimeout(() => {
        snowflake.remove();
    }, (Math.random() * 5 + 5) * 1000);
}

setInterval(createSnowflake, 200);

document.getElementById('submit-button').addEventListener('click', function () {
    var nameInput = document.getElementById('name-input');
    var name = nameInput.value.trim().toLowerCase();
    var greetingElement = document.getElementById('greeting');
    var grinchImage = document.getElementById('grinch-image');
    var grinchSound = document.getElementById('grinch-sound');
    var thumpSound = document.getElementById('thump-sound');

    if (name === 'melanie') {
        grinchSound.play();
        grinchImage.style.display = 'block';
        setTimeout(function() {
            grinchImage.style.display = 'none';
        }, 3000); 
    } else if (name === 'lourdes') {
        greetingElement.textContent = 'Merry Christmas, Lourdes!';
        greetingElement.style.display = 'block';
        greetingElement.style.animation = 'sink 5s forwards';
        greetingElement.style.animationTimingFunction = 'cubic-bezier(0.6, 0.05, 0.1, 1)';
        document.getElementById('name-form').style.display = 'none';
        setTimeout(function() {
            thumpSound.play();
        }, 4100);
    } else if (name === 'raphaelle' || name === 'raphaëlle') {
        document.body.classList.add('fade-out');
        setTimeout(function() {
            window.location.href = 'birthday/birthday.html';
        }, 1000);
    } else if (name === 'amoum') {
        greetingElement.textContent = 'Merry Christmas, ' + name.charAt(0).toUpperCase() + name.slice(1) + '... :)';
        greetingElement.style.display = 'block';
        greetingElement.classList.add('pulse-animation');
        setTimeout(function() {
            greetingElement.classList.add('am-effect');
            setTimeout(function() {
            greetingElement.classList.remove('am-effect');
            greetingElement.classList.add('quick-green');
            }, 5000);
        }, 50);
        
        document.getElementById('name-form').style.display = 'none';

    } else {
        if (name) {
            greetingElement.textContent = 'Merry Christmas, ' + name.charAt(0).toUpperCase() + name.slice(1) + '!';
            greetingElement.style.display = 'block';
            document.getElementById('name-form').style.display = 'none';
        } else {
            alert('Please enter your name.');
        }
    }
});

function updateCountdown() {
    const now = new Date();
    const currentYear = now.getFullYear();
    const christmas = new Date(`December 25, ${currentYear} 00:00:00`);

    if (now > christmas) {
        christmas.setFullYear(currentYear + 1);
    }

    const diff = christmas - now;

    let days = Math.floor(diff / (1000 * 60 * 60 * 24));
    let hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
    let minutes = Math.floor((diff / 1000 / 60) % 60);
    let seconds = Math.floor((diff / 1000) % 60);

    document.getElementById('christmas-countdown').innerText = `Christmas in: ${days} days ${hours} hours ${minutes} minutes ${seconds} seconds`;
}

setInterval(updateCountdown, 1000);