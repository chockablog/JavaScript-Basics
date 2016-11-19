var visitor = prompt("What is your name?");
var message = 'Hello ' + visitor + ". Welcome to Chockablog!";
//message = message + "<h2>We are so glad that you using the prompt() method with JavaScript,</h2>,";
message += "<h2>We are so glad that you using the prompt() method, ";
message += visitor;
message += ".</h2> Please come again, when you want to learn some more JavaScript!";

document.write (message);
