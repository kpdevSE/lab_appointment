import {Pagination} from 'antd';
import PatientDrawer from "../../Components/PatientDrawrr/patient.navigation";
import ViewAppointments from '../../Components/ViewAppointments/ViewAppointments';
import ModalComponents from '../../Components/modal/modal';

export default function MyAppointments()
{
    const dummyDatas = [
        {
            id: 1,
            no: "0001",
            date: "2024.01.02",
            time: "10.00AM",
            status: "booked",
        },
        {
            id: 2,
            no: "0002",
            date: "2024.01.03",
            time: "10.00AM",
            status: "booked",
        },
        {
            id: 3,
            no: "0003",
            date: "2024.01.04",
            time: "10.00AM",
            status: "booked",
        },
        {
            id: 4,
            no: "0004",
            date: "2024.01.05",
            time: "10.00AM",
            status: "booked",
        },

    ]
    return (
        <div className="px-2">
            <div className="shadow-lg bg-white flex items-center justify-between h-[60px] w-full rounded-lg px-5 mt-5">
                <div>
                    <h1 className="text-sky-500 text-lg font-semibold">Patient Dashboard</h1>
                </div>
                <div>
                    <PatientDrawer />
                </div>
            </div>
            <div className="mt-10 px-2">
                <div className="flex flex-col gap-1">
                    <h1 className="text-2xl font-semibold text-slate-400">Appointments</h1>
                    <p className="text-lg font-semibold text-slate-600">Select your appointments date and appointment type </p>
                </div>
                <div className="flex items-center justify-between mt-10 gap-5" >
                    <p >Search Appointments......</p>
                    <ModalComponents />
                </div>
                <div className="relative overflow-x-auto mt-10">
                    <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                            <tr>
                                <th scope="col" className="px-6 py-3">
                                    APT.NO
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    APT.DATE
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    TIME
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    STATUS
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    ACTION
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                dummyDatas.map((e) =>
                                {
                                    return (
                                        <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                                            <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                                {e.no}
                                            </th>
                                            <td className="px-6 py-4">
                                                {e.date}
                                            </td>
                                            <td className="px-6 py-4">
                                                {e.time}
                                            </td>
                                            <td className="px-6 py-4">
                                                <div className='w-[100px] h-[30px] bg-black text-white flex items-center justify-center rounded-lg'>
                                                    {e.status}
                                                </div>
                                            </td>
                                            <td className="px-6 py-4 flex items-center justify-start gap-1 text-green-600">
                                                <ViewAppointments />
                                                View
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