$(document).ready(function () {
    function sanitizeInput(input) {
        const temp = document.createElement('div');
        temp.textContent = input;
        return temp.innerHTML;
    }

    const superheroesList = [
        "Iron Man",
        "Captain America",
        "Thor",
        "Hulk",
        "Black Widow",
        "Hawkeye",
        "Spider-Man",
        "Doctor Strange",
        "Black Panther",
        "Captain Marvel"
    ];

    $('#supersearch').on('click', function() {
        const searchInput = sanitizeInput($('#searchInput').val().trim());
        const outputDiv = $('#result');
        
        // Clear previous results but keep the heading and separator
        outputDiv.html('<h2>RESULT</h2><hr>');

        if(!searchInput) {
            outputDiv.append('<ul>');
            superheroesList.forEach(hero => {
                outputDiv.append(`<li>${hero}</li>`);
            });
            outputDiv.append('</ul>');
            return; // Exit the function early
        }
        // Define the base URL
        let url = 'http://localhost/info2180-lab4/superheroes.php';
        console.log(searchInput);
        // Perform the AJAX request
        $.ajax({
            url: url, 
            type: 'GET',
            data: { query: searchInput || '' }, // Send query or empty to get all
            dataType: 'json',
            success: function(data) {
                console.log(data);
                if (data && data.alias) {
                    // Loop through each superhero and display them
                    $("#result").html(
                    "<h2>RESULT</h2>" +
                    "<h3>" + data.alias + "</h3>" +
                    "<h4> A.K.A " + data.name + "</h4>" +
                    "<p>" + data.biography + "</p>"
                );
            } else {
                outputDiv.html("<h2>RESULT</h2><hr><h5>SUPERHERO NOT FOUND</h5>");
            }
        }
        });
    });
});
