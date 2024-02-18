document.addEventListener("DOMContentLoaded", function () {
  const emailInput = document.getElementById("email");
  const passwordInput = document.getElementById("password");
  const loginLink = document.querySelector(".create");

  function validateInputs() {
    if (emailInput.value.length >= 16) {
      emailInput.style.borderColor = "green";
    } else {
      emailInput.style.borderColor = "red";
    }

    if (passwordInput.value.length >= 8) {
      passwordInput.style.borderColor = "green";
    } else {
      passwordInput.style.borderColor = "red";
    }
  }

  function handleClick(event) {
    if (
      emailInput.style.borderColor === "green" &&
      passwordInput.style.borderColor === "green"
    ) {
      const storedEmail = localStorage.getItem("email");           
      const storedPassword = localStorage.getItem("password");
      //local storagedan mogvaqvs email da password rasac app2 js shi aregistrirebs momxmarebeli 
      if (
        storedEmail === emailInput.value &&             
        storedPassword === passwordInput.value
      ) {
        //warmatebit shesrulda registracia tu stored email da stored password daemtxva email inputs da password inputs 
      } else {
        event.preventDefault();
        alert("Invalid email or password."); //tu local storagedan wamosul infos ar daemtxva momxmareblis email da password mas ar aqvs gaketebuli account
      }
    } else {
      event.preventDefault();
      alert(
        "Please make sure all validations are confirmed before proceeding."
      );
    }
  }

  const storedEmail = localStorage.getItem("registeredEmail");  
  const storedPassword = localStorage.getItem("registeredPassword");
  if (storedEmail) {
    emailInput.value = storedEmail;             //amowmebs tu shenaxulia raime email-is saxelze
  }
  if (storedPassword) {
    passwordInput.value = storedPassword;       //amowmebs tu shenaxulia raime password-is saxelze
  }

  emailInput.addEventListener("input", validateInputs);
  passwordInput.addEventListener("input", validateInputs);
  loginLink.addEventListener("click", handleClick);

  validateInputs();
});
