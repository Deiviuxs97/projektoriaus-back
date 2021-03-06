var express = require("express");
var app = express();
var path = require("path");
var bodyParser = require("body-parser"); // importing body parser middleware to parse form content from HTML
var nodemailer = require("nodemailer"); //importing node mailer

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, "public"))); // serving our contact form on '/' route
// route which captures form details and sends it to your personal mail

app.post("/sendemail", (req, res, next) => {
  console.log(req.body);

  /*Transport service is used by node mailer to send emails, it takes service and auth object as parameters.
here we are using gmail as our service
In Auth object , we specify our email and password
*/

  var transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.EMAIL,
      pass: process.env.PASSWORD,
    },
  });
  /*
In mailOptions we specify from and to address, subject and HTML content.
In our case , we use our personal email as from and to address,
Subject is Contact name and
html is our form details which we parsed using bodyParser.
*/
  if (
    req.body.name !== "" &&
    req.body.email !== "" &&
    req.body.phone !== "" &&
    req.body.time !== "" &&
    req.body.date !== ""
  ) {
    var mailOptions = {
      from: "gnotmaileta@gmail.com",
      to: req.body.email,
      subject: `Contact name: ${req.body.name}`,
      html: `<h1>Projektoriaus užsakymas</h1>
  <h2> Sveiki ${req.body.name} </h2><br>
  <h2> Projektorius užsakytas ${req.body.time}, nuomos data: ${req.body.date}</h2><br>`,
    };
  }
  /*
 Here comes the important part, sendMail is the method which actually sends email, it takes mail options and
call back as parameter
*/
  transporter.sendMail(mailOptions, function (error, info) {
    if (error) {
      console.log(error);
      res.send("error"); // if error occurs send error as response to client
    } else {
      console.log("Email sent: " + info.response);
      res.send("Sent Successfully"); //if mail is sent successfully send Sent successfully as response
    }
  });
});

module.exports = app;
