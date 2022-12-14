import express, { json } from 'express';

import cors from 'cors';
import dotenv from 'dotenv';
// eslint-disable-next-line import/no-unresolved
import { stripHtml } from 'string-strip-html';

export const cleanStringData = (string) => {
  stripHtml(JSON.stringify(string).replace(/"|"/gi, ``)).result.trim();
};

dotenv.config();

const app = express();
app.use(cors());
app.use(json());

const port = process.env.PORT;
app.listen(port, () => console.log(`Running server on http://localhost:${port}`));
