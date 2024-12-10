import React from 'react';
import { useForm } from 'react-hook-form';
import Navbar from '../components/Navbar'
import contact from '../../public/contact.png'

function Contact() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <>
     <Navbar/>
     
     
     <div className="flex flex-col items-center min-h-screen bg-gradient-to-r from-blue-50 to-red-200">
  {/* Header and Image Section */}
  <div className="flex flex-row items-center justify-between w-4/5 mt-10">
    {/* Text Section */}
    <div>
      <h1 className="text-5xl font-bold text-gray-800">Bookstore</h1>
      <h2 className="text-2xl text-red-500 mt-3">Contact Us</h2>
    </div>

    {/* Image */}
    <div>
      <img
        src={contact}
        alt="Contact Illustration"
        className="w-[300px] h-[250px] object-cover shadow-md rounded-lg mt-20"
      />
    </div>
  </div>

  {/* Form Section */}
  <form
    onSubmit={handleSubmit(onSubmit)}
    method="dialog"
    className="mt-12 p-8 bg-white shadow-lg rounded-xl w-4/5 max-w-lg"
  >
    {/* Name Input */}
    <div className="mb-6">
      <label className="block text-lg font-semibold text-gray-700 mb-2">
        Name
      </label>
      <input
        type="text"
        placeholder="Enter your name"
        className="w-full px-4 py-2 border rounded-lg outline-none focus:ring-2 focus:ring-purple-400"
        {...register("name", { required: true })}
      />
      {errors.name && (
        <span className="text-sm text-red-500 mt-1">This field is required</span>
      )}
    </div>

    {/* Email Input */}
    <div className="mb-6">
      <label className="block text-lg font-semibold text-gray-700 mb-2">
        Email
      </label>
      <input
        type="email"
        placeholder="Enter your email"
        className="w-full px-4 py-2 border rounded-lg outline-none focus:ring-2 focus:ring-red-500"
        {...register("email", { required: true })}
      />
      {errors.email && (
        <span className="text-sm text-red-500 mt-1">This field is required</span>
      )}
    </div>

    {/* Message Input */}
    <div className="mb-6">
      <label className="block text-lg font-semibold text-gray-700 mb-2">
        Message
      </label>
      <textarea
        placeholder="Enter your message"
        className="w-full px-4 py-2 border rounded-lg outline-none focus:ring-2 focus:ring-red-500 h-32"
        {...register("message", { required: true })}
      ></textarea>
      {errors.message && (
        <span className="text-sm text-red-500 mt-1">This field is required</span>
      )}
    </div>

    {/* Submit Button */}
    <div className="flex justify-center">
      <button
        type="submit"
        className="bg-red-500 text-white px-6 py-2 rounded-lg hover:bg-red-500 transition-all duration-200 shadow-md"
      >
        Submit
      </button>
    </div>
  </form>
</div>

    </>
  );
}

export default Contact;
