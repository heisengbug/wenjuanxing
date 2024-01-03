import React, { FC } from "react";
import { Outlet } from "react-router-dom";

const QuestionLayout: FC = () => {
  return (
    <div>
      <p>Question layout</p>
      <div>
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default QuestionLayout;
