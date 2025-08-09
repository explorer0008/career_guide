// Collect data from form.html on submit
document.addEventListener('DOMContentLoaded', function() {
    var form = document.querySelector('form');
    if (form) {
        form.addEventListener('submit', function(e) {
            // Prevent default if you want to handle data in JS only
            // e.preventDefault();
            var data = {
                name: document.getElementById('name').value,
                email: document.getElementById('email').value,
                mobile: document.getElementsByName('name')[1].value,
                education: document.getElementById('education').value,
                interest: document.getElementById('interest').value,
                engSuboption: document.getElementById('engSuboption') ? document.getElementById('engSuboption').value : '',
                medSuboption: document.getElementById('medSuboption') ? document.getElementById('medSuboption').value : '',
                otherInterest: document.getElementById('otherInterest') ? document.getElementById('otherInterest').value : '',
                otherSuboption: document.getElementById('otherSuboption') ? document.getElementById('otherSuboption').value : '',
                message: document.getElementById('message').value,
                goal: document.getElementById('goal').value
            };
            console.log('Form Data:', data);
            // You can send data to server here using fetch/ajax if needed
        });
    }
});
