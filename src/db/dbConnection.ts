import { drizzle } from "drizzle-orm/mysql2";
import mysql from "mysql2/promise";
import * as posts from "./schema/posts";
import * as users from "./schema/users";
import * as comments from "./schema/comments";

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
        ...posts,
        ...users,
        ...comments,
    },
});
