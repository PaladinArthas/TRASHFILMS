import fs from 'node:fs';

const cards = JSON.parse(fs.readFileSync('public/cards.json', 'utf8'));
console.log(cards);