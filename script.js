const emberField = document.querySelector('.embers');

function createEmber() {
  if (!emberField) return;
  const ember = document.createElement('span');
  ember.className = 'ember';
  ember.style.left = `${Math.random() * 100}%`;
  ember.style.animationDuration = `${7 + Math.random() * 9}s`;
  ember.style.animationDelay = `${Math.random() * 1.5}s`;
  ember.style.opacity = `${0.25 + Math.random() * 0.65}`;
  ember.style.width = ember.style.height = `${2 + Math.random() * 3}px`;
  emberField.appendChild(ember);
  setTimeout(() => ember.remove(), 17000);
}

for (let i = 0; i < 26; i++) createEmber();
setInterval(createEmber, 900);

const cards = document.querySelectorAll('.tome-card, .archive-list a');
cards.forEach(card => {
  card.addEventListener('mousemove', event => {
    const rect = card.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;
    card.style.background = `radial-gradient(circle at ${x}px ${y}px, rgba(201,168,93,.12), rgba(255,255,255,.035) 38%, rgba(255,255,255,.018) 100%)`;
  });
  card.addEventListener('mouseleave', () => {
    card.style.background = '';
  });
});
