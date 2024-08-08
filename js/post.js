function logout(){
    window.location = "../login.html"
}

const post = document.querySelector(".post")
const noPost = document.querySelector(".no-post")

let posts = []


const postInput = document.querySelector(".post-input")

function createPosts(){
  postInput.classList.remove("hidden")
  postInput.classList.add("flex")
} 

function cancelErr(){
        postInput.classList.add("hidden")
}

function createUserPost(){
    toggle()
}

function postEnterClick({key}){
 if(key === "Enter"){
    toggle()
 }

}


function toggle(){
    const contentInput = document.querySelector("#post-id").value
  
    let posts = JSON.parse(localStorage.getItem("users")) || [];
    let newPost = {
        content: contentInput,
        userName: "Abdul Hannan"
    }
}
