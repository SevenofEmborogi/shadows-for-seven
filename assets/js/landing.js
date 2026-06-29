document.querySelector('.raven-button')?.addEventListener('click', (event) => {
  event.preventDefault();
  document.body.classList.add('leaving');
  setTimeout(() => { window.location.href = event.currentTarget.href; }, 420);
});
