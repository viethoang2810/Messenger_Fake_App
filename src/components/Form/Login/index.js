import classNames from 'classnames/bind';
import styles from './Login.module.scss' ;
import Button from '../../Button/Button'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faGoogle, faGooglePlus } from '@fortawesome/free-brands-svg-icons';

const cx = classNames.bind(styles);

function Login() {


    const handleSubmit = (e) => {
        e.preventDefault();
    }

    return ( 
        <div className={cx('wrapper')}>
            <h5 className={cx('form-title')}>Login</h5>
            <form onSubmit={handleSubmit} className={cx('form')}>
                <div className={cx('input-info')}>
                    <label>Username</label>
                    <input type="text" name="username" id="username" placeholder="Enter username ...."/>
                </div>
                <div className={cx('input-info')}>
                    <label>Password</label>
                    <input type="password" name="password" id="password" placeholder="Enter password ...."/>
                </div>
                <Button primary children="Login"/>
                <h5  className={cx('alternative-login')}>Or login with</h5>
                <div className={cx('alternative-social-media')}>
                    <FontAwesomeIcon icon={faGooglePlus} className={cx('google-dep')}/>
                    <FontAwesomeIcon icon={faFacebook} className={cx('facebook-dep')}/>
                </div>
            </form>
        </div>
     );
}

export default Login;