function validate()
{
    //Grab the user's input and store in variables
    var userEntered = document.getElementById("user").value;
    var passEntered = document.getElementById("pass").value;

    //Show message that there is an error with the username...
    if (userEntered.length < 6) {
    document.getElementById("usernameError").innerHTML="Username shorter than 6 characters.";
    document.getElementById("usernameError").classList.remove("hidden-message");
    document.getElementById("usernameError").classList.add("shown-message");
    //Turn the username items red
    document.getElementById("usernameGroup").classList.add("has-error");
  }
  else if(userEntered.length > 20)
  {
    document.getElementById("usernameError").innerHTML="Username longer than 20 characters.";
    document.getElementById("usernameError").classList.remove("hidden-message");
    document.getElementById("usernameError").classList.add("shown-message");
    //Turn the username items red
    document.getElementById("usernameGroup").classList.add("has-error");
  }
  else if(/\s/.test(userEntered))
  {
    document.getElementById("usernameError").innerHTML="Username matches password.";
    document.getElementById("usernameError").classList.remove("hidden-message");
    document.getElementById("usernameError").classList.add("shown-message");
    //Turn the username items red
    document.getElementById("usernameGroup").classList.add("has-error");
  }

    else {
      document.getElementById("usernameGroup").classList.add("has-success");
    }

    if (passEntered == userEntered) {
    //Show message that there is an error with the password...
    document.getElementById("passwordError").innerHTML="Password matches username.";
    document.getElementById("passwordError").classList.remove("hidden-message");
    document.getElementById("passwordError").classList.add("shown-message");
    //Turn the password items red
    document.getElementById("passwordGroup").classList.add("has-error");
  }
  else if(passEntered.match(/password/i))
  {
    document.getElementById("passwordError").innerHTML="Password can't be password.";
    document.getElementById("passwordError").classList.remove("hidden-message");
    document.getElementById("passwordError").classList.add("shown-message");
    //Turn the password items red
    document.getElementById("passwordGroup").classList.add("has-error");
  }
  else
  {
      document.getElementById("usernameGroup").classList.add("has-success");
      document.getElementById("passwordGroup").classList.remove("has-error");
  }
}
function submit1()
{
    window.alert("Password: " + document.getElementById("pass").value + " " + "Username: " + document.getElementById("user").value);
}
function validateUsername()
{
  var userEntered = document.getElementById("user").value;
  console.log("validating Username");
  if(document.getElementById("usernameError").classList.contains("has-error"))
  {
    document.getElementById("usernameError").classList.remove("has-error");
    document.getElementById("usernameError").classList.remove("shown-message");
  }
  else if(document.getElementById("usernameGroup").classList.contains("has-success"))
  {
    document.getElementById("usernameGroup").classList.remove("has-success");
  }

}
function validatePassword()
{
  var passEntered = document.getElementById("pass").value;
  if(document.getElementById("passwordError").classList.contains("has-error"))
  {
    document.getElementById("passwordError").classList.remove("has-error");
    document.getElementById("passwordError").classList.remove("shown-message");
  }
  else if(document.getElementById("passwordGroup").classList.contains("has-success"))
  {
    document.getElementById("passwordGroup").classList.remove("has-success");
  }
}
