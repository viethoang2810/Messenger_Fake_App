import classNames from "classnames/bind";
import styles from './ChatRoom.module.scss';
import NavigationBar from './NavigationBar/index'
const cx = classNames.bind(styles);

function ChatRoom() {
    return ( 
        <div className={cx('wrapper')}>
            <NavigationBar />
            <div className={cx('list-user')}>

            </div>
            <div className={cx('chat-box')}>

            </div>
        </div>
     );
}

export default ChatRoom;