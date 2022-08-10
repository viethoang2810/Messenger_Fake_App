import classNames from "classnames/bind";
import styles from "./Login.module.scss";
import Button from "../../Button/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faGooglePlus } from "@fortawesome/free-brands-svg-icons";
import { authentication } from "../../Firbase/Config";
import { signInWithPopup , FacebookAuthProvider } from "firebase/auth";


const cx = classNames.bind(styles);

function Login() {
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const loginWithFacebook = () => {
    const provider = new FacebookAuthProvider();
    signInWithPopup(authentication,provider)
    .then((res) => {
      console.log(res);
    })
    .catch((err) => {
      console.log(err);
    })
  }
  return (
    <div className={cx("wrapper")}>
      <h5 className={cx("form-title")}>Login</h5>
      <form onSubmit={handleSubmit} className={cx("form")}>
        <div className={cx("input-info")}>
          <label>Username</label>
          <input
            type="text"
            name="username"
            id="username"
            placeholder="Enter username ...."
          />
        </div>
        <div className={cx("input-info")}>
          <label>Password</label>
          <input
            type="password"
            name="password"
            id="password"
            placeholder="Enter password ...."
          />
        </div>
        <Button primary children="Login" />
        <h5 className={cx("alternative-login")}>Or login with</h5>
        <div className={cx("alternative-social-media")}>
          <button className={cx("btn-login", "google-login")} >
            <span>Login with Google</span>
            <FontAwesomeIcon icon={faGooglePlus} className={cx("google-dep")} />
          </button>
          <button className={cx("btn-login", "facebook-login")} onClick={loginWithFacebook}>
            <span>Login with Facebook</span>
            <FontAwesomeIcon icon={faFacebook} className={cx("facebook-dep")} />
          </button>
        </div>
      </form>
    </div>
  );
}

export default Login;
