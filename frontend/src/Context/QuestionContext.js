import React from "react";
import { createContext, useContext ,useEffect, useReducer} from "react";
import Sidebar from "./Sidebar";
import "./css/index.css";
import Main from "./Main";
import axios from "axios";
import NewDrawer from "./NewDrawer";



function QuestionContext() {
  const [questions, setQuestions] = useState([]);

  useEffect(() => {
    async function getQuestion() {
      await axios.get("/api/question").then((res) => {
        setQuestions(res.data.reverse());
        // console.log(res.data)
      });
    }
    getQuestion();
  }, []);
  
  return (
    <div className="stack-index">
      <div className="stack-index-content">
        {/* <Sidebar /> */}
        {/* <Main questions={questions} /> */}
        <NewDrawer questions={questions}/>
      </div>
    </div>
  );
}

export default QuestionContext;
