const express = require("express");
const mongoose = require("mongoose");
const router = express.Router();
const Post = require("../models/Post");

router.post("/", async (req, res) => {
  const postData = new Post({
    title: req.body.title,
    body: req.body.body,
    code: req.body.code,
    tags: req.body.tag,
    user: req.body.user,
  });

  try {
    const savedPost = await postData.save();
    res.status(201).json(savedPost);
  } catch (error) {
    res.status(400).json({ message: "Post not added successfully", error });
  }
});

router.get("/:id", async (req, res) => {
  try {
    const postDetails = await Post.aggregate([
      {
        $match: { _id: mongoose.Types.ObjectId(req.params.id) },
      },
      {
        $lookup: {
          from: "comments",
          let: { post_id: "$_id" },
          pipeline: [
            {
              $match: {
                $expr: {
                  $eq: ["$post_id", "$$post_id"],
                },
              },
            },
            {
              $project: {
                _id: 1,
                post_id: 1,
                user: 1,
                comment: 1,
                created_at: 1,
              },
            },
          ],
          as: "comments",
        },
      },
      // Add other lookup stages for additional related data if needed
      {
        $project: {
          __v: 0,
        },
      },
    ]);

    res.status(200).json(postDetails);
  } catch (err) {
    res.status(400).json({ message: "Post not found", error: err });
  }
});

router.get("/", async (req, res) => {
  try {
    const postDetails = await Post.aggregate([
      {
        $lookup: {
          from: "comments",
          let: { post_id: "$_id" },
          pipeline: [
            {
              $match: {
                $expr: {
                  $eq: ["$post_id", "$$post_id"],
                },
              },
            },
            {
              $project: {
                _id: 1,
                post_id: 1,
                user: 1,
                comment: 1,
                created_at: 1,
              },
            },
          ],
          as: "comments",
        },
      },
      // Add other lookup stages for additional related data if needed
      {
        $project: {
          __v: 0,
        },
      },
    ]);

    res.status(200).json(postDetails);
  } catch (error) {
    res.status(400).json({ message: "Error in retrieving posts", error });
  }
});

module.exports = router;
