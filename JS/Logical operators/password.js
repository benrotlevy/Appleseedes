const passValid1 = (pass) => {
    if(pass.length >= 7) {
        return "Strong";
    }
    return "Weak";
}

const passValid2 = (pass) => {
    return pass.length >= 7 ? "Strong": "Weak";
}

const passValid3 = (pass) => {
    return (pass.length >= 7 && "Strong") || "Weak";
}

// console.log(passValid1("123456"));

const advanceValid = (pass) => {
    let strong = false;
    for(let i=0; i<pass.length; i++) {
            pass[i] >= "A" && pass[i] <= "Z" ? strong = true: null;
    }
    let strength = pass.length < 7 ? "Weak" :
        strong ? "Very Strong" : "Strong";
    return strength;
}

console.log(advanceValid("12345Z"));