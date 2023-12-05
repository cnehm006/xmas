document.getElementById('submit-button').addEventListener('click', function () {
    var name = document.getElementById('name-input').value;
    var greetingElement = document.getElementById('greeting');
    if (name) {
        greetingElement.textContent = 'Merry Christmas, ' + name + '!';
        greetingElement.style.display = 'block';
        document.getElementById('name-form').style.display = 'none';
    } else {
        alert('Please enter your name.');
    }
});

document.body.addEventListener('mousemove', function (e) {
    var spark = document.createElement('div');
    spark.style.position = 'absolute';
    spark.style.left = e.clientX + 'px';
    spark.style.top = e.clientY + 'px';
    spark.style.width = '5px';
    spark.style.height = '5px';
    spark.style.borderRadius = '50%';
    spark.style.backgroundColor = 'gold';
    spark.style.boxShadow = '0 0 10px gold';
    spark.style.animation = 'spark 0.5s forwards';

    document.body.appendChild(spark);

    setTimeout(function () {
        document.body.removeChild(spark);
    }, 500);
});