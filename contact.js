document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("contactForm");

  if (!form) return;

  form.addEventListener("submit", function (e) {
    e.preventDefault();

    let name = document.getElementById("name").value.trim();
    let email = document.getElementById("email").value.trim();
    let message = document.getElementById("message").value.trim();

    if (name === "" || email === "" || message === "") {
      alert("Please fill all fields");
    } else {
      document.getElementById("successpopup").style.display = "block";
      form.reset();
    }
  });
});

function closePopup() {
  document.getElementById("successpopup").style.display = "none";
}