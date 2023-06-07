const logoutButton = document.querySelector('#logout-button');

logoutButton.addEventListener('click', (e) => {
  e.preventDefault();

  fetch('/api/users/logout', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
  })
    .then((response) => {
      if (response.ok) {
        document.location.replace('/');
      } else {
        alert('Failed to log out');
      }
    })
    .catch((err) => console.log(err));
});
