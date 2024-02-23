import {Modal} from 'antd';
import React, {useState} from 'react';
const EditModal = () =>
{
    const [open, setOpen] = useState(false);
    return (
        <>
            <button className="flex items-center justify-center gap-2 bg-green-500 text-white p-1 rounded-lg shadow-lg" onClick={() => setOpen(true)}>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10" />
                </svg>
                EDIT
            </button>
            <Modal
                centered
                open={open}
                onOk={() => setOpen(false)}
                onCancel={() => setOpen(false)}
                width={1000}
            >
                <div className='w-full'>
                    <form action="" className='w-full'>
                        <div className='felx flex-col w-full'>
                            <div className='flex flex-col gap-1'>
                                <label htmlFor="" className='text-lg font-semibold'>Department Image:-</label>
                                <input type="file" className="file-input file-input-bordered w-full max-w-xs" />
                            </div>
                            <div className='flex flex-col gap-1 mt-4' >
                                <label htmlFor="" className='text-lg font-semibold'>Department Name:-</label>
                                <input type="text" placeholder="Type here" className="input input-bordered w-full" />
                            </div>
                            <div className='flex flex-col gap-1 mt-4'>
                                <label htmlFor="" className='text-lg font-semibold'>Department Description:-</label>
                                <textarea className="textarea textarea-bordered h-40" placeholder="Bio"></textarea>
                            </div>
                        </div>
                        <button className="btn btn-active btn-primary mt-4" type='submit'>Submit</button>
                    </form>
                </div>
            </Modal>
        </>
    );
};
export default EditModal;