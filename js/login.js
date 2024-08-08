const error = document.querySelector(".error");
const dummy = document.querySelector(".dummy");

function login() {
  toggle()
}

function loginEnter({key}){
  if(key === "Enter"){
    toggle()
  }
}

function toggle(){
  const emailInput = document.querySelectorAll("input")[0].value;
  const passwordInput = document.querySelectorAll("input")[1].value;

  if (emailInput.trim() === "" || passwordInput.trim() === "") {
    error.classList.remove("hidden");
    dummy.classList.remove("hidden");
    error.classList.add("fixed");
    dummy.classList.add("fixed");
  } 
  else{
    let users = localStorage.getItem("users")
    users = JSON.parse(users)
    
    users.map(({email, password}) => {
           if(email === emailInput && password === passwordInput){
            window.location = "./post.html"
           }
    })
  }
}

function cancelErr(){
    error.classList.remove("fixed")
        dummy.classList.remove("fixed")
        error.classList.add("hidden")
        dummy.classList.add("hidden")
}
