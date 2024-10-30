document.addEventListener("DOMContentLoaded", function () {
    fetch('./author-bio.html')
        .then(response => {
            if (!response.ok) throw new Error('Network response was not ok.');
            return response.text();
        })
        .then(data => {
            document.getElementById('ads').innerHTML += data;
        })
        .catch(error => console.error('Error loading ads:', error));
});
