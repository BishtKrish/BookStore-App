import React from 'react'
import { useAuth } from '../context/AuthProvider'
import toast from 'react-hot-toast'

function Logout() {
    const [authUser,setAuthUser]=useAuth();
    const handleLogout = ()=>{
        try {
            setAuthUser({
                ...authUser,
                user:null,
            });
            localStorage.removeItem("Users")
            toast.success("Logout successfully!")
            
                    setTimeout(()=>{                      
                        window.location.reload();
                    },2000);
        } catch (error) {
            toast.error("Error :" + error.message)
            setTimeout(()=>{},2000);
        }
    }

    
  return (
    <div>
      <button className='bg-red-500 text-white px-3 py-2 rounded-md hover:bg-slate-800 duration-300 cursor-pointer' onClick={handleLogout}>Logout</button>
    </div>
  )
}

export default Logout
