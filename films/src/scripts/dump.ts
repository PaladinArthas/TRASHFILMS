import fs from 'node:fs/promises';
import path from 'node:path';
import { sqliteAll } from '../database/db-connections';

async function main() {
  const rows = await sqliteAll('SELECT * FROM films');

  if (!Array.isArray(rows)) {
    throw new Error('Ожидался массив из БД');
  }

  const outPath = path.join(process.cwd(), 'cards.json');
  await fs.writeFile(outPath, JSON.stringify(rows, null, 2), 'utf8');

  console.log(`Сохранил ${rows.length} карточек в ${outPath}`);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
