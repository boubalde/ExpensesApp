
const book ={
title: 'Ego is the Enemy',
author: 'Ryan Holiday',
publisher: {
    // name: 'penguin'
    }
};



const {name: publisherName = 'Self-Published' }= book.publisher

console.log(publisherName); // Penguin, Self-Published 

const item = ['Coffee (hot)', '$2.00', '$2.50', '$2.75']
const [thing,un,deux]=item
console.log(`A medium ${thing} costs ${deux}`);
