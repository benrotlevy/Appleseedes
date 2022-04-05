function date() {
    const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    const days = ["sunday", "monday", "tuesday" ,"wednesday", "thursday","friday", "suturday"];
    const date = new Date();
    let day = days[date.getDay()];
    let month = months[date.getMonth()];
    return `Today is ${day} the ${date.getDate()} of ${month}, ${date.getFullYear()}`;
}
