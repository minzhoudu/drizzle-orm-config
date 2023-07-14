import express from "express";

import { db } from "./db/dbConnection";
import { users } from "./db/schema/users";
import { posts } from "./db/schema/posts";

const app = express();
app.use(express.json());

app.get("/users", async (req, res) => {
    try {
        const users = await db.query.users.findMany({
            with: {
                posts: true,
                comments: true,
                groups: {
                    columns: {
                        groupID: false,
                        userID: false,
                    },
                    with: {
                        group: true,
                    },
                },
            },
        });

        res.status(200).json({
            message: "success",
            data: users,
        });
    } catch (error: any) {
        res.status(500).json({
            message: "failed",
            error: error.message,
        });
    }
});

app.post("/users", async (req, res) => {
    try {
        await db.insert(users).values({
            username: "jopzy",
        });

        res.status(201).json({
            message: "user successfully created",
        });
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "Something Went Wrong" });
    }
});

app.get("/posts", async (req, res) => {
    try {
        const allPosts = await db.query.posts.findMany({
            with: {
                author: {
                    columns: {
                        username: true,
                    },
                },
                comments: {
                    columns: {
                        content: true,
                    },
                },
            },
            columns: {
                id: false,
                authorID: false,
            },
        });

        res.status(200).json({
            message: "success",
            data: allPosts,
        });
    } catch (error: any) {
        res.status(500).json({
            message: "failed",
            error: error.message,
        });
    }
});

app.post("/posts", async (req, res) => {
    try {
        await db.insert(posts).values({
            authorID: 2,
            title: "My second Post",
        });

        res.status(201).json({
            message: "Post successfully created",
        });
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "Something Went Wrong" });
    }
});

app.listen(3000, () => console.log("Server is running"));
