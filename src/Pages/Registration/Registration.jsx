import React, { useState } from "react";
import signUpImg from "../../assets/others/signup.jpg";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { BiSolidHide, BiSolidShow } from "react-icons/bi";
import Title from "../../Components/HeadTitle/Title";
import { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProvider";
import Swal from "sweetalert2";
import SocialLogin from "../Shared/SocialLogin/SocialLogin";

const Registration = () => {
  const [showPassword, setShowPassword] = useState(false);
  const { createUser, updateUserProfile } = useContext(AuthContext);
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    reset,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    createUser(data.email, data.password).then((result) => {
      const user = result.user;
      updateUserProfile(data.name, data.photoURL)
        .then(() => {
          const saveUser = { name: data.name, email: data.email };
          fetch(
            "https://food-delivery-server-lyeo2f351-jintu45.vercel.app/users",
            {
              method: "POST",
              headers: {
                "content-type": "application/json",
              },
              body: JSON.stringify(saveUser),
            }
          );
          reset();
          Swal.fire({
            position: "center",
            icon: "success",
            title: "Sign Up successfully...",
            showConfirmButton: false,
            timer: 1500,
          });
          navigate("/");
        })
        .catch((error) => {
          alert(error);
        });
    });
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };
  return (
    <div>
      <Title title="tastyDash | signup"></Title>
      <section className="flex py-12 flex-col md:flex-row h-screen items-center">
        <div className="bg-indigo-600 lg:block w-full md:w-1/2 xl:w-3/5 h-screen">
          <img src={signUpImg} alt="" className="w-full h-full object-cover" />
        </div>

        <div
          className="bg-white w-full md:max-w-md lg:max-w-full md:m-auto md:mx-0 md:w-1/2 xl:w-2/5 h-screen px-6 lg:px-16 xl:px-12
      flex items-center justify-center">
          <div className="w-full h-100">
            <h1 className="text-xl md:text-2xl font-bold leading-tight mt-12">
              Sign up
            </h1>

            <form
              onSubmit={handleSubmit(onSubmit)}
              className="mt-6"
              action="#"
              method="POST">
              <div>
                <label className="block text-gray-700">Type Your Name</label>
                <input
                  {...register("name", { required: true })}
                  type="text"
                  name="name"
                  id=""
                  placeholder="Type your Name"
                  className="w-full px-4 py-3 rounded-lg bg-gray-200 mt-2 border focus:border-blue-500 focus:bg-white focus:outline-none"
                  autoFocus
                  required
                />
                {errors.name && (
                  <span className="text-red-500 text-sm font-semibold">
                    Name field is required
                  </span>
                )}
              </div>

              <div>
                <label className="block text-gray-700">
                  Type Your PhotoURL
                </label>
                <input
                  {...register("photoURL", { required: true })}
                  type="text"
                  id=""
                  placeholder="photoURL"
                  className="w-full px-4 py-3 rounded-lg bg-gray-200 mt-2 border focus:border-blue-500 focus:bg-white focus:outline-none"
                  autoFocus
                  required
                />
                {errors.photoURL && (
                  <span className="text-red-500 text-sm font-semibold">
                    photoURL field is required
                  </span>
                )}
              </div>
              <div className="mt-4">
                <label className="block text-gray-700">Type your E-mail</label>
                <input
                  type="email"
                  name="email"
                  {...register("email", { required: true })}
                  id=""
                  placeholder="Type your Name"
                  minLength="6"
                  className="w-full px-4 py-3 rounded-lg bg-gray-200 mt-2 border focus:border-blue-500
              focus:bg-white focus:outline-none"
                  required
                />
                {errors.email && (
                  <span className="text-red-500 text-sm font-semibold">
                    Please Type Your E-mail
                  </span>
                )}
              </div>

              <div className="mt-4">
                <label className="block text-gray-700">Password</label>
                <div className="relative">
                  <input
                    type={showPassword ? "text" : "password"}
                    placeholder="Type your password"
                    name="password"
                    className="input input-bordered w-full"
                    {...register("password", {
                      required: "Password is required",
                      minLength: {
                        value: 6,
                        message: "Password must be at least 6 characters",
                      },
                      pattern: {
                        value:
                          /^(?=^.{8,}$)((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/,
                        message: "Password must be strong",
                      },
                    })}
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
                {errors.password && (
                  <p role="alert" className="text-red-600">
                    {errors.password?.message}
                  </p>
                )}
              </div>

              <input
                type="submit"
                value="Sign Up"
                className="w-full block bg-indigo-500 hover:bg-indigo-400 focus:bg-indigo-400 text-white font-semibold rounded-lg
            px-4 py-3 mt-6"
              />
            </form>

            <SocialLogin></SocialLogin>

            <p className="mb-8 mt-3 text-center">
              Already have an account{" "}
              <Link
                to="/login"
                href="#"
                className="text-blue-500 hover:text-blue-700 font-semibold">
                Please Login
              </Link>
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Registration;
