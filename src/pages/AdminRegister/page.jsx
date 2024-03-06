import axios from "axios";
import {useState} from "react";
import {useNavigate} from "react-router-dom";
import {toast} from "react-toastify";

export default function AdminLogin()
{
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const navigate = useNavigate();

    const handleSubmit = (event) =>
    {
        event.preventDefault();

        axios.post('http://localhost:3000/admin/login', {email, password})
            .then(result =>
            {
                console.log(result);
                if (result.data === "Success")
                {
                    console.log("Login Success");
                    toast.success('Login successful!')
                    navigate('/Home');
                }
                else
                {
                    toast.error('Incorrect password! Please try again.');
                }
            })
            .catch(err => console.log(err));
    }
    return (
        <div className="w-[85%] mx-auto">
            <div className="mt-10 text-center">

                <h1 className="text-2xl font-semibold text-slate-400"> Admin Login Page</h1>
            </div>
            <div className="flex items-center justify-center w-full h-[50vh]">
                <form action="" onSubmit={handleSubmit} className="w-full">
                    <div className='flex flex-col gap-4 items-center justify-center mt-5'>
                        <div className="flex flex-col w-full">
                            <label htmlFor="" className='text-lg font-semibold'>Email:-</label>
                            <input type="email" className="input input-bordered w-full" required value={email} onChange={(e) =>
                            {
                                setEmail(e.target.value)
                            }} />
                        </div>
                        <div className="flex flex-col w-full">
                            <label htmlFor="" className='text-lg font-semibold'>Password:-</label>
                            <input type="password" className="input input-bordered w-full" required value={password} onChange={(e) =>
                            {
                                setPassword(e.target.value)
                            }} />
                        </div>
                        <button className="btn btn-active lg:w-[50%] w-full mx-auto btn-primary mt-4" type='submit'>Login</button>
                    </div>
                </form>
            </div>
        </div>
    )
}