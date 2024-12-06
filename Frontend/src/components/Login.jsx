import React from 'react';
import { Link } from 'react-router-dom';
import { useForm } from "react-hook-form";

function Login() {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const onSubmit = (data) => {
        console.log(data);
        const modal = document.getElementById("my_modal_3");
        if (modal) modal.close(); // Manually close the dialog
    };

    return (
        <div>
            <dialog id="my_modal_3" className="modal">
                <div className="modal-box">
                    <h3 className="font-bold text-lg">Login</h3>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className="mt-4 space-y-2">
                            <label>Email</label>
                            <br />
                            
                            <input
                                type="email"
                                placeholder="Enter your email"
                                className="w-80 px-3 py-1 border rounded-md outline-none"
                
                                {...register("email", { required: "Email is required" })}
                            />
                            <br />
                            {errors.email && (
                                <span className="text-sm text-red-500">
                                    {errors.email.message}
                                </span>
                            )}
                        </div>

                        <div className="mt-4 space-y-2">
                            <label>Password</label>
                            <br />
                            <input
                                type="password"
                                placeholder="Enter your password"
                                className="w-80 px-3 py-1 border rounded-md outline-none"
                                {...register("password", { required: "Password is required" })}
                            />
                            <br />
                            {errors.password && (
                                <span className="text-sm text-red-500">
                                    {errors.password.message}
                                </span>
                            )}
                        </div>

                        <div className="flex justify-around mt-4">
                            <button
                                type="submit"
                                className="bg-red-500 text-white rounded-md px-3 py-1 hover:bg-red-700 duration-200"
                            >
                                Login
                            </button>

                            <p>
                                Not registered?{" "}
                                <Link
                                    to="/signup"
                                    className="underline text-blue-500 cursor-pointer"
                                >
                                    Sign Up
                                </Link>
                            </p>
                        </div>
                    </form>
                </div>
            </dialog>
        </div>
    );
}

export default Login;
