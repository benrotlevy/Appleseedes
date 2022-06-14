const fs = require("fs");
const uniqid = require("uniqid");

const loadUsers = () => {
    try {
        const usersJson = fs.readFileSync("users.json").toString();
        return JSON.parse(usersJson);
    } catch (e) {
        return [];
    }
}

const saveUsers = (newUsers) => {
    const json = JSON.stringify(newUsers);
    fs.writeFileSync("users.json", json);
}

const addUser = (name, email) => {
    const users = loadUsers();
    const duplicate = users.find(user => user.email === email);
    if(!duplicate) {
        users.push({name: name, email: email, id: uniqid()});
        saveUsers(users);
        console.log("user added");
    } else {
        console.log("error");
    }
}

const readUser = (id) => {
    const users = loadUsers();
    const foundUser = users.find(user => user.id === id);
    console.log(foundUser);
}

const updateUser = (id, name, email) => {
    const users = loadUsers();
    const foundUser = users.find(user => user.id === id);
    if(foundUser.name !== name || foundUser.email !== email) {
        const filterUsers = users.filter(user => user.id !== id);
        filterUsers.push({name: name, email: email, id: foundUser.id});
        saveUsers(filterUsers);
    }
}

const deleteUser = (id) => {
    const users = loadUsers();
    const filterUsers = users.filter(user => user.id !== id);
    saveUsers(filterUsers);
}

addUser("ben", "ben@rotlevy.com");
// addUser("yossi", "yossi@rotlevy.com");
// addUser("yael", "yael@rotlevy.com");
// addUser("avi", "avi@rotlevy.com");
// updateUser("5q37dwol4ck19di" ,"benjamin", "benjamin@rotlevy.com");
// readUser("5q37dwol4ck19di");
// deleteUser("5q37dwol4ck19di");

