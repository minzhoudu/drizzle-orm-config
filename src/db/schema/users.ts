import { relations } from "drizzle-orm";
import { mysqlTable, varchar, text, serial, int } from "drizzle-orm/mysql-core";

import { posts } from "./posts";

export const users = mysqlTable("users", {
    id: serial("id").primaryKey(),
    username: varchar("username", { length: 255 }),
});

export const usersRelations = relations(users, ({ one }) => ({
    post: one(posts, {
        fields: [users.id],
        references: [posts.authorID],
    }),
}));
