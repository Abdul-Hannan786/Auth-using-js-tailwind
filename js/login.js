const error = document.querySelector(".error");
const dummy = document.querySelector(".dummy");
const invalidEmailPassword = document.querySelector(".invalid-email-password");
const dummy01 = document.querySelector(".dummy-invalid");

function login() {
  toggle();
}

function loginEnter({ key }) {
  if (key === "Enter") {
    toggle();
  }
}

function toggle() {
  const emailInput = document.querySelectorAll("input")[0].value;
  const passwordInput = document.querySelectorAll("input")[1].value;

  if (emailInput.trim() === "" || passwordInput.trim() === "") {
    error.classList.remove("hidden");
    dummy.classList.remove("hidden");
    error.classList.add("fixed");
    dummy.classList.add("fixed");
  } else {
    let users = localStorage.getItem("users");
    users = JSON.parse(users);

    let [loggedInUser] = users.filter(
      ({ email, password }) =>
        email === emailInput && password === passwordInput
    );

    if (!loggedInUser) {
      invalidEmailPassword.classList.remove("hidden");
      dummy01.classList.remove("hidden");
      invalidEmailPassword.classList.add("fixed");
      dummy01.classList.add("fixed");
    } else {
      localStorage.setItem("loggedInUsername", loggedInUser.name);
      window.location.href = "post.html";
    }
  }
}

function cancelErr() {
  error.classList.remove("fixed");
  dummy.classList.remove("fixed");
  error.classList.add("hidden");
  dummy.classList.add("hidden");
}

function cancelInvalid() {
  invalidEmailPassword.classList.remove("fixed");
  dummy01.classList.remove("fixed");
  invalidEmailPassword.classList.add("hidden");
  dummy01.classList.add("hidden");
}
