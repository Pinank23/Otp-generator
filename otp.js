let generatedOTP = "";

        function generateOTP() {
            generatedOTP = Math.floor(Math.random() * (9000 - 1000) + 1000);
            document.getElementById("otp-notification").innerHTML = `OTP : ${generatedOTP}`;
        }

        function verifyOTP() {
            let receivedOTP = document.getElementById("received-otp").value;
            if (receivedOTP == generatedOTP.toString()) {
                document.getElementById("verification-result").innerHTML = "OTP verification success!";
            } else 
            {
                document.getElementById("verification-result").innerHTML = "OTP verification failed!";
        }
        }

        window.onload = function() {
          document.getElementById("received-otp").value = "";
        }

        // password.js
function generatePassword() {
    const passwordLength = 12; // adjust the length of the password as needed
    const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+~@";
    let password = "";
  
    for(let a = 0; a < passwordLength; a++) {
      password += chars.charAt(Math.floor(Math.random() * chars.length));
    }
  
    document.getElementById("password-notification").innerHTML = `Generated Password : ${password}`;
  }