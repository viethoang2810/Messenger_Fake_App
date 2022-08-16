import classNames from "classnames/bind";
import styles from "./Account.module.scss";


const cx = classNames.bind(styles);
function Account({children}) {
    return ( 
        <div className={cx("user-message")}>
            {children}
        </div>
        
     );
}

export default Account;