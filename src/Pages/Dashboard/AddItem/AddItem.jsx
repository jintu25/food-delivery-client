import React from "react";
import { useForm } from "react-hook-form";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import Swal from "sweetalert2";

const image_upload_token = import.meta.env.VITE_image_upload_token;

const AddItem = () => {
  const image_hosting_key = `https://api.imgbb.com/1/upload?key=${image_upload_token}`;
  const [axiosSecure] = useAxiosSecure()
  const { register, handleSubmit, reset, formState: { errors }, } = useForm();
  const onSubmit = (data) => {
    const formData = new FormData();
    formData.append("image", data.image[0]);

    fetch(image_hosting_key, {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((imgResponse) => {
        if(imgResponse.success){
          const imgURL = imgResponse.data.display_url
          const {name, recipe, price, category} = data;
          const newItem = {name, recipe, price: parseFloat(price), category, image: imgURL}
          console.log(newItem)
          
          axiosSecure.post('/menu', newItem)
          .then(data => {
 
           if(data.data.insertedId){
            reset()
            Swal.fire({
            
              position: 'center',
              icon: 'success',
              title: 'Food Item added successfully...',
              showConfirmButton: false,
              timer: 1500
            })
           }
          })
        }
      });
  };
  return (
    <div className=" p-8  rounded-xl">
      <div className="text-center  m-auto md:w-4/12">
        <p className="text-[#f77846] font-medium text-lg mb-3">
          ---What's new?---
        </p>
        <h2 className=" border-y-2 py-4 border-slate-500 text-3xl lg:text-4xl font-semibold uppercase">
          Add An Item
        </h2>
      </div>

      <section className="max-w-4xl p-6 mx-auto bg-indigo-600 rounded-md shadow-md dark:bg-gray-800 mt-10">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="grid grid-cols-1 gap-6 mt-4">
            <div>
              <label
                className="text-white dark:text-gray-200"
                htmlFor="username">
                Recipe Name
              </label>
              <input
                {...register("name", { required: true })}
                id="name"
                name="name"
                type="text"
                placeholder="Recipe name"
                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
              />
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
              <div>
                <label
                  className="text-white dark:text-gray-200"
                  htmlFor="passwordConfirmation">
                  Select
                </label>
                <select
                  {...register("category", { required: true })}
                  className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring">
                  <option value="dessert">Dessert</option>
                  <option value="pizza">Pizza</option>
                  <option value="soup">Soup</option>
                  <option value="salad">Salad</option>
                  <option value="burger">Burger</option>
                  <option value="fried">Fried</option>
                </select>
              </div>
              <div>
                <label
                  className="text-white dark:text-gray-200"
                  htmlFor="username">
                  Recipe price
                </label>
                <input
                  {...register("price", { required: true })}
                  id="price"
                  type="number"
                  name="price"
                  placeholder="Price"
                  className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
                />
              </div>
            </div>

            <div>
              <label
                className="text-white dark:text-gray-200"
                htmlFor="passwordConfirmation">
                Text Area
              </label>
              <textarea
                {...register("recipe", { required: true })}
                id="textarea"
                type="textarea"
                name="recipe"
                placeholder="Bio"
                className="block w-full px-4 py-4 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"></textarea>
            </div>
            <div>
              <label className="block text-sm font-medium text-white">
                Image
              </label>
              <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md">
                <div className="space-y-1 text-center">
                  <svg
                    className="mx-auto h-12 w-12 text-white"
                    stroke="currentColor"
                    fill="none"
                    viewBox="0 0 48 48"
                    aria-hidden="true">
                    <path
                      d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  <div className="flex text-sm text-gray-600">
                    <label
                      htmlFor="file-upload"
                      className="relative cursor-pointer bg-white rounded-md font-medium text-indigo-600 hover:text-indigo-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500">
                      <span className="">Upload a file</span>
                      <input
                        {...register("image", { required: true })}
                        id="file-upload"
                        name="image"
                        type="file"
                        className="sr-only"
                      />
                    </label>
                    <p className="pl-1 text-white">or drag and drop</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="flex justify-end mt-6">
            <input
              className="px-6 py-2 leading-5 text-white transition-colors duration-200 transform bg-pink-500 rounded-md hover:bg-pink-700 focus:outline-none focus:bg-gray-600"
              type="submit"
              value="Add Item"
            />
          </div>
        </form>
      </section>
    </div>
  );
};

export default AddItem;
