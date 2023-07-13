import { drizzle } from "drizzle-orm/mysql2";
import mysql from "mysql2/promise";

import { users } from "./schema/users";
import { posts } from "./schema/posts";

export const credentials = {
    host: "localhost",
    user: "root",
    password: "root",
    database: "testdb",
    port: 3306,
};

const connection = mysql.createPool(credentials);

export const db = drizzle(connection, {
    schema: {
        users,
        posts,
    },
});
