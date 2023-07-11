function sendEmailVerification() {
    const email = document.getElementById("email").value;
    const otpverify = document.getElementById("otp-verification-email");
  
    // Generate random OTP
    const otp = Math.floor(Math.random() * 10000);
  
    const emailBody = `
      <h1>Email Verification OTP: ${otp}</h1>
    `;
  
    email.send({
      Host: "smtp.elasticemail.com",
      Username: "jenishborah@gmail.com", 
      Password: "33B7EA29EA03177AC947ACBB8E6B265FACEA",
      To: email,
      From: "jenishborah@gmail.com", 
      Subject: "Email Verification OTP",
      Body: emailBody,
    }).then((message) => {
      if (message === "OK") {
        alert("OTP sent to your email");
  
        // Display OTP verification
        otpverify.style.display = "block";
      } else {
        alert("Failed to send OTP");
      }
    });
  }
  
  function verifyEmailOTP() {
    const otpInput = document.getElementById("otp-input-email").value;
    const otp = ""; // Enter the OTP sent to the user's email
  
    if (otpInput == otp) {
      alert("Email verified!");
      submitForm();
    } else {
      alert("Invalid OTP");
    }
  }
  
  function submitForm() {
    alert("Form submitted successfully!");
    window.location.href = "https://thefantastiqo.com/home.html";
  }
  

  function sendWhatsAppOTP() {
    const phoneNumber = document.getElementById("phone").value;
    const otpInput = document.getElementById("whatsapp-otp-input");
    const otp = Math.floor(Math.random() * 10000);

    //  Axios to make a POST request to a WhatsApp API
    axios
      .post("https://your-whatsapp-api.com/send-otp", {
        phone: phoneNumber,
        otp: otp,
      })
      .then((response) => {
        // Handle the response from the WhatsApp API
        alert("WhatsApp OTP sent");
      })
      .catch((error) => {
        console.log(error);
        alert("Failed to send WhatsApp OTP");
      });

    // Display OTP verification
    const otpverify = document.getElementById("otp-verification-whatsapp");
    otpverify.style.display = "block";
  }


  function verifyWhatsAppOTP() {
    const otpInput = document.getElementById("whatsapp-otp-input").value;
    const otp = ""; // Enter the OTP sent to the user's WhatsApp

    if (otpInput === otp) {
      alert("Phone number verified via WhatsApp!");
      submitForm();
    } else {
      alert("Invalid OTP");
    }
  }
