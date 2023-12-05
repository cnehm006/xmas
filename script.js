// Snowflake creation function
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

// Personalized greeting functionality
document.getElementById('submit-button').addEventListener('click', function () {
    var name = document.getElementById('name-input').value.trim();
    var greetingElement = document.getElementById('greeting');
    var grinchImage = document.getElementById('grinch-image');
    var grinchSound = document.getElementById('grinch-sound');
    
    if (name.toLowerCase() === 'melanie') {
        grinchImage.style.display = 'block';
        grinchSound.play();
        setTimeout(function() {
            grinchImage.style.display = 'none';
        }, 4000); // Display the Grinch image for 4 seconds
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
