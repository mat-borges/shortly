import dotenv from 'dotenv';
import pg from 'pg';

const { Pool } = pg;

dotenv.config();

// export const connection = new Pool({ connectionString: process.env.DATABASE_URL });

export const connection = new Pool({
  user: process.env.PGUSER,
  host: process.env.PGHOST,
  database: process.env.PGDATABASE,
  password: process.env.PGPASSWORD,
  port: process.env.PGPORT,
});
