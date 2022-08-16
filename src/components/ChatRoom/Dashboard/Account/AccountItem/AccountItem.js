import classNames  from "classnames/bind";
import styles from "./AccountItem.module.scss";

const cx = classNames.bind(styles);

function AccountItem() {
    return ( 
        <div className={cx("message-item")}>
            <div className={cx("message-item-wrapper")}>
              <img
                src="https://cdn.baogiaothong.vn/upload/images/2020-3/article_img/2020-09-17/bin4-1600331103-width800height1200-auto-crop.jpg"
                alt="Binz"
                className={cx('user-image')}
              />
              <div className={cx('active')}></div>
              <div className={cx('message-info')}>
                    <p className={cx('user-name')}>Binz</p>
                    <p className={cx('last-message')}>Ok bae ^^</p>
              </div>
            </div>
            <div className={cx('message-timer')}>
                <span className={cx('time')}>2:05</span>
            </div>
          </div>
     );
}

export default AccountItem;