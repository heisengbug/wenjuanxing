import React, { FC } from "react";
import { Space, Typography } from "antd";
import styles from "./Logo.module.scss";
import { FormOutlined } from "@ant-design/icons";

const { Title } = Typography;

const Logo: FC = () => {
  return (
    <div className={styles.logo}>
      <Space className={styles.space}>
        <Title>
          <FormOutlined></FormOutlined>
        </Title>
        <Title>问卷星</Title>
      </Space>
    </div>
  );
};

export default Logo;
