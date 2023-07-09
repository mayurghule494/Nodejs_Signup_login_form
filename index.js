const loginForm = document.querySelector('.form-box.login form');

loginForm.addEventListener('submit', (event) => {
  event.preventDefault();

  const email = document.querySelector('.form-box.login input[type="email"]').value;
  const password = document.querySelector('.form-box.login input[type="password"]').value;

  fetch('/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ email, password })
  })
    .then(response => {
      if (response.ok) {
        return response.json();
      } else {
        throw new Error('Login failed');
      }
    })
    .then(data => {
      // Handle the successful login response
      console.log(data);
    })
    .catch(error => {
      // Handle the login error
      console.error(error);
    });
});

