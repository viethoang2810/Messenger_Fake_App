import classNames from "classnames/bind";
import styles from "./ChatRoom.module.scss";
import NavigationBar from "./NavigationBar/index";
import { Context } from "../Layout/MainLayout/Context";
import { useContext } from "react";
const cx = classNames.bind(styles);

function ChatRoom() {
  const Page = useContext(Context);

  return (
    <div className={cx("wrapper")}>
      <NavigationBar />
      <div className={cx("list-user")}>
        <Page />
      </div>
      <div className={cx("chat-box")}></div>
    </div>
  );
}

export default ChatRoom;
