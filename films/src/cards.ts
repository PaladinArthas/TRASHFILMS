import { getManyCards, getOneCard } from './database/cards-repository';

async function main() {
  const cards = await getOneCard('1');
  console.log(cards);
}

main().catch(console.error);
