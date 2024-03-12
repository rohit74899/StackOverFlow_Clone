import React, { useEffect, useState } from "react";
import Sidebar from "./Sidebar";
import "./css/index.css";
import Main from "./Main";
import axios from "axios";
import NewDrawer from "./NewDrawer";
import Posts from "./Pages/Posts";

function Index() {
  const [questions, setQuestions] = useState([]);
  const [posts, setPosts] = useState([]);


  useEffect(() => {
    async function getQuestion() {
      await axios.get("/api/question").then((res) => {
        setQuestions(res.data.reverse());
        console.log(res.data)
      });
      
    }
    getQuestion();
  }, []);

  useEffect(() => {
    async function getPosts() {
      await axios.get("/api/post").then((res) => {
        setPosts(res.data.reverse());
        console.log(res.data)
      });
    }
    getPosts();
  }, []);
  
  return (
    <div className="stack-index">
      <div className="stack-index-content">
        {/* <Sidebar /> */}
        {/* <Main questions={questions} /> */}
        <NewDrawer questions={questions} posts={posts}/>
        {/* <Posts questions={questions} posts={posts}/> */}
      </div>
    </div>
  );
}

export default Index;
