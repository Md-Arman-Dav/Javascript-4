const toggleButton = document.getElementById('toggleMode');
const body = document.body;

toggleButton.addEventListener('click', function () {
  body.classList.toggle('night-mode');

  if (body.classList.contains('night-mode')) {
    toggleButton.textContent = 'Switch to Day Mode';
  } else {
    toggleButton.textContent = 'Switch to Night Mode';
  }
});

document.querySelector('.menuBtn').addEventListener('click', function() {
    document.querySelector('.sidebar').classList.add('open');
});

document.querySelector('.closeBtn').addEventListener('click', function() {
    document.querySelector('.sidebar').classList.remove('open');
});


