// Get modal and buttons
const modal = document.getElementById("authModal");
const openSignInBtn = document.getElementById("openSignIn");
const openSignUpBtn = document.getElementById("openSignUp");
const closeBtn = document.querySelector(".close-btn");
const signInForm = document.getElementById("signInForm");
const signUpForm = document.getElementById("signUpForm");
const formTitle = document.getElementById("formTitle");
const switchText = document.getElementById("switchText");

// Open Sign In Modal
openSignInBtn.onclick = () => {
  modal.style.display = "flex";
  signInForm.style.display = "block";
  signUpForm.style.display = "none";
  formTitle.textContent = "Sign In";
  switchText.innerHTML = `Don't have an account? <span id="switchForm" class="switch-link">Sign Up</span>`;
};

// Open Sign Up Modal
openSignUpBtn.onclick = () => {
  modal.style.display = "flex";
  signInForm.style.display = "none";
  signUpForm.style.display = "block";
  formTitle.textContent = "Sign Up";
  switchText.innerHTML = `Already have an account? <span id="switchForm" class="switch-link">Sign In</span>`;
};

// Close modal
closeBtn.onclick = () => {
  modal.style.display = "none";
};

// Switch between Sign In / Sign Up
switchText.addEventListener("click", (e) => {
  if(e.target.id === "switchForm") {
    if(signInForm.style.display === "block") {
      signInForm.style.display = "none";
      signUpForm.style.display = "block";
      formTitle.textContent = "Sign Up";
      switchText.innerHTML = `Already have an account? <span id="switchForm" class="switch-link">Sign In</span>`;
    } else {
      signInForm.style.display = "block";
      signUpForm.style.display = "none";
      formTitle.textContent = "Sign In";
      switchText.innerHTML = `Don't have an account? <span id="switchForm" class="switch-link">Sign Up</span>`;
    }
  }
});

// Close modal if clicked outside
window.onclick = (event) => {
  if(event.target === modal){
    modal.style.display = "none";
  }
};

// Optional: handle form submission
signInForm.addEventListener("submit", (e) => {
  e.preventDefault();
  alert("Sign In submitted!");
});

signUpForm.addEventListener("submit", (e) => {
  e.preventDefault();
  alert("Sign Up submitted!");
});
