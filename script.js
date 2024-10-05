let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nava');

window.onscroll = () => {
sections.forEach(sec => {

let top = window.scrollY;
let offset = sec.offsetTop - 150;
let height = sec.offsetHeight;
let id = sec.getAttribute('id');
if(top >= offset && top < offset + height)
    { navLinks.forEach(links => { 
        links.classList.remove('active'); 
        document.querySelector('header nav a [href*=' + id + ']').classList.add ('active') 
        })
    }
}) 
}


menuIcon.onclick = () => 
    {
    menuIcon.classList.toggle('bx-x');
	navbar.classList.toggle('active');
    }

/*
    ----------------------------------------------
*/

document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the default form submission

    //console.log("coming...");   

    // Gather form data
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var phone = document.getElementById('phone').value;
    var subject = document.getElementById('subject').value;
    var message = document.getElementById('message').value;

    // Send the email
    Email.send({
        SecureToken :"87ceec6e-54a2-4ad7-8a60-1da51020e2c7", 
        To: 'kuldeeptech999@gmail.com',
        From: "kuldeeptech999@gmail.com",
        Subject: "Contect form for submission",
        Body: `Name: ${name}<br>Email: ${email}<br>Phone: ${phone}<br>Subject: ${subject}<br>Message: ${message}`
      //  Body:'In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before the final copy is available'
    }).then(function(message) {

        alert("Message sent successfully!"+message);
        document.getElementById('contactForm').reset(); // Reset the form after submission
    }).catch(function(error) {
        alert("Error sending message: " + error);
    });
});
