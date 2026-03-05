function tagPassword(password) {

    if (typeof password !== "string") {
        return "INVALID";
    }

    let hasLetter = false;
    let hasNumber = false;

    for (let i = 0; i < password.length; i++) {
        let ch = password[i];

        if ((ch >= 'a' && ch <= 'z') || (ch >= 'A' && ch <= 'Z')) {
            hasLetter = true;
        }

        if (ch >= '0' && ch <= '9') {
            hasNumber = true;
        }
    }

    if (password.length < 8) {
        return "WEAK";
    } 
    else if (password.length >= 12 && hasLetter && hasNumber) {
        return "STRONG";
    } 
    else if (password.length >= 8 && hasLetter && hasNumber) {
        return "MEDIUM";
    } 
    else {
        return "WEAK";
    }
}

// Test examples
console.log(tagPassword("abc"));           
// console.log(tagPassword("abc12345"));      
// console.log(tagPassword("abc123456789"));  
// console.log(tagPassword(12345));