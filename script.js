let existingLoginBtn = document.querySelector("#existing");
let rememberMeBtn = document.querySelector("#checkbox");
let submitBtn = document.querySelector("#submit");
existingLoginBtn.classList.add("d-none");
if (Object.keys(localStorage).length > 0) {
  existingLoginBtn.classList.remove("d-none");
} else {
  existingLoginBtn.classList.add("d-none");
}

submitBtn.addEventListener("click", (e) => {
  e.preventDefault();
  // console.log(rememberMeBtn.checked);
  let userName = document.querySelector("#username").value;
  let passWord = document.querySelector("#password").value;
  if (rememberMeBtn.checked) {
    localStorage.setItem(`${userName}`, `${passWord}`);
    existingLoginBtn.classList.remove("d-none");
    alert("credentials are stored in localStorage");
    window.location.reload();
  } else {
    alert("Logged in as <username>, credentials are not stored");
    localStorage.clear();
    window.location.reload();
  }
});

existingLoginBtn.addEventListener("click", (e) => {
  e.preventDefault();
  // let userName = document.querySelector("#username").value;
  // console.log(userName);
  // let displayValue = localStorage.getItem(`${userName}`);
  alert("Logged in as <saved username>");
});
