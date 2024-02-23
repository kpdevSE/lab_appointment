import AdminLogin from '../../Components/AdminLogin/AdminLogin'
import Register from '../../Components/register/regsiter'
import image from '../../assets/labimage.png'
export default function Login()
{
    return (
        <div className='h-screen w-full'>
            <div className='w-[85%] mx-auto mt-10'>
                <h1 className='text-sky-500 text-2xl'>WELCOME BACK</h1>
                <p className='text-red-400 font-semibold'> Login to your Account</p>
            </div>
            <div className="w-[85%] mx-auto flex lg:flex-row flex-col justify-between lg:items-start items-center h-screen mt-24">
                <div className="lg:w-[50%] w-full">
                    <div className='flex flex-col'>
                        <p className='text-2xl text-center'>Pateint Login</p>
                        <form action="">
                            <div className='flex flex-col gap-4 items-center justify-center mt-5'>
                                <div className="flex flex-col lg:w-[70%] w-full">
                                    <label htmlFor="" className='text-lg font-semibold'>Email:-</label>
                                    <input type="email" className="input input-bordered w-full" required />
                                </div>
                                <div className="flex flex-col lg:w-[70%] w-full">
                                    <label htmlFor="" className='text-lg font-semibold'>Password:-</label>
                                    <input type="password" className="input input-bordered w-full" required />
                                </div>
                                <button className="btn btn-active lg:w-[70%] w-full btn-primary mt-4" type='submit'>Login</button>
                            </div>
                        </form>
                        <div className='mt-4 lg:w-[50%] w-full mx-auto h-10'>
                            <Register />
                        </div>
                        <hr className='lg:w-[70%] w-full mx-auto mt-5' />
                        <div className='mx-auto w-full lg:w-[70%]'>
                            <AdminLogin />
                        </div>
                    </div>
                </div>
                <div className='lg:w-[50%] w-full'>
                    <img src={image} alt="" className='h-[500px] w-full rounded-3xl shadow-xl' />
                </div>
            </div>
        </div>
    )
}