function allForm() {

  // declaring variables
  const firstName = document.getElementById('firstName');
  const lastName = document.getElementById('lastName');
  const firstNameError = document.getElementById('firstNameError');
  const lastNameError = document.getElementById('lastNameError');

  let letters;

  letters = /^[A-Za-z]+$/;


if (!firstName.value.match(letters)) {
    firstNameError.innerHTML = 'You can only enter Letters from A-z';
    firstName.focus();
    return false;

} else if (!lastName.value.match(letters)) {
    lastNameError.innerHTML = 'You can only enter Letters from A-z';
    lastName.focus();
    return false;

     }
     
    }
