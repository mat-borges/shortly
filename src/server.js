import express, { json } from 'express';

import authRouter from './routes/authRouter.js';
import cors from 'cors';
import dotenv from 'dotenv';
import rankingRouter from './routes/rankingRouter.js';
// eslint-disable-next-line import/no-unresolved
import { stripHtml } from 'string-strip-html';
import urlsRouter from './routes/urlsRouter.js';
import usersRouter from './routes/usersRouter.js';

export const cleanStringData = (string) => stripHtml(JSON.stringify(string)?.replace(/"|"/gi, ``)).result.trim();

dotenv.config();

const app = express();
app.use(cors());
app.use(json());

app.use(authRouter);
app.use(rankingRouter);
app.use(urlsRouter);
app.use(usersRouter);

const port = process.env.PORT;
app.listen(port, () => console.log(`Running server on http://localhost:${port}`));
