addEventListener('click', function() {
    superheroes = document.getElementById('supersearch');

    const httpRequest = new XMLHttpRequest();
    let url = "http://localhost/info2180-lab4/superheroes.php";
    httpRequest.onreadystatechange = alertHeroes;
    httpRequest.open('GET', url);
    httpRequest.send();

    function alertHeroes() {
        if(httpRequest.readyState === XMLHttpRequest.DONE) {
            if(httpRequest.status === 200) {
                let response = document.getElementById('result');
                response = httpRequest.responseText;
                alert(response);
            } else {
                alert('Sorry! There was a problem with the request.');
            }
        }
    }
});