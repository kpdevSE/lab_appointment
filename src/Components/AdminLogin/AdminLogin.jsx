import {DatePicker, Drawer, Space} from 'antd';
import {React, useState} from 'react';
const onChange = (date, dateString) =>
{
    console.log(date, dateString);
};
const AdminLogin = () =>
{
    const [open, setOpen] = useState(false);
    const [childrenDrawer, setChildrenDrawer] = useState(false);
    const showDrawer = () =>
    {
        setOpen(true);
    };
    const onClose = () =>
    {
        setOpen(false);
    };
    const showChildrenDrawer = () =>
    {
        setChildrenDrawer(true);
    };
    const onChildrenDrawerClose = () =>
    {
        setChildrenDrawer(false);
    };
    return (
        <>
            <div className='bg-teal-400 text-white h-[35px] rounded-lg flex items-center justify-center w-full' onClick={showDrawer}>
                Admin Login
            </div>
            <Drawer title="Admin Login" width={520} closable={false} onClose={onClose} open={open}>
                <div className='w-full'>
                    <form action="">
                        <div className='flex flex-col gap-4 items-center justify-center mt-5'>
                            <div className="flex flex-col w-full">
                                <label htmlFor="" className='text-lg font-semibold'>Email:-</label>
                                <input type="email" className="input input-bordered w-full" required />
                            </div>
                            <div className="flex flex-col w-full">
                                <label htmlFor="" className='text-lg font-semibold'>Password:-</label>
                                <input type="password" className="input input-bordered w-full" required />
                            </div>
                            <button className="btn btn-active w-full btn-primary mt-4" type='submit'>Login</button>
                        </div>
                    </form>
                    <div className='bg-yellow-500 mt-4 h-[40px] rounded-xl flex items-center justify-center text-white' onClick={showChildrenDrawer} >
                        Register Here
                    </div>
                </div>

                <Drawer
                    title="Admin Register"
                    width={320}
                    closable={false}
                    onClose={onChildrenDrawerClose}
                    open={childrenDrawer}
                >
                    <div>
                        <form className="max-w-sm mx-auto">
                            <div className="mb-5">
                                <label forHtml="name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your Name</label>
                                <input type="name" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="ADMIN" required />
                            </div>
                            <div className="mb-5">
                                <label forHtml="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
                                <input type="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="admin@gmail.com" required />
                            </div>
                            <div className="mb-5">
                                <label forHtml="age" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your Age</label>
                                <input type="age" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
                            </div>
                            <div className="mb-5">
                                <label forHtml="date" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Birthday</label>
                                <Space direction="vertical" size={12}>
                                    <DatePicker onChange={onChange} needConfirm />
                                </Space>
                            </div>
                            <div className='mb-5'>
                                <label forHtml="select" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Gender</label>
                                <select className="select select-bordered w-full ">
                                    <option disabled selected>Choose?</option>
                                    <option>Male</option>
                                    <option>Female</option>
                                    <option>Others</option>
                                </select>
                            </div>
                            <div className="mb-5">
                                <label forHtml="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your password</label>
                                <input type="password" id="password" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
                            </div>
                            <div className="flex items-start mb-5">
                                <div className="flex items-center h-5">
                                    <input id="remember" type="checkbox" value="" className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800" required />
                                </div>
                                <label for="remember" className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Remember me</label>
                            </div>
                            <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button>
                        </form>

                    </div>
                </Drawer>
            </Drawer>
        </>
    );
};
export default AdminLogin;