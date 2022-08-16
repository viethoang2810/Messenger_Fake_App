import classNames from "classnames/bind";
import styles from "./NavigationBar.module.scss";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Logo from "../../../assets/Image/logo_transparent.png";
import {
  faCommentDots,
  faGear,
  faHouse,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import { faGlobe } from "@fortawesome/free-solid-svg-icons";
import MenuItem from "./Menu/MenuItem";
import MenuWrapper from "./Menu/MenuWrapper/Wrapper";
const cx = classNames.bind(styles);

function NavigationBar() {
  return (
    <div className={cx("wrapper")}>
      <Link to={"/home"}>
        <div className={cx("logo-wrapper")}>
          <img src={Logo} alt="F-Chat Logo" className={cx("logo-imgage")} />
        </div>
      </Link>
      <MenuWrapper>
        <MenuItem icon={faHouse} to="/home" title={"Home"} />
        <MenuItem icon={faCommentDots} to="/chat" title={"Chat"} />
        <MenuItem icon={faUser} to="/profile" title={"Profile"} />
      </MenuWrapper>
      <div className={cx("menu-navigation")}>
        <MenuItem icon={faGlobe} to="/setting" title={"Languages"} />
        <MenuItem icon={faGear} to="/setting" title={"Setting"} />
      </div>
    </div>
  );
}

export default NavigationBar;
