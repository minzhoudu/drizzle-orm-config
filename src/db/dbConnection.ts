import { drizzle } from "drizzle-orm/mysql2";
import mysql from "mysql2/promise";
import * as schema1 from "./schema/posts";
import * as schema2 from "./schema/users";

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
        ...schema1,
        ...schema2,
    },
});
