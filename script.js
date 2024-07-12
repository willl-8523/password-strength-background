const password = document.getElementById('password');
const background = document.getElementById('background');
const btn = document.querySelector('.css-btn');

password.addEventListener('input', (e) => {
  const input = e.target.value;
  const length = input.length;
  const blurValue = 16 - length * 2;

  background.style.filter = `blur(${blurValue}px)`;

  if (length >= 8) {
    btn.removeAttribute('disabled');
  } else {
    btn.setAttribute('disabled', true);
  }
});
