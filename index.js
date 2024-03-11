// Get user input for number and limit using prompt
var number = parseInt(window.prompt("Enter a number:"));
var limit = parseInt(window.prompt("Enter a limit:"));

// Generate and print the table
document.write("<h1>Table for " + number + "</h1>");

if (number < 20) {
  for (let i = limit; i >= 1; i--) {
    document.write( `${number}  x  $(i)  =  ${number * i}`); 
    document.write("<br>");
    
  }
} else {
  for (let i = 1; i <= limit; i++) {
    document.write( `${number}  x  ${i}  =  ${number * i}`); 
    document.write("<br>");
  }
}



