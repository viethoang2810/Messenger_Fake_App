import classNames from 'classnames/bind';
import Login from '../../Form/Login/index'
import styles from './DefaultLayout.module.scss';
import GlobalStyle from '../../GlobalStyle/GlobalStyle'
const cx = classNames.bind(styles);

function DefaultLayout() {
    return ( 
            <div className={cx('wrapper')}>
                <GlobalStyle><Login /></GlobalStyle>
            </div>
        
     );
}

export default DefaultLayout;