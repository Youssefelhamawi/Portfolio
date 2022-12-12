function allForm() {

  // declaring variables
  const firstName = document.getElementById('firstName');
  const lastName = document.getElementById('lastName');
  const facilitator = document.getElementById('facilitator');
  const firstNameError = document.getElementById('firstNameError');
  const lastNameError = document.getElementById('lastNameError');
  const facilitatorError = document.getElementById('facilitatorError');

  let letters;

  letters = /^[A-Za-z]+$/;
  const data = ['Christian','Josh','Chris','Behdad','Jen']

if (data.includes('Apple')) {
   // Yay!
}else{
   //Bleh!
}

if (data.findIndex(el => el == 'Apple') !== -1) {
    //Yah
}else{
    //Bleh!
}



if (!firstName.value.match(letters)) {
    firstNameError.innerHTML = 'You can only enter Letters from A-z';
    firstName.focus();
    return false;

} else if (!lastName.value.match(letters)) {
    lastNameError.innerHTML = 'You can only enter Letters from A-z';
    lastName.focus();
    return false;

}if (!facilitator.value.match("Josh") && !facilitator.value.match("Chris") && !facilitator.value.match("Christian") && !facilitator.value.match("Jen") && !facilitator.value.match("Behad")){
    facilitatorError.innerHTML = 'You can only enter "Josh, Chris, Christian, Jen, or Behad"';
    facilitator.focus();
    return false;
     }else{
        return true;
     }
     
    }
