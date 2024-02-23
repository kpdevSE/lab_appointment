import {PlusOutlined} from '@ant-design/icons';
import {Drawer} from 'antd';
import React, {useState} from 'react';

const EditDoctors = () =>
{
    const [open, setOpen] = useState(false);
    const showDrawer = () =>
    {
        setOpen(true);
    };
    const onClose = () =>
    {
        setOpen(false);
    };
    return (
        <>
            <div className='flex items-center justify-center gap-2 hover:cursor-pointer text-orange-800 font-semibold' onClick={showDrawer} icon={<PlusOutlined />}>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10" />
                </svg>
                Edit
            </div>
            <Drawer
                title="Update the Doctor"
                width={1000}
                onClose={onClose}
                open={open}
                styles={{
                    body: {
                        paddingBottom: 80,
                    },
                }}
            >
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
            </Drawer>
        </>
    );
};
export default EditDoctors;