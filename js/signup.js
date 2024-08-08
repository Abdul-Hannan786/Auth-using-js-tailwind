const error = document.querySelector(".error");
const dummy = document.querySelector(".dummy");

function signUp() {
  toggle();
}

function signUpEnter({ key }) {
  if (key === "Enter") {
    toggle();
  }
}

function toggle() {
  const nameInput = document.querySelectorAll("input")[0].value;
  const emailInput = document.querySelectorAll("input")[1].value;
  const passwordInput = document.querySelectorAll("input")[2].value;

  if (
    nameInput.trim() === "" ||
    emailInput.trim() === "" ||
    passwordInput.trim() === ""
  ) {
    error.classList.remove("hidden");
    dummy.classList.remove("hidden");
    error.classList.add("fixed");
    dummy.classList.add("fixed");
  } 
  else {
    let users = JSON.parse(localStorage.getItem("users")) || [];
    let newUser = {
      name: nameInput,
      email: emailInput,
      password: passwordInput,
    };
    users.push(newUser);
    localStorage.setItem("users", JSON.stringify(users));

    window.location = "./login.html";
  }
}

function cancelErr() {
  error.classList.remove("fixed");
  dummy.classList.remove("fixed");
  error.classList.add("hidden");
  dummy.classList.add("hidden");
}
