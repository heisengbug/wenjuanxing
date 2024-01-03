import { Empty, Typography } from "antd";
import React, { FC, useState } from "react";
import QuestionCard from "../../components/QuestionCard";
import styles from "./common.module.scss";

const { Title } = Typography;

const rawQuestionList = [
  {
    _id: "q1",
    title: "问卷1",
    isPublished: false,
    isStar: true,
    answerCount: 5,
    creatAt: "sept 11 15:31",
  },
  {
    _id: "q2",
    title: "问卷2",
    isPublished: false,
    isStar: true,
    answerCount: 3,
    creatAt: "sept 12 15:31",
  },
];
const Star: FC = () => {
  const [questionList, setQuestionList] = useState(rawQuestionList);

  return (
    <>
      <div className={styles.header}>
        <div className={styles.left}>
          <Title level={3}>星标问卷</Title>
        </div>
        <div className={styles.right}>
          {" "}
          <Title level={3}>search</Title>{" "}
        </div>
      </div>
      <div className={styles.content}>
        {questionList.length === 0 && <Empty />}
        {questionList.map((q) => {
          const { _id } = q;
          return <QuestionCard key={_id} {...q} />;
        })}
      </div>
      <div className={styles.footer}>分页</div>
    </>
  );
};

export default Star;
