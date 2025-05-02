document.getElementById('registrationForm').addEventListener('submit', function (e) {
    e.preventDefault();
  
    const password = document.getElementById('password').value;
    const confirm = document.getElementById('confirmPassword').value;
    const email = document.getElementById('email').value;
    const terms = document.getElementById('terms').checked;
  
    if (!validateEmail(email)) {
      alert("Please enter a valid email address.");
      return;
    }
  
    if (password !== confirm) {
      alert("Passwords do not match.");
      return;
    }
  
    if (!terms) {
      alert("You must agree to the terms and conditions.");
      return;
    }
  
    alert("Registration successful!");
    this.reset();
  });
  
  function validateEmail(email) {
    const re = /^[^@\s]+@[^@\s]+\.[^@\s]+$/;
    return re.test(email);
  }
  