/* 
Write a JavaScript program to display the reading status (i.e. display book name, author name and reading status) of the following books.
*/

var library = [
    {
        title: 'Bill Gates',
        author: 'The Road Ahead',
        readingStatus: true
    },
    {
        title: 'Steve Jobs',
        author: 'Walter Isaacson',
        readingStatus: true
    },
    {
        title: 'Mockingjay: The Final Book of The Hunger Games',
        author: 'Suzanne Collins',
        readingStatus: false
    }];
const data = library.map(data => {
    // console.log(data);
    var book = "'" + data.title + "'" + ' by ' + data.author + ".";
    // console.log("book", book);
    // data.readingStatus ? console.log("Already read " + book) : console.log("You still need to read " + book)
    let readingStatusTrue = []
    let readingStatusFalse = []

    if (data.readingStatus) {
        readingStatusTrue.push("Already read " + book)
    } else {
        readingStatusFalse.push("You still need to read " + book)
    }
    return readingStatusTrue + readingStatusFalse

})
console.log("data", data);

// for loop
for (let i = 0; i < library.length; i++) {
    // console.log(library[i]);

    var book = "'" + library[i].title + "'" + ' by ' + library[i].author + ".";
    if (library[i].readingStatus) {
        console.log("Already read " + book)
    } else {
        console.log("You still need to read " + book)
    }
}