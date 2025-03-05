//declaring variables
const email = document.getElementById("email");
const form = document.getElementById('form');

//add a listener to prevent default submit before validation
form.addEventListener("submit", event => {

  if (!validateInputs()) {
    event.preventDefault(); // Prevent form submission if validation fails
  }

});

//checks for valid email adress using const i found. Returns email in lowercase. trying to understand it through this: https://en.wikipedia.org/wiki/Regular_expression
//even with this you can still use dummy emails like "abc@abc.abc"
const isValidEmail = email => {

  const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  return re.test(String(email).toLowerCase());
};

//the validate function. .trim removes whitespaces and shortens the value. ! = not. 
const validateInputs = () => {

  const emailValue = email.value.trim();

  if (!isValidEmail(emailValue)) {
    alert("Not a valid email address");
    return false;
  }

  return true; // Validation passed
};