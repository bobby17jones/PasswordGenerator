var password = document.getElementById("password");

function generatePassword() {
  var length = prompt(
    "How many characters would you like your password to be? (8-128)"
  );
  if (length < 8 || length > 128) {
    alert("Password must be between 8 and 128 characters");
    return;
  }
  var lowercase = confirm("Would you like to include lowercase letters?");
  var uppercase = confirm("Would you like to include uppercase letters?");
  var numbers = confirm("Would you like to include numbers?");
  var symbols = confirm("Would you like to include symbols?");
  var password = "";
  var possible = "";
  if (lowercase) {
    possible += "abcdefghijklmnopqrstuvwxyz";
  }
  if (uppercase) {
    possible += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  }
  if (numbers) {
    possible += "0123456789";
  }
  if (symbols) {
    possible += "!@#$%^&*()_+";
  }
  for (var i = 0; i < length; i++) {
    password += possible.charAt(Math.floor(Math.random() * possible.length));
  }
  document.getElementById("password").value = password;
}

function copyPassword() {
  var copyText = document.getElementById("password");
  copyText.select();
  copyText.setSelectionRange(0, 99999);
  document.execCommand("copy");
  alert("Copied the password: " + copyText.value);
}
