const mongoose = require("mongoose");
const express = require("express");
const router = express.Router();
const questionRouter = require("./Question");
const answerRouter = require("./Asnwer");
const commentRouter = require('./Comments')
const postRouter=require('./Post')

router.get("/", (req, res) => {
  res.send("Welcome to stack overflow clone");
});

router.use("/question", questionRouter);
router.use("/answer", answerRouter);
router.use('/comment', commentRouter);
router.use('/post', postRouter);

module.exports = router;
