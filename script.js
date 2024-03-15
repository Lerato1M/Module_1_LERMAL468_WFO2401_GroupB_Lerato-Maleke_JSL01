function validateSyntax() {
    let input = document.getElementById('petInput').value.trim(); //Trim removes trailing white spaces
    // Validation logic goes here
    if (input === "pet_ && [a-zA-Z0-9]") {  
        document.getElementById('petInput').classList.remove("is-valid");
    } else {
        document.getElementById('petInput').classList.remove("is-invalid");
    }

    let result = ''; // Placeholder for validation result

    // TODO: Write your validation logic here
        // Check if input starts with 'pet_' and followed by alphanumeric characters
        function validateSyntax(input) {
            let result;
            if (input.startsWith('pet_ && [a-zA-Z0-9]')) {
              result = 'Valid Syntax';
            } else {
              result = 'Invalid Syntax';
            }
            return result;
          }
const regex =/pet_[a-zA-Z0-9]/; //'regex' is defined to match strings that start with 'pet_' followed by any combination of letters (both lowercase and uppercase, and numbers.)
if (regex.test(input)) { //Test method of the regular expression is used to check if the inputt string matches the defined patterns.
    result = 'Valid Syntax'; //If it matches the pattern the 'result' is set to 'Valid Syntax'
} else {
    result = 'Invalid Syntax'; //Otherwise, it is set to invalid Syntax
}
// Example usage:
console.log(validateSyntax("pet_dog123")); // Output: Valid Syntax
console.log(validateSyntax("cat_456")); // Output: Invalid Syntax

            document.getElementById("result").innerText = result; //the 'result' is displayed in the HTML element with the ID 'result'
}


