import { relations } from "drizzle-orm";
import { int, mysqlTable, serial, varchar } from "drizzle-orm/mysql-core";

import { users } from "./users";
import { comments } from "./comments";

export const posts = mysqlTable("posts", {
    id: serial("id").primaryKey(),
    title: varchar("title", { length: 255 }),
    authorID: int("authorID"),
});

export const postsRelations = relations(posts, ({ one, many }) => ({
    author: one(users, {
        fields: [posts.authorID],
        references: [users.id],
    }),

    comments: many(comments),
}));
