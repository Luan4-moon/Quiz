const toggleBtn = document.getElementById('toggle-dark');

if (localStorage.getItem('dark-mode') === 'true') {
    document.body.classList.add('dark-mode');
    toggleBtn.textContent = '☀️';
}
toggleBtn.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    const isDark = document.body.classList.contains('dark-mode');
    toggleBtn.textContent = isDark ? '☀️' : '🌙';
    localStorage.setItem('dark-mode', isDark);
});
