import ReactStars from "react-rating-stars-component";
import React from "react";
import { render } from "react-dom";
import Title from "../../../Components/HeadTitle/Title";
import { useForm } from "react-hook-form";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import { useState } from "react";
import Swal from "sweetalert2";

const AddReview = () => {
  const [rating, setRating] = useState(0);
  const [axiosSecure] = useAxiosSecure();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const ratingChanged = (newRating) => {
    setRating(newRating);
  };

  const onSubmit = (data) => {
    const { name, message } = data;
    const reviews = { name, details: message, rating };
    console.log(reviews);

    fetch("https://food-delivery-server-lyeo2f351-jintu45.vercel.app/review", {
      method: "POST",
      headers: {
        "content-type": "application/json",
        authorization: `bearer ${localStorage.getItem("access-token")}`,
      },
      body: JSON.stringify(reviews),
    })
      .then((res) => res.json())
      .then((result) => {
        console.log("result", result);
        reset()
        if (result.insertedId) {
          Swal.fire({
            position: "center",
            icon: "success",
            title: "Thank you for your review...",
            showConfirmButton: false,
            timer: 1500,
          });
        }
      });
  };

  return (
    <>
      <Title title="tastyDash | dashboard | addReview"></Title>

      <div className="max-w-2xl bg-white py-10 px-5 m-auto w-full mt-10">
        <div className="text-3xl mb-6 text-center ">
          Please provide your experience
        </div>

        <form
          onSubmit={handleSubmit(onSubmit)}
          className="grid grid-cols-2 gap-4 max-w-xl m-auto">
          <div className="col-span-2 lg:col-span-1">
            <input
              {...register("name", { required: true })}
              type="text"
              name="name"
              id="name"
              className="border-solid border-gray-400 border-2 p-3 md:text-xl w-full"
              placeholder="Name"
            />
          </div>
          <div className="col-span-2 lg:col-span-1">
            <input
              {...register("email", { required: true })}
              type="text"
              name="email"
              id="email"
              className="border-solid border-gray-400 border-2 p-3 md:text-xl w-full"
              placeholder="Email Address"
            />
          </div>
          <div className="col-span-2">
            <textarea
              {...register("message", { required: true })}
              cols="30"
              rows="8"
              name="message"
              id="message"
              className="border-solid border-gray-400 border-2 p-3 md:text-xl w-full"
              placeholder="Message"></textarea>
          </div>
          <div className="flex">
            <ReactStars
              count={5}
              onChange={ratingChanged}
              size={40}
              activeColor="#ffd700"
            />
          </div>
          <div className="col-span-2 text-right">
           <button className="btn btn-primary">
           <input
              className="py-3 px-6 font-bold w-full sm:w-32 cursor-pointer"
              type="submit"
              value="Add Review"
            />
           </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default AddReview;
