import { relations } from "drizzle-orm";
import { mysqlTable, varchar, text, serial, int } from "drizzle-orm/mysql-core";

import { posts } from "./posts";
import { comments } from "./comments";
import { usersToGroups } from "./usersToGroups";

export const users = mysqlTable("users", {
    id: serial("id").primaryKey(),
    username: varchar("username", { length: 255 }),
});

export const usersRelations = relations(users, ({ many }) => ({
    posts: many(posts),
    comments: many(comments),

    groups: many(usersToGroups),
}));
