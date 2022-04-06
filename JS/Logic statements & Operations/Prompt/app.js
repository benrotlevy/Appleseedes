let numSiblings = prompt('How many siblings do you have?');
numSiblings = Number(numSiblings);
if(numSiblings === 1) {
    console.log('1 sibling!');
} else if (numSiblings > 1) {
    console.log('More than 1 sibling');
} else {
    console.log('No siblings');
}

// we should use === instead of == because now we support the user input "01"