import classNames from 'classnames/bind';
import Login from '../../Form/Login/index'
import styles from './DefaultLayout.module.scss';

const cx = classNames.bind(styles);

function DefaultLayout() {
    return ( 
        <div className={cx('wrapper')}>
            <Login />
        </div>
     );
}

export default DefaultLayout;