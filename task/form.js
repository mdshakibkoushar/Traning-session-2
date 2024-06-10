function handleclick() {
  document
    .getElementById("registrationForm")
    .addEventListener("submit", function (event) {
      event.preventDefault();

      var formData = {
        fullname: document.getElementById("fullname").value,
        username: document.getElementById("username").value,
        password: document.getElementById("password").value,
        confirm_password: document.getElementById("confirm_password"),
        email: document.getElementById("email").value,
        phone: document.getElementById("phone").value,
        dob: document.getElementById("dob").value,
        gender: document.querySelector('input[name="gender"]:checked'),
        hobbies: Array.from(
          document.querySelectorAll('input[name="hobbies"]:checked')
        ).map((hobby) => hobby.value),
        country: document.getElementById("country").value,
        bio: document.getElementById("bio").value,
      };

      console.log(formData);

      alert("Form submitted successfully!");

      this.reset();
    });

  document.getElementById("resetButton").addEventListener("click", function () {
    alert("Your form has been cleared.");
  });
}
