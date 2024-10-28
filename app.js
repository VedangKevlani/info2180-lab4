document.getElementById('supersearch').addEventListener('click', function() {
    const searchInput = document.getElementById('searchInput').value.trim();
    const outputDiv = document.getElementById('output');
    
    // Clear previous results
    outputDiv.innerHTML = '';

    // Set up XMLHttpRequest
    const httpRequest = new XMLHttpRequest();
    let url = 'http://localhost/info2180-lab4/superheroes.php';
    
    // If search input is not empty, add it as a query parameter
    if (searchInput !== '') {
        url += `?query=${encodeURIComponent(searchInput)}`;
    }

    httpRequest.onreadystatechange = function() {
        if (httpRequest.readyState === XMLHttpRequest.DONE) {
            if (httpRequest.status === 200) {
                // Display response text in the output div
                outputDiv.innerHTML = httpRequest.responseText;
                console.log(outputDiv.innerHTML);
            } else {
                outputDiv.innerHTML = 'Sorry! There was a problem with the request.';
            }
        }
    };

    httpRequest.open('GET', url, true);
    httpRequest.send();
});
