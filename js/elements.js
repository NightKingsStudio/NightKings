document.addEventListener('DOMContentLoaded', function() {
    function loadHTML(url, elementId) {
        console.log(`Fetching ${url} to load into #${elementId}`);
        fetch(url)
            .then(response => {
                if (!response.ok) {
                    throw new Error(`Network response was not ok: ${response.statusText}`);
                }
                return response.text();
            })
            .then(data => {
                console.log(`Successfully loaded ${url}`);
                document.getElementById(elementId).innerHTML = data;
            })
            .catch(error => console.error('Error loading HTML:', error));
    }

    loadHTML('inc/header.html', 'header-placeholder');
    loadHTML('inc/footer.html', 'footer-placeholder');
});
