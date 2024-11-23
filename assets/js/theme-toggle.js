const themeToggle = document.getElementById('theme-toggle');

themeToggle.addEventListener('change', () => {
    if (themeToggle.checked) {
        document.body.classList.remove('light');
        document.body.classList.add('dark');
        document.documentElement.classList.add('dark');
    } else {
        document.body.classList.remove('dark');
        document.body.classList.add('light');
        document.documentElement.classList.remove('dark');
    }
});
