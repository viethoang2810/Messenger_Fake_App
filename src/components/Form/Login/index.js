import classNames from "classnames/bind";
import styles from "./Login.module.scss";
import Button from "../../Button/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faGooglePlus } from "@fortawesome/free-brands-svg-icons";
import { auth } from "../../Firbase/Config";
import { signInWithPopup, FacebookAuthProvider, GoogleAuthProvider } from "firebase/auth";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useNavigate } from "react-router-dom";
import { UserAuth } from "../../Firbase/GoogleAuth";

const cx = classNames.bind(styles);

function Login() {
  const navigation = useNavigate();
  const formik = useFormik({
    initialValues: {
      username: "",
      password: "",
    },
    validationSchema: Yup.object({
      username: Yup.string()
        .required("Required")
        .min(7, "Must be contain at least 7 letters"),
      password: Yup.string().required("Required"),
    }),
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });

  const loginWithFacebook = () => {
    const provider = new FacebookAuthProvider();
    signInWithPopup(auth, provider)
      .then((res) => {
        navigation("/home");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const hanleSignInWithGoogle = async () => {
    // const { googleSignIn } = UserAuth();
    // try {
    //   await googleSignIn();
    // } catch (error) {
    //   console.log(error);
    // }
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider)
    .then((res) => {
      navigation('/home')
    })
  };
  console.log(formik.errors.username);
  return (
    <div className={cx("wrapper")}>
      <h5 className={cx("form-title")}>Login</h5>
      <form onSubmit={formik.handleSubmit} className={cx("form")}>
        <div className={cx("input-info")}>
          <label>Username</label>
          <input
            type="text"
            name="username"
            id="username"
            placeholder="Enter username ...."
            onChange={formik.handleChange}
            value={formik.values.username}
          />
          {formik.errors.username ? (
            <p className={cx("errorMsg")}>{formik.errors.username}</p>
          ) : null}
        </div>
        <div className={cx("input-info")}>
          <label>Password</label>
          <input
            type="password"
            name="password"
            id="password"
            placeholder="Enter password ...."
            onChange={formik.handleChange}
            value={formik.values.password}
          />
          {formik.errors.password ? (
            <p className={cx("errorMsg")}>{formik.errors.password}</p>
          ) : null}
        </div>
        <Button primary children="Login" />
        <h5 className={cx("alternative-login")}>Or login with</h5>
        <div className={cx("alternative-social-media")}>
          <button
            className={cx("btn-login", "google-login")}
            onClick={hanleSignInWithGoogle}
          >
            <span>Login with Google</span>
            <FontAwesomeIcon icon={faGooglePlus} className={cx("google-dep")} />
          </button>
          <button
            className={cx("btn-login", "facebook-login")}
            onClick={loginWithFacebook}
          >
            <span>Login with Facebook</span>
            <FontAwesomeIcon icon={faFacebook} className={cx("facebook-dep")} />
          </button>
        </div>
      </form>
    </div>
  );
}

export default Login;
