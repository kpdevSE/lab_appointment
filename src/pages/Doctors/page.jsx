
import {Pagination} from 'antd';
import DrawerNavigation from "../../Components/Drawer/page";
import ModalComponents from "../../Components/modal/modal";
import doctor from '../../assets/doctor.png';


export default function Doctors()
{
    const dummyDatas = [
        {
            id: 1,
            image: doctor,
            dName: "Doctor One",
            department: "Orthopodic",
            mobile: "0772296543",
            active: "ACTIVE"
        },
        {
            id: 2,
            image: doctor,
            dName: "Doctor Two",
            department: "Nuerolodgic",
            mobile: "0772296543",
            active: "ACTIVE"
        },
        {
            id: 3,
            image: doctor,
            dName: "Doctor Three",
            department: "Dental",
            mobile: "0772296543",
            active: "ACTIVE"
        },
        {
            id: 4,
            image: doctor,
            dName: "Doctor Four",
            department: "Ent",
            mobile: "0772296543",
            active: "ACTIVE"
        },
        {
            id: 5,
            image: doctor,
            dName: "Doctor Five",
            department: "Dental",
            mobile: "0772296543",
            active: "ACTIVE"
        },
    ]
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
            <div className="mt-5 shadow-lg rounded-lg px-2 h-[80vh]">
                <div className="flex items-start justify-start flex-col gap-1">
                    <h1 className="text-2xl font-semibold text-slate-400">Doctors List</h1>
                </div>
                <div className="flex items-center justify-between mt-10 gap-5" >
                    <p >Search Doctors......</p>
                    <ModalComponents />
                </div>
                <div className="mt-10 h-full">
                    <div class="relative overflow-x-auto">
                        <table class="w-full text-sm text-center rtl:text-right text-gray-500 dark:text-gray-400  mx-auto">
                            <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                                <tr>
                                    <th scope="col" class="px-6 py-3">
                                        DOCTOR IMAGE
                                    </th>
                                    <th scope="col" class="px-6 py-3">
                                        DOCTOR NAME
                                    </th>
                                    <th scope="col" class="px-6 py-3">
                                        DEPARTMENT
                                    </th>
                                    <th scope="col" class="px-6 py-3">
                                        MOBILE
                                    </th>
                                    <th scope="col" class="px-6 py-3">
                                        ACTIVE
                                    </th>
                                    <th scope="col" class="px-6 py-3">
                                        ACTION
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    dummyDatas.map((e) =>
                                    {
                                        return (
                                            <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                                                <td class="px-6 py-4">
                                                    <div className='flex items-center justify-center'>
                                                        <img src={e.image} alt="" className='w-[150px] h-[100px]' />
                                                    </div>
                                                </td>

                                                <td class="px-6 py-4">
                                                    {e.dName}
                                                </td>
                                                <td class="px-6 py-4">
                                                    {e.department}
                                                </td>
                                                <td class="px-6 py-4">
                                                    {e.mobile}
                                                </td>
                                                <td class="px-6 py-4 ">
                                                    <div className="bg-green-700 text-white w-16 rounded-lg flex items-center justify-center">
                                                        {e.active}
                                                    </div>
                                                </td>
                                                <td class="px-6 py-4 ">
                                                    <div className='flex items-center justify-center gap-2 hover:cursor-pointer text-sky-800 font-semibold'>
                                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                                            <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z" />
                                                            <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                                                        </svg>
                                                        More
                                                    </div>
                                                </td>
                                            </tr>
                                        )
                                    })
                                }
                            </tbody>
                        </table>
                    </div>
                    <div className='mt-10 flex justify-center items-center '>
                        <Pagination defaultCurrent={1} total={50} />
                    </div>
                </div>
            </div>
        </div>
    )
}