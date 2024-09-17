document.addEventListener('DOMContentLoaded', function() {
    function loadHTML(url, elementId) {
        fetch(url)
            .then(response => response.text())
            .then(data => document.getElementById(elementId).innerHTML = data)
            .catch(error => console.error('Error loading HTML:', error));
    }

    loadHTML('includes/header.html', 'header-placeholder');
    loadHTML('includes/footer.html', 'footer-placeholder');
});
