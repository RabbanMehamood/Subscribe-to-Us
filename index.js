let subscribeFormEl = document.getElementById("subscribeForm")
let nameEl = document.getElementById("name");
let emailEl = document.getElementById("email");
let nameErrEl = document.getElementById("nameErrMsg");
let emailErrEl = document.getElementById("emailErrMsg");
let subscribeBtnEl = document.getElementById("subscribe");

nameEl.addEventListener("blur", function(event) {
    if (event.target.value === "") {
        nameErrEl.textContent = "Required*";
    } else {
        nameErrEl.textContent = "";
    }

});

emailEl.addEventListener("blur", function(event) {
    if (event.target.value === "") {
        emailErrEl.textContent = "Required*";
    } else {
        emailErrEl.textContent = "";
    }

});


subscribeFormEl.addEventListener("submit", function(event) {
    event.preventDefault();
})
