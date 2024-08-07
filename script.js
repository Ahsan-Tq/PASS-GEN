function generatePassword() {
  const length = document.getElementById("length").value;
  const includeLowercase = document.getElementById("include-lowercase").checked;
  const includeUppercase = document.getElementById("include-uppercase").checked;
  const includeNumbers = document.getElementById("include-numbers").checked;
  const includeChars = document.getElementById("include-chars").checked;

  const lowercaseChars = "abcdefghijklmnopqrstuvwxyz";
  const uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const numberChars = "0123456789";
  const specialChars = "!@#$%^&*(){}[]?";

  let checked = 0;
  let charPool = "";
  if (includeLowercase) {
    charPool += lowercaseChars;
    checked++;
  }
  if (includeUppercase) {
    charPool += uppercaseChars;
    checked++;
  }
  if (includeNumbers) {
    charPool += numberChars;
    checked++;
  }
  if (includeChars) {
    charPool += specialChars;
    checked++;
  }

  if(checked == 0){
    document.getElementById("password").value = "Select Atleast One Option";
    return;
  }

  let password = "";
  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * charPool.length);
    password += charPool[randomIndex];
  }

  document.getElementById("password").value = password;
}
