import { relations } from "drizzle-orm";
import { mysqlTable, serial, varchar } from "drizzle-orm/mysql-core";

import { usersToGroups } from "./usersToGroups";

export const groups = mysqlTable("groups", {
    id: serial("id").primaryKey(),
    groupName: varchar("name", { length: 255 }).notNull(),
});

export const groupsRelations = relations(groups, ({ many }) => ({
    users: many(usersToGroups),
}));
