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

                // After loading header HTML, set up event listeners
                setupEventListeners();
            })
            .catch(error => console.error('Error loading HTML:', error));
    }

    loadHTML('inc/header.html', 'header-placeholder');
    loadHTML('inc/footer.html', 'footer-placeholder');

    function setupEventListeners() {
        console.log("DOM fully loaded and parsed");

        const accountDropdownButton = document.getElementById('accountDropdown');
        const dropdownContent = document.getElementById('dropdownContent');

        if (accountDropdownButton && dropdownContent) {
            accountDropdownButton.addEventListener('click', function() {
                const isExpanded = accountDropdownButton.getAttribute('aria-expanded') === 'true';
                accountDropdownButton.setAttribute('aria-expanded', !isExpanded);
                dropdownContent.style.display = isExpanded ? 'none' : 'block';
            });

            document.addEventListener('click', function(event) {
                if (!accountDropdownButton.contains(event.target) && !dropdownContent.contains(event.target)) {
                    dropdownContent.style.display = 'none';
                    accountDropdownButton.setAttribute('aria-expanded', 'false');
                }
            });
        } else {
            console.error('Dropdown elements not found');
        }
    }
});