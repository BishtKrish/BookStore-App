import React from 'react';
import { Link } from 'react-router-dom';
import { useForm } from "react-hook-form";
import axios from "axios"
import toast from 'react-hot-toast';

function Login() {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const onSubmit = async (data) => {
        {
            const userInfo={
                email:data.email,
                password:data.password
            }
           await axios.post("http://localhost:4001/user/login",userInfo).then((res)=>{
                console.log(res.data);
                if(res.data){
                    toast.success('Login Successfully!');
                    document.getElementById("my_modal_3").close();
                    setTimeout(()=>{
                        
                        window.location.reload();
                        localStorage.setItem("Users",JSON.stringify(res.data.user));
                    },1000);
                   
                }
                localStorage.setItem("Users",JSON.stringify(res.data.user));
                
            }).catch((err)=>{
                if(err.response){
                    toast.error("Error",err.response.data.message);
                    setTimeout(()=>{},2000);
                }
            });
        }
        const modal = document.getElementById("my_modal_3");
        if (modal) modal.close(); 
    };

    return (
        <div className=''>
            <dialog id="my_modal_3" className="modal">
                <div className="modal-box dark:bg-slate-900 dark:text-white">
                    <h3 className="font-bold text-lg">Login</h3>
                    <form onSubmit={handleSubmit(onSubmit)}>
                    <button onClick={()=>document.getElementById("my_modal_3").close()} className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                        <div className="mt-4 space-y-2">
                            <label>Email</label>
                            <br />
                            
                            <input
                                type="email"
                                placeholder="Enter your email"
                                className="w-80 px-3 py-1 border rounded-md outline-none dark:bg-slate-900 dark:text-white"
                
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
                                className="text-black w-80 px-3 py-1 border rounded-md outline-none dark:bg-slate-900 dark:text-white"
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
