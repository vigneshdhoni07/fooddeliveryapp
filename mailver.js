const nodemailer=require("nodemailer")
var mailer=function(obj){
var transporter=nodemailer.createTransport({
    service:"gmail",
    auth:{
        user:"cricuniverse07",
        pass:"fkvexowvadqbujgz"
    }
})
var mailoptions={
    from:"cricuniverse07@gmail.com",
    to:obj.email,
    subject:obj.subject,
    text:obj.text
}

transporter.sendMail(mailoptions, function(error, info){
    if (error) {
      console.log(error);
    } else {
      console.log('Email sent: ' + info.response);
    }
  });
}
module.exports=mailer;