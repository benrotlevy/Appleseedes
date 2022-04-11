const segevBook = {
    name: "hello",
    author: "segev",
    year: 2015
}

const benjaminBook = {
    name: "world",
    author: "benjamin",
    year: 2018
}

const bookUtils = {
    getFirstPublished(book1, book2) {
        if(book1.year > book2.year) {
            return book2;
        }
        return book1;
    },
    setNewEdition(book, editionYear) {
        book.newEdition = editionYear;
    },
    setLanguage(book, language) {
        book.language = language;
    },
    setTranslation(book, language, translator) {
        book.translation = {
            translator,
            language
        }
    },
    setPublisher(book, name, location) {
        book.publisher = {
            name,
            location
        }
    },
    isSamePublisher(book1, book2) {
        if(book1.publisher && book2.publisher && book1.publisher.name === book2.publisher.name && book1.publisher.location === book2.publisher.location) {
            return true;
        }
        return false;
    }
}

// console.log(bookUtils.getFirstPublished(segevBook, benjaminBook));
bookUtils.setLanguage(segevBook, "english");
bookUtils.setNewEdition(segevBook, 2019);
bookUtils.setTranslation(segevBook, "hebrew", "gili");
bookUtils.setPublisher(segevBook, "shira", "israel");
// console.log(segevBook);
console.log(bookUtils.isSamePublisher(segevBook, benjaminBook));


