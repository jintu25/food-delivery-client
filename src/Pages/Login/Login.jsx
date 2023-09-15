import { Link, useHref, useLocation, useNavigate } from "react-router-dom";
import loginImg from "../../assets/others/6343845.jpg";
import {
  loadCaptchaEnginge,
  LoadCanvasTemplate,
  LoadCanvasTemplateNoReload,
  validateCaptcha,
} from "react-simple-captcha";
import { useEffect, useRef, useState } from "react";
import { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProvider";
import { BiSolidHide, BiSolidShow } from "react-icons/bi";
import Title from "../../Components/HeadTitle/Title";
import Swal from "sweetalert2";
import SocialLogin from "../Shared/SocialLogin/SocialLogin";

const Login = () => {
  const [disabled, setDisabled] = useState(true);
  const { signIn } = useContext(AuthContext);
  const [showPassword, setShowPassword] = useState(false);
  const location = useLocation()
  const navigate = useNavigate()

  let from = location.state?.from?.pathname || "/";

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };
  useEffect(() => {
    loadCaptchaEnginge(6);
  }, []);
  const handleLogin = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
   
    signIn(email, password)
    .then(result => {
      const user = result.user;
      console.log(user)
      Swal.fire({
        position: 'center',
        icon: 'success',
        title: 'Login successFully...',
        showConfirmButton: false,
        timer: 1500
      })
      navigate(from, { replace: true });
    })
  };
  const handleCaptcha = (e) => {
    const user_captcha_value = e.target.value;
    if (validateCaptcha(user_captcha_value)) {
      setDisabled(false);
    } else {
      setDisabled(true);
    }
  };
  return (
    <>
    <Title title='tastyDash | Login'></Title>
      <div className="py-12">
      <section className="flex flex-col md:flex-row h-screen items-center">
        <div className="bg-indigo-600 lg:block w-full md:w-1/2 xl:w-3/5 h-screen">
          <img src={loginImg} alt="" className="w-full h-full object-cover" />
        </div>

        <div
          className="bg-white w-full md:max-w-md lg:max-w-full md:m-auto md:mx-0 md:w-1/2 xl:w-2/5 h-screen px-6 lg:px-16 xl:px-12
      flex items-center justify-center">
          <div className="w-full h-100">
            <h1 className="text-xl md:text-2xl font-bold leading-tight mt-12">
              Log in to your account
            </h1>

            <form
              onSubmit={handleLogin}
              className="mt-6"
              action="#"
              method="POST">
              <div>
                <label className="block text-gray-700">Email Address</label>
                <input
                  type="email"
                  name="email"
                  id=""
                  placeholder="Enter Email Address"
                  className="w-full px-4 py-3 rounded-lg bg-gray-200 mt-2 border focus:border-blue-500 focus:bg-white focus:outline-none"
                  autoFocus
                  required
                />
              </div>

              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"} // Toggle input type
                  name="password"
                  id=""
                  placeholder="Enter Password"
                  minLength="6"
                  className="w-full px-4 py-3 rounded-lg bg-gray-200 mt-2 border focus:border-blue-500
          focus:bg-white focus:outline-none"
                  required
                />
                <button
                  type="button"
                  onClick={togglePasswordVisibility}
                  className="absolute top-1/2 right-3 transform -translate-y-1/2 focus:outline-none">
                  {showPassword ? (
                    <span className="text-2xl">
                      <BiSolidShow></BiSolidShow>
                    </span>
                  ) : (
                    <span className="text-2xl">
                      <BiSolidHide></BiSolidHide>
                    </span>
                  )}
                </button>
              </div>

              <div className="mt-4">
                <label className="label">
                  <LoadCanvasTemplate />
                </label>
                <input
                  type="text"
                  name="captcha"
                  id=""
                  onBlur={handleCaptcha}
                  placeholder="Type the Captcha above"
                  minLength="6"
                  className="w-full px-4 py-3 rounded-lg bg-gray-200 mt-2 border focus:border-blue-500
              focus:bg-white focus:outline-none"
                  required
                />
              </div>

              <input
                disabled={disabled}
                className="btn btn-primary w-full block
            px-4 py-3 mt-6"
                type="submit"
                value="Log In"
              />
            </form>

            <SocialLogin></SocialLogin>

            <p className="mt-3 mb-8 text-center">
              Need an account?{" "}
              <Link
                to="/signup"
                href="#"
                className="text-blue-500 hover:text-blue-700 font-semibold">
                Create an account
              </Link>
            </p>
          </div>
        </div>
      </section>
    </div>
    </>
  );
};

export default Login;
