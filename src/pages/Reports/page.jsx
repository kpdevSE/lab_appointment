import {Pagination} from 'antd';
import PatientDrawer from '../../Components/PatientDrawrr/patient.navigation';

export default function Reports()
{
    const labData = [
        {
            id: 1,
            date: "11/01/09",
            type: "Wet Mount",
            result: "Normal",
            doctor: "Dr. KPdev"
        },
        {
            id: 2,
            date: "11/01/09",
            type: "Vaginal PH",
            result: "Normal"
            ,
            doctor: "Dr. KPdev"
        },
        {
            id: 3,
            date: "11/01/09",
            type: "Chlamydiha (Urine)",
            result: "Normal"
            ,
            doctor: "Dr. KPdev"
        },
        {
            id: 4,
            date: "11/01/09",
            type: "HIV (Blood Test)",
            result: "Normal"
            ,
            doctor: "Dr. KPdev"
        },
        {
            id: 5,
            date: "11/01/09",
            type: "Wet Mount",
            result: "Normal"
            ,
            doctor: "Dr. KPdev"
        },
        {
            id: 6,
            date: "11/01/09",
            type: "Wet Mount",
            result: "Normal"
            ,
            doctor: "Dr. KPdev"
        },
        {
            id: 7,
            date: "11/01/09",
            type: "Wet Mount",
            result: "Normal"
            ,
            doctor: "Dr. KPdev"
        },
        {
            id: 8,
            date: "11/01/09",
            type: "Wet Mount",
            result: "Normal"
            ,
            doctor: "Dr. KPdev"
        },
        {
            id: 9,
            date: "11/01/09",
            type: "Wet Mount",
            result: "Normal"
            ,
            doctor: "Dr. KPdev"
        },
        {
            id: 10,
            date: "11/01/09",
            type: "Wet Mount",
            result: "Normal"
            ,
            doctor: "Dr. KPdev"
        },

    ];
    return (
        <div className="px-2">
            <div className="shadow-lg bg-white flex items-center justify-between h-[60px] w-full rounded-lg px-5 mt-5">
                <div>
                    <h1 className="text-sky-500 text-lg font-semibold">Admin Dashboard</h1>
                </div>
                <div>
                    <PatientDrawer />
                </div>
            </div>
            <div className='mt-10 px-2'>
                <h1 className='text-3xl font-semibold'>Lab Results</h1>
                <div className="relative overflow-x-auto mt-10">
                    <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                            <tr>
                                <th scope="col" className="px-6 py-3">
                                    Order Date
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    NAME
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    RESULT
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    PHYSICIAN
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    ACTION
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                labData.map((e) =>
                                {
                                    return (
                                        <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                                            <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                                {e.date}
                                            </th>
                                            <td class="px-6 py-4">
                                                {e.type}
                                            </td>
                                            <td class="px-6 py-4 flex  gap-1 items-center">
                                                <div className='w-[9px] h-[9px] rounded-lg bg-green-600'>

                                                </div>
                                                {e.result}
                                            </td>
                                            <td class="px-6 py-4">
                                                {e.doctor}
                                            </td>
                                            <td class="px-6 py-4 flex items-center justify-start gap-1 text-green-600 hover:cursor-pointer">
                                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z" />
                                                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                                                </svg>
                                                {e.titleSeven}
                                            </td>
                                        </tr>
                                    )
                                })
                            }
                        </tbody>
                    </table>
                    <div className='mt-10 flex justify-center items-center '>
                        <Pagination defaultCurrent={1} total={50} />
                    </div>
                </div>
            </div>
        </div>
    )
}