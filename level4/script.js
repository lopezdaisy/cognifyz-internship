// API Integration
fetch('https://jsonplaceholder.typicode.com/posts/1')
    .then(response => response.json())
    .then(data => {
        document.getElementById('apiData').innerHTML = `
            <h5>${data.title}</h5>
            <p>${data.body}</p>
        `;
    })
    .catch(error => {
        document.getElementById('apiData').innerHTML = 
            '<p class="text-danger">Error loading data</p>';
    });

// Form Validation
document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault();
    let isValid = true;

    // Name validation
    const name = document.getElementById('name').value;
    if (name.length < 3) {
        document.getElementById('nameError').textContent = 'Name must be at least 3 characters';
        isValid = false;
    } else {
        document.getElementById('nameError').textContent = '';
    }

    // Email validation
    const email = document.getElementById('email').value;
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
        document.getElementById('emailError').textContent = 'Please enter a valid email';
        isValid = false;
    } else {
        document.getElementById('emailError').textContent = '';
    }

    if (isValid) {
        alert('Form submitted successfully!');
        this.reset();
    }
});