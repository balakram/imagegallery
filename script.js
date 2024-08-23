document.addEventListener('DOMContentLoaded', function () {
    const themeToggle = document.getElementById('theme-toggle');
    const body = document.body;
    const toggleButton = document.getElementById('toggle');
    const sidebar = document.getElementById('sidebar');
    const categorySelect = document.getElementById('category');
    const figures = document.querySelectorAll('figure');
    const sidebarToggle = document.getElementById('sidebar-toggle');
    const menuIcon = document.getElementById('menu-icon');
    const closeIcon = document.getElementById('close-icon');
    const signatureImgLight = document.getElementById('signature-img-light');
    const signatureImgDark = document.getElementById('signature-img-dark');


    // Initial setup: show the correct signature image based on the current theme
    if (body.classList.contains('dark-mode')) {
        signatureImgLight.style.display = 'none';
        signatureImgDark.style.display = 'block';
    } else {
        signatureImgLight.style.display = 'block';
        signatureImgDark.style.display = 'none';
    }

    themeToggle.addEventListener('click', () => {
        body.classList.toggle('dark-mode');
        // Toggle signature image based on the mode
        if (body.classList.contains('dark-mode')) {
            signatureImgLight.style.display = 'none';
            signatureImgDark.style.display = 'block';
        } else {
            signatureImgLight.style.display = 'block';
            signatureImgDark.style.display = 'none';
        }
    });

    toggleButton.addEventListener('click', () => {
        sidebar.classList.toggle('open');
    });

    categorySelect.addEventListener('change', (event) => {
        const selectedCategory = event.target.value;
        figures.forEach(figure => {
            if (selectedCategory === '' || figure.dataset.category === selectedCategory) {
                figure.style.display = '';
            } else {
                figure.style.display = 'none';
            }
        });
    });

    sidebarToggle.addEventListener('click', () => {
        sidebar.classList.toggle('open');
        // Toggle icons based on sidebar state
        if (sidebar.classList.contains('open')) {
            menuIcon.style.display = 'none';
            closeIcon.style.display = 'block';
        } else {
            menuIcon.style.display = 'block';
            closeIcon.style.display = 'none';
        }
    });
});
