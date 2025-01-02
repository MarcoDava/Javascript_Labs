
const form = document.querySelector("form");
const fname = document.getElementById("fname");
const lname = document.getElementById("lname");
const para = document.querySelector("p");

form.addEventListener("submit", (e) => {
  if (fname.value === "" || lname.value === "") {//checks if inputs are empty
    e.preventDefault();//prevents the submission of the information into the server
    para.textContent = "You need to fill in both names!";//sends the prompt out
  }
});
