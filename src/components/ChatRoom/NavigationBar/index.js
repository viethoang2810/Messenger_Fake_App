import classNames from "classnames/bind";
import styles from "./NavigationBar.module.scss" ;
import {Link} from 'react-router-dom';
import Logo from '../../../assets/Image/logo_transparent.png' ;

const cx = classNames.bind(styles);


function NavigationBar() {
    return ( 
        <div className={cx('wrapper')}>
            <div className={cx('logo-wrapper')}>
                <img src={Logo} alt="F-Chat Logo" className={cx('logo-imgage')}/>
            </div>
            <div className={cx('')}>

            </div>
        </div>
     );
}

export default NavigationBar;