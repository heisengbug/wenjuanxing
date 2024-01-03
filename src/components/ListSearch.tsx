import { Input } from "antd";
import React, { ChangeEvent, FC, useState } from "react";

const { Search } = Input;

const ListSearch: FC = () => {
  const [value, setValue] = useState("");

  function handleChange(event: ChangeEvent<HTMLInputElement>) {
    setValue(event.target.value);
  }

  function handleSearch(value: string) {
    console.log("value", value);
  }
  return (
    <Search
      size="large"
      allowClear
      placeholder="输入关键字"
      value={value}
      onChange={handleChange}
      onSearch={handleSearch}
      style={{ width: "200px" }}
    ></Search>
  );
};

export default ListSearch;
