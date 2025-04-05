import './styles.scss';

console.log('Hello, Webpack!');

document.addEventListener('DOMContentLoaded', () => {
  const themeToggle = document.getElementById('themeToggle');

  // Перевіряємо локальне сховище на збережену тему
  if (localStorage.getItem('theme') === 'dark') {
    document.body.classList.add('dark-theme');
  }

  themeToggle.addEventListener('click', () => {
    document.body.classList.toggle('dark-theme');

    // Зберігаємо вибір користувача
    if (document.body.classList.contains('dark-theme')) {
      localStorage.setItem('theme', 'dark');
    } else {
      localStorage.setItem('theme', 'light');
    }
  });
});
