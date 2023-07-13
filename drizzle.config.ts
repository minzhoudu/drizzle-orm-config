import type { Config } from "drizzle-kit";
import { credentials } from "./src/db/dbConnection";

export default {
    schema: "src/db/schema",
    out: "drizzle/migrations",
    driver: "mysql2",
    dbCredentials: credentials,
} satisfies Config;
