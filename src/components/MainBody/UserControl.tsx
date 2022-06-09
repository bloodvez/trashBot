import React from "react";
import { observer } from "mobx-react-lite";
import { TrashContext } from "../..";
import Sidebar from "../Sidebar/Sidebar";
import { MainBodyWrapper, MenuHeader } from "./components";

const UserControl = observer(() => {
  const trash = React.useContext(TrashContext);

  return (
    <>
      <Sidebar />
      <MainBodyWrapper>
      <MenuHeader>Действия</MenuHeader>
        <button onClick={() => trash.refreshToken()}>refresh</button>
      </MainBodyWrapper>
    </>
  );
});

export default UserControl;
