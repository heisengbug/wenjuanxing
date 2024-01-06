import { Input } from "antd";
import React, { ChangeEvent, FC, useEffect, useState } from "react";
import { useLocation, useNavigate, useSearchParams } from "react-router-dom";
import { LIST_SEARCH_PARAM_KEY } from "../constant";

const { Search } = Input;

const ListSearch: FC = () => {
  const nav = useNavigate();
  const [value, setValue] = useState("");
  const { pathname } = useLocation();

  function handleChange(event: ChangeEvent<HTMLInputElement>) {
    setValue(event.target.value);
  }

  const [searchParams] = useSearchParams();
  useEffect(() => {
    setValue(searchParams.get(LIST_SEARCH_PARAM_KEY) || "");
  }, [searchParams]);

  function handleSearch(value: string) {
    nav({
      pathname,
      search: `${LIST_SEARCH_PARAM_KEY}=${value}`,
    });
    // console.log(searchParams.get(LIST_SEARCH_PARAM_KEY));
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
