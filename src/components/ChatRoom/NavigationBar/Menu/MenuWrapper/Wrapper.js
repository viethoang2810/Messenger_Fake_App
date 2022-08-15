import classNames from "classnames/bind";
import styles from "./Wrapper.module.scss" ;

const cx = classNames.bind(styles);
function Wrapper({children}) {
    return ( 
        <nav className={cx('wrapper')}> {children} </nav>

     );
}

export default Wrapper;