import { relations } from "drizzle-orm";
import { mysqlTable, varchar, text, serial, int, primaryKey, bigint } from "drizzle-orm/mysql-core";

import { groups } from "./groups";
import { users } from "./users";

export const usersToGroups = mysqlTable(
    "users_to_groups",
    {
        userID: int("user_id")
            .notNull()
            .references(() => users.id),
        groupID: int("group_id")
            .notNull()
            .references(() => groups.id),
    },
    (self) => ({
        pk: primaryKey(self.userID, self.groupID),
    })
);

export const usersToGroupsRelations = relations(usersToGroups, ({ one }) => ({
    group: one(groups, {
        fields: [usersToGroups.groupID],
        references: [groups.id],
    }),
    user: one(users, {
        fields: [usersToGroups.userID],
        references: [users.id],
    }),
}));
