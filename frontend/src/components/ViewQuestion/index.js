import React from "react";
import Sidebar from "../StackOverflow/Sidebar";
import "./index.css";
import MainQuestion from "./MainQuestion";
import Nsidebar from '../StackOverflow/Nsidebar'
function Index() {
  return (
    <div className="stack-index">
      <div className="stack-index-content">
        {/* <Nsidebar /> */}
        <MainQuestion />
      </div>
    </div>
  );
}

export default Index;
