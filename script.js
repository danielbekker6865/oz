document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('emailForm');
    form.addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent default form submission

        // Validate form fields (e.g., check if service is selected)
        const service = document.querySelector('select[name="service"]').value;
        if (!service) {
            alert('Please select a service before submitting.');
            return;
        }

        // Submit form using AJAX or let it submit naturally to 'send_email.php'
        const formData = new FormData(this);
        fetch(this.action, {
            method: 'POST',
            body: formData
        })
        .then(response => {
            if (response.ok) {
                // Display success message
                alert('Thank you for submitting!');
                // Reset the form
                form.reset();
            } else {
                throw new Error('Failed to submit form.');
            }
        })
        .catch(error => {
            console.error('Error:', error);
            alert('Failed to submit form. Please try again later.');
        });
    });
});
