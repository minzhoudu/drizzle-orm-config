import { relations } from "drizzle-orm";
import { int, mysqlTable, serial, varchar } from "drizzle-orm/mysql-core";
import { users } from "./users";

export const posts = mysqlTable("posts", {
    id: serial("id").primaryKey(),
    title: varchar("title", { length: 255 }),
    authorID: int("authorID"),
});

export const postsRelations = relations(posts, ({ one }) => ({
    author: one(users, {
        fields: [posts.authorID],
        references: [users.id],
    }),
}));
