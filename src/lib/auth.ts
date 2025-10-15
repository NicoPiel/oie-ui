import { betterAuth } from 'better-auth';
import { username } from 'better-auth/plugins';
import Database from 'better-sqlite3';

const db = new Database('users.db');
db.pragma('journal_mode = WAL');

export const auth = betterAuth({
    database: db,
    emailAndPassword: {
        enabled: true,
    },
    plugins: [username()],
});
