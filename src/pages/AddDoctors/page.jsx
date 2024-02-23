import DrawerNavigation from "../../Components/Drawer/page"
import ModalComponents from '../../Components/modal/modal'


export default function AddDoctors()
{
    return (
        <div className="px-2">
            <div className="shadow-lg bg-white flex items-center justify-between h-[60px] w-full rounded-lg px-5 mt-5">
                <div>
                    <h1 className="text-sky-500 text-lg font-semibold">Admin Dashboard</h1>
                </div>
                <div>
                    <DrawerNavigation />
                </div>
            </div>
            <div className="px-2 mt-5 h-full ">
                <div className="flex flex-col gap-1">
                    <h1 className="text-2xl font-semibold text-slate-400">Add Doctors</h1>
                    <p className="text-lg font-semibold text-slate-600">Add doctors usiing theri departments.. </p>
                </div>
                <div className="flex items-center justify-between mt-10 gap-5" >
                    <p >Search Appointments......</p>
                    <ModalComponents />
                </div>
                <div className="w-full mx-auto lg:w-[85%] mt-10">
                    <form action="" className='w-full'>
                        <div className='felx flex-col w-full'>
                            <div className='flex lg:flex-row flex-col gap-4 items-center justify-center'>
                                <div className="flex flex-col lg:w-[50%] w-full">
                                    <label htmlFor="" className='text-lg font-semibold'>Department Image:-</label>
                                    <input type="file" className="file-input file-input-bordered w-full" />
                                </div>
                                <div className="flex flex-col lg:w-[50%] w-full">
                                    <label htmlFor="" className='text-lg font-semibold'>Select Department:-</label>
                                    <select className="select select-bordered w-full">
                                        <option disabled selected>Choose?</option>
                                        <option>Nuerolodgy</option>
                                        <option>Orthopedic</option>
                                        <option>Dental</option>
                                        <option>ENT</option>
                                    </select>
                                </div>
                            </div>
                            <div className='flex lg:flex-row flex-col gap-4 items-center justify-center mt-5'>
                                <div className="flex flex-col lg:w-[50%] w-full">
                                    <label htmlFor="" className='text-lg font-semibold'>Name:-</label>
                                    <input type="text" className="input input-bordered w-full" required />
                                </div>
                                <div className="flex flex-col lg:w-[50%] w-full">
                                    <label htmlFor="" className='text-lg font-semibold'>Phone Number:-</label>
                                    <input type="text" className="input input-bordered w-full" required />
                                </div>
                            </div>
                            <div className='flex lg:flex-row flex-col gap-4 items-center justify-center mt-5'>
                                <div className="flex flex-col lg:w-[50%] w-full">
                                    <label htmlFor="" className='text-lg font-semibold'>Email:-</label>
                                    <input type="email" className="input input-bordered w-full" required />
                                </div>
                                <div className="flex flex-col lg:w-[50%] w-full">
                                    <label htmlFor="" className='text-lg font-semibold'>Password:-</label>
                                    <input type="password" className="input input-bordered w-full" required />
                                </div>
                            </div>
                            <div className='flex lg:flex-row flex-col gap-4 items-center justify-center mt-5'>
                                <div className="flex flex-col lg:w-[50%] w-full">
                                    <label htmlFor="" className='text-lg font-semibold'>Select Gender:-</label>
                                    <select className="select select-bordered w-full ">
                                        <option disabled selected>Choose?</option>
                                        <option>Male</option>
                                        <option>Female</option>
                                        <option>Others</option>
                                    </select>
                                </div>
                                <div className="flex flex-col lg:w-[50%] w-full">
                                    <label htmlFor="" className='text-lg font-semibold'>Designation:-</label>
                                    <input type="text" className="input input-bordered w-full" required />
                                </div>
                            </div>
                            <hr className="mt-5" />
                            <p className="mt-4 text-slate-400 font-semibold text-lg">Education Section</p>
                            <div className='flex lg:flex-row flex-col gap-4 items-center justify-center mt-5'>
                                <div className="flex flex-col lg:w-[50%] w-full">
                                    <label htmlFor="" className='text-lg font-semibold'>Qualifications:-</label>
                                    <input type="text" className="input input-bordered w-full" required />
                                </div>
                                <div className="flex flex-col lg:w-[50%] w-full">
                                    <label htmlFor="" className='text-lg font-semibold'>Experiance:-</label>
                                    <input type="text" className="input input-bordered w-full" required />
                                </div>
                            </div>
                            <div className='flex lg:flex-row flex-col gap-4 items-center justify-center mt-5'>
                                <div className="flex flex-col lg:w-[50%] w-full">
                                    <label htmlFor="" className='text-lg font-semibold'>Specialization:- (MAX 1000 Characters)</label>
                                    <textarea className="textarea textarea-bordered" placeholder="Bio" required></textarea>
                                </div>
                                <div className="flex flex-col lg:w-[50%] w-full">
                                    <label htmlFor="" className='text-lg font-semibold'>Bio:- (MAX 1000 Characters)</label>
                                    <textarea className="textarea textarea-bordered" placeholder="Bio" required></textarea>
                                </div>
                            </div>

                        </div>
                        <div className="form-control mt-4">
                            <label className="label cursor-pointer">
                                <span className="label-text">Is Active</span>
                                <input type="checkbox" className="toggle" checked />
                            </label>
                        </div>
                        <button className="btn btn-active btn-primary mt-4" type='submit'>Submit</button>
                    </form>
                </div>
            </div>
        </div>
    )
}