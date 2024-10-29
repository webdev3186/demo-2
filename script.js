// script.js
document.addEventListener("DOMContentLoaded", function () {
    // Load Ad Code
    fetch('author-bio.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById('ads').innerHTML += data;
        });
});
