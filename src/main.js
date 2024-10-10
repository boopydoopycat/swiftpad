const toggleButton = document.getElementById('toggle-mode-btn');

toggleButton.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
});
