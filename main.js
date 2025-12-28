document.addEventListener('DOMContentLoaded', function() {
    const form = document.querySelector('form');
    if (form) {
        form.addEventListener('submit', function(e) {
            // Remove e.preventDefault() if you want actual submit later
            const data = {
                name: document.getElementById('name')?.value || '',
                email: document.getElementById('email')?.value || '',
                mobile: document.getElementById('mobile')?.value || '',
                education: document.getElementById('education')?.value || '',
                interest: document.getElementById('interest')?.value || '',
                suboption: document.getElementById('suboption')?.value || '',
                otherInterest: document.getElementById('otherInterest')?.value || '',
                message: document.getElementById('message')?.value || '',
                goal: document.getElementById('goal')?.value || ''
            };
            console.log('Submitted Career Form Data:', data);
            // Later: send via fetch() to backend or Formspree
        });
    }
});
