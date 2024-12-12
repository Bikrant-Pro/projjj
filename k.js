// Wait until the DOM is fully loaded
document.addEventListener('DOMContentLoaded', function() {
    // Form validation
    const form = document.querySelector('form');
    form.addEventListener('submit', function(e) {
        const regNo = document.getElementById('regNo').value;
        const studentName = document.getElementById('studentName').value;
        const email = document.getElementById('email').value;
        const contact = document.getElementById('contact').value;
        const birthDate = document.getElementById('birthDate').value;
        const gender = document.querySelector('input[name="Gender"]:checked');

        if (!regNo || !studentName || !email || !contact || !birthDate || !gender) {
            alert('Please fill in all the required fields.');
            e.preventDefault(); // Stop form submission
        } else {
            alert('Form submitted successfully!');
        }
    });

    // Focus animations for inputs
    const inputs = document.querySelectorAll('.input-group input, .input-group select');
    inputs.forEach(input => {
        input.addEventListener('focus', function() {
            this.style.borderColor = '#004d99';
        });
        input.addEventListener('blur', function() {
            this.style.borderColor = '#ccc';
        });
    });
});
