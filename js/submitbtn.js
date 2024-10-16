
function messageToUser() {
   
             const phoneNumber = document.getElementById("mobileNumber").value; 
             let firstName = document.getElementById('name').value;
             let lastName = document.getElementById('lastName').value;
             // let courseName = document.getElementById('courseName').innerHTML;
            const message = encodeURIComponent(`Hi , This is ${firstName} . my email address is  ${courseName} .`); // Replace with your actual message
            const url = `https://wa.me/+918788396162?text=${message}`;
            
            window.open(url, '_blank');

};

// form required data filling
  
  document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('registrationForm').addEventListener('submit', function(event) {
      // Custom validation logic
      var firstName = document.getElementById('name').value.trim();
      var email = document.getElementById('lastName').value.trim();
      var subject = document.querySelector('subject').value.trim();
      var message = document.getElementById('message').value.trim();
      // var course = document.getElementById('course').value;

      if (!firstName || !lastName || !email || !mobile) {
        alert('Please fill in all required fields.');
        event.preventDefault(); // Prevent form submission
        return false;
      }
       if (firstName || email || subject || message) {
       messageToUser();
      }

      // if (!/^[0-9]{10}$/.test(mobile)) {
      //   alert('Please enter a valid 10-digit phone number.');
      //   event.preventDefault(); // Prevent form submission
      //   return false;
      // }

      // Optional: Add more custom validations as needed
    });
  });
