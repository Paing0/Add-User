import React, { useState } from "react";
import FormBox from "./FormBox";
import List from "./List";
import Card from "./Card";

const MainComponent = () => {
  const [userInfo, setUserInfo] = useState([]);
  const getUserInfo = (userInfoObj) => {
    console.log(userInfoObj);
    setUserInfo([...userInfo, userInfoObj]);
  };
  return (
    <section className="main">
      <FormBox getUserInfo={getUserInfo} />
      <List userInfo={userInfo} />
    </section>
  );
};

export default MainComponent;
