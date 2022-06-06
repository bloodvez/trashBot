import React from "react";
import { observer } from "mobx-react-lite";
import { TrashContext } from "../..";
import Sidebar from "../Sidebar/Sidebar";
import { MainBodyWrapper } from "./components";

const UserControl = observer(() => {
  const trash = React.useContext(TrashContext);

  return (
    <>
      <Sidebar />
      <MainBodyWrapper>
        <button onClick={() => trash.refreshToken()}>refresh</button>
        <button onClick={() => trash.fetchUserData()}>fetch</button>
      </MainBodyWrapper>
    </>
  );
});

export default UserControl;
