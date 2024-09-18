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

document.addEventListener('DOMContentLoaded', function() {
    // Get the buttons by their class names
    const steamButton = document.querySelector('.sign-in-button');
    const loginButton = document.querySelector('.sign-in-button1');

    // Add click event listener to the Steam button
    steamButton.addEventListener('click', function() {
        // Redirect to Steam login page (or perform other actions)
        window.location.href = '/NightKings/404';
    });

    // Add click event listener to the Login button
    loginButton.addEventListener('click', function() {
        // Redirect to login page or another URL
        window.location.href = 'id/log-in'; 
    });
});