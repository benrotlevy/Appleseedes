const users = [
    {
        id: 167464,
        firstName: "Jimmy",
        lastName: "Arnold",
        email: "jimmya@gmail.com",
    },
    {
        id: 578447,
        firstName: "Martha",
        lastName: "Goldman",
        email: "gold@hotmail.com",
    },
    {
        id: 864578,
        firstName: "Tim",
        lastName: "Burton",
        email: "timmy.hotmail.com",
    },
];

const ol = document.createElement("ol");
document.body.appendChild(ol);
ol.style.listStyle = "none";
users.forEach((user) => {
    const newUser = document.createElement("li");
    newUser.innerText = `${user.firstName} ${user.lastName}`;
    newUser.setAttribute("data-id", user.id);
    ol.appendChild(newUser);
});