import classNames from "classnames/bind";
import styles from "./MenuItem.module.scss";
import Tippy from "@tippyjs/react";
import React from "react";
import HeadlessTippy from "@tippyjs/react"; // different import path!
import 'tippy.js/dist/tippy.css'; // optional
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const cx = classNames.bind(styles);
function MenuItem({ icon, to, title }) {
  return (
    <React.Fragment>
        <HeadlessTippy content={title}>
          <NavLink
            to={to}
            className={(nav) => cx("menu-item", { active: nav.isActive })}
          >
            <FontAwesomeIcon icon={icon} />
          </NavLink>
        </HeadlessTippy>
    </React.Fragment>
  );
}

export default MenuItem;
