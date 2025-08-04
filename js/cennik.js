
fetch('./data/cennik.md')
  .then(response => response.text())
  .then(markdown => {
    const html = markdown.replace(/---[\s\S]*?---/, '').trim();
    document.getElementById('cennik-content').innerHTML = html;
  })
  .catch(err => {
    console.error('Błąd ładowania cennika:', err);
    document.getElementById('cennik-content').innerHTML = '<p>Nie udało się załadować cennika.</p>';
  });
