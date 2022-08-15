import classNames from "classnames/bind";
import styles from './MainLayout.module.scss';
import ChatRoom from '../../ChatRoom/index';

const cx = classNames.bind(styles);
function MainLayout() {
    return ( 
        <div className={cx('wrapper')}>
            <ChatRoom/>
        </div>
    );
}

export default MainLayout;