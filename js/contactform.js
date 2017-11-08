const show = document.querySelector('#contExpand');
const form = document.querySelector('#contactForm');
const submit = document.querySelector('#contact-submit');

var visible = false;

show.addEventListener('click', showForm);
remove.addEventListener('click', removeForm);
submit.addEventListener('click', submitForm);

function removeForm() {
  if (visible) {
    visible = false;
    // toggle.innerText = '+';
    form.style.display = 'none';
  }
}
function showForm() {
  if (!visible) {
    visible = true;
    // toggle.innerText = '+';
    form.style.display = 'block';
  }
}

function submitForm(e) {
  if (form.checkValidity()) {
    e.preventDefault();
    alert('Message sent');
    document.querySelector('#name').value = '';
    document.querySelector('#email').value = '';
    document.querySelector('#message').value = '';
    removeForm();
  }
}
