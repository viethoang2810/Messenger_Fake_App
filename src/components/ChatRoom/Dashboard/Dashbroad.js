import classNames from "classnames/bind";
import styles from "./Dashbroad.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import React from "react";
import Account from '../Dashboard/Account/Account'
import AccountItem from "./Account/AccountItem/AccountItem";
const cx = classNames.bind(styles);

function Dashbroad() {
  return (
    <div className={cx("wrapper")}>
      <h5 className={cx("dashbroad-title")}>Chats</h5>
      <div className={cx("dashbroad-item")}>
        <div className={cx("dashbroad-search")}>
          <span>
            <FontAwesomeIcon
              icon={faMagnifyingGlass}
              className={cx("search-icon")}
            />
          </span>
          <input
            type="text"
            placeholder="Search messenges or user"
            className={cx("search-input")}
          />
        </div>
        <h5 className={cx("dashbroad-title")}>Recent</h5>
        <Account>
          <AccountItem/>
          <AccountItem/>
          <AccountItem/>
          <AccountItem/>
          <AccountItem/>
          <AccountItem/>
          <AccountItem/>
          <AccountItem/>
          <AccountItem/>
          <AccountItem/>
          <AccountItem/>
          <AccountItem/>
          <AccountItem/>
        </Account>
          
      </div>
    </div>
  );
}

export default Dashbroad;
