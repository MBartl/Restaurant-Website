function submit_info() {
  var name = document.getElementById("name").value;
  var email = document.getElementById("email").value;
  var phone = document.getElementById("phone").value;
  console.log(name);
  console.log(email);
  console.log(phone);
  if (name == "") {
    alert("Please enter your name");
    return false;
  }
  else if (email == "") {
    alert("Please enter your email");
    return false;
  }
  else if (phone == "") {
    alert("Please enter your number");
    return false;
  }
  else {
    alert("Thank you for contacting us!");
    return true;
  }
}
