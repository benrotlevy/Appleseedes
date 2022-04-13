var library = [
    {
        author: "Bill Gates",
        title: "The Road Ahead",
        readingStatus: true
    },
    {
        author: "Steve Jobs",
        title: "Walter Isaacson",
        readingStatus: true
    },
    {
        author: "Suzanne Collins",
        title: "Mockingjay: The Final Book of The Hunger Games",
        readingStatus: false
    }
];

const getRead = (libraryArr) => {
    const res = libraryArr.filter(book => (book.readingStatus === true));
    let str = "";
    res.forEach((e, i) => {
        str += `book - ${i+1}
title: ${e.title} author: ${e.author} reading status: ${e.readingStatus}
`
    })
    return str;  
}

console.log(getRead(library));