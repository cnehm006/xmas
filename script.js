function createSnowflake() {
    const snowflake = document.createElement('div');
    snowflake.classList.add('snowflake');
    const size = Math.random() * 5 + 2; // Random size between 2px and 7px
    snowflake.style.width = size + 'px';
    snowflake.style.height = size + 'px';
    snowflake.style.left = Math.random() * 100 + 'vw';
    snowflake.style.animation = 'fall ' + (Math.random() * 5 + 5) + 's linear forwards';

    document.getElementById('snow-container').appendChild(snowflake);

    setTimeout(() => {
        snowflake.remove();
    }, (Math.random() * 5 + 5) * 1000); // Random duration between 5s and 10s
}

setInterval(createSnowflake, 200);

document.getElementById('submit-button').addEventListener('click', function () {
    var name = document.getElementById('name-input').value.trim();
    var greetingElement = document.getElementById('greeting');
    var grinchImage = document.getElementById('grinch-image');
    var grinchSound = document.getElementById('grinch-sound');
    var thumpSound = document.getElementById('thump-sound');
    
    if (name.toLowerCase() === 'melanie') {
        grinchSound.play();
        grinchImage.style.display = 'block';
        setTimeout(function() {
            grinchImage.style.display = 'none';
        }, 3000); 
    } else if (name.toLowerCase() === 'lourdes') {
        greetingElement.textContent = 'Merry Christmas, Lourdes!';
        greetingElement.style.display = 'block';
        greetingElement.style.animation = 'sink 5s forwards';
        greetingElement.style.animationTimingFunction = 'cubic-bezier(0.6, 0.05, 0.1, 1)';
        document.getElementById('name-form').style.display = 'none';
        setTimeout(function() {
            thumpSound.play();
        }, 4100);
    } else {
        if (name) {
            greetingElement.textContent = 'Merry Christmas, ' + name + '!';
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

    // If it's already Christmas
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