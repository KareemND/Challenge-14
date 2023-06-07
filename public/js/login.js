const loginForm = document.querySelector('#login-form');

loginForm.addEventListener('submit', (e) => {
  e.preventDefault();

  const username = document.querySelector('#username').value.trim();
  const password = document.querySelector('#password').value.trim();

  if (username && password) {
    fetch('/api/users/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ username, password }),
    })
      .then((response) => {
        if (response.ok) {
          document.location.replace('/dashboard');
        } else {
          alert('Failed to log in');
        }
      })
      .catch((err) => console.log(err));
  }
});
