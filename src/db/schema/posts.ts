import { relations } from "drizzle-orm";
import { int, mysqlTable, serial, varchar } from "drizzle-orm/mysql-core";

export const posts = mysqlTable("posts", {
    id: serial("id").primaryKey(),
    title: varchar("title", { length: 255 }),
    authorID: int("authorID"),
});
