import 'reflect-metadata';
import { DataSource } from 'typeorm';
import { ContactSubmission } from '@/entities/ContactSubmission';
import path from 'path';
import fs from 'fs';

const dbPath = process.env.DATABASE_PATH || './data/database.sqlite';
const resolvedDbPath = path.resolve(process.cwd(), dbPath);
const dbDir = path.dirname(resolvedDbPath);

if (!fs.existsSync(dbDir)) {
  fs.mkdirSync(dbDir, { recursive: true });
}

let dataSource: DataSource | null = null;

export async function getDataSource(): Promise<DataSource> {
  if (dataSource && dataSource.isInitialized) {
    return dataSource;
  }

  dataSource = new DataSource({
    type: 'better-sqlite3',
    database: resolvedDbPath,
    synchronize: true,
    logging: process.env.NODE_ENV === 'development',
    entities: [ContactSubmission],
  });

  await dataSource.initialize();
  return dataSource;
}
