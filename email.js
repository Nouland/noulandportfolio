function sendEmail() {
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let subject = document.getElementById("subject").value;
    let message = document.getElementById("message").value;
    let finalmessage = `Name : ${name} <br>  Email : ${email} <br> Subject : ${subject} <br> Message : ${message} <br>`;

    Email.send({
        SecureToken :"24d340f0-6806-43c2-9f2c-12af4c464d3c",
        Host: "smtp.gmail.com",
        SSL : "Enable",
        Username : "noulandrealda6@gmail.com",
        Password : "Nouland17!",
        To : 'noulandrealda6@gmail.com',
        From : "landrealda17@gmail.com",
        Subject : subject
        Body : finalmessage
    }).then(
      message => alert(message)
    );
}