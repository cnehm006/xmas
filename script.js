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