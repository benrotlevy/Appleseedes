const book = {
    authorName: "benjamin",
    name: "how to code efficiently",
    publishYear: 2015,
    numOfPages: 200,
    weight: 2
}

const func = (book) => {
    return `the book "${book.name}" was written by ${book.authorName} in the year ${book.publishYear}`;
}

console.log(func(book));