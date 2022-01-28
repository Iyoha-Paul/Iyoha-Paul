'use strict';

document.querySelector('.submit').addEventListener('click', function () {
  const email = document.querySelector('.email').value;
  console.log(email);

  if (!email) {
    alert('please enter mail abeg');
  }
});
