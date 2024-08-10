function logout() {
  localStorage.removeItem("loggedInUsername");
  window.location.href = "login.html";
}

const postInput = document.querySelector(".post-input");

function createPosts() {
  postInput.classList.remove("hidden");
  postInput.classList.add("flex");
}

function cancelErr() {
  postInput.classList.add("hidden");
}

function createUserPost() {
  toggle();
}

function postEnterClick({ key }) {
  if (key === "Enter") {
    toggle();
  }
}

const error = document.querySelector(".error");
const dummy = document.querySelector(".dummy");

function toggle() {
  const contentInput = document.querySelector("#post-id").value;
  const loggedInUsername = localStorage.getItem("loggedInUsername");

  if (contentInput.trim() !== "" && loggedInUsername) {
    let userPosts =
      JSON.parse(localStorage.getItem(`posts_${loggedInUsername}`)) || [];
    let newPost = {
      content: contentInput,
      userName: loggedInUsername,
    };

    userPosts.push(newPost);
    localStorage.setItem(
      `posts_${loggedInUsername}`,
      JSON.stringify(userPosts)
    );

    renderPosts();

    document.querySelector("#post-id").value = "";
    cancelErr();
    post.classList.add("bg-sky-100");
  } else {
    error.classList.remove("hidden");
    dummy.classList.remove("hidden");
    error.classList.add("fixed");
    dummy.classList.add("fixed");
  }
}

function cancelInvallidError() {
  error.classList.remove("fixed");
  dummy.classList.remove("fixed");
  error.classList.add("hidden");
  dummy.classList.add("hidden");
}

const post = document.querySelector(".post");
function renderPosts() {
  post.innerHTML = "";

  const loggedInUsername = localStorage.getItem("loggedInUsername");

  if (loggedInUsername) {
    let userPosts =
      JSON.parse(localStorage.getItem(`posts_${loggedInUsername}`)) || [];
    let clutter = "";

    userPosts.forEach(({ content, userName }) => {
      clutter += `
                    <div class="shadow-2xl bg-white p-4 rounded-md flex flex-col gap-y-3 ">
                    <div class="flex items-center justify-between">
                    <div class="flex items-center gap-x-2">
                        <div class="w-10 h-10 rounded-full bg-sky-600">
                            <img
                                src="./Images/9440461.jpg"
                                alt="avatar image"
                                class="rounded-full w-full object-cover"
                            />
                            </div>
                            <h3 class="font-semibold text-xl">${userName}</h3>
                    </div>
                    <button class="rounded-full hover:bg-sky-100 w-7">
                        <i class="ri-more-2-fill text-xl"></i>
                    </button>
                    </div>
                    <div class="text-md flex flex-col gap-y-3">
                    <p>${content}</p>
                    </div>
                </div>
            `;
    });

    post.innerHTML = clutter;
  }
}

window.onload = renderPosts;

