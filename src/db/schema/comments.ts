import { relations } from "drizzle-orm";
import { int, mysqlTable, serial, text } from "drizzle-orm/mysql-core";
import { posts } from "./posts";
import { users } from "./users";

export const comments = mysqlTable("comments", {
    id: serial("id").primaryKey(),
    content: text("content"),
    authorID: int("authorID"),
    postID: int("postID"),
});

export const commentsRelations = relations(comments, ({ one }) => ({
    commentedPost: one(posts, {
        fields: [comments.postID],
        references: [posts.id],
    }),

    commentAuthor: one(users, {
        fields: [comments.authorID],
        references: [users.id],
    }),
}));
