import DrawerNavigation from "../../Components/Drawer/page"
import EditModal from "../../Components/EditModal/editmodal"
import ModalComponents from "../../Components/modal/modal"
import dental from '../../assets/dental.png'
import ent from '../../assets/ent.png'
import nuerology from '../../assets/nuerology.png'
import orthopedic from '../../assets/orthopedic.png'

export default function Departments()
{
    const dummyDtas = [
        {
            id: 1,
            title: "Nuerology",
            image: nuerology,
        },
        {
            id: 2,
            title: "Orthopedic",
            image: orthopedic,
        },
        {
            id: 1,
            title: "Dental",
            image: dental,
        },
        {
            id: 1,
            title: "Ent",
            image: ent,
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
            <div className="px-2 mt-5 shadow-lg rounded-xl h-full">
                <div className="flex items-start justify-start flex-col gap-1">
                    <h1 className="text-2xl font-semibold text-slate-400">Create Appointments</h1>
                    <p className="text-lg font-semibold text-slate-600">Create a Appointment to Select a Doctor </p>
                </div>
                <div className="flex items-center justify-between mt-10 gap-5" >
                    <p >Search Appointments......</p>
                    <ModalComponents />
                </div>
                <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 place-items-center gap-5 mt-10">
                    {
                        dummyDtas.map((e) =>
                        {
                            return (
                                <div key={e.id} className="lg:w-[300px] md:w-[400px] w-full h-full p-1 flex flex-col gap-2 border border-gray-200 rounded-lg">
                                    <img src={e.image} alt="" className="w-full h-[200px]" />
                                    <div className="flex flex-col items-start justify-start">
                                        <h2 className="text-xl font-semibold">{e.title}</h2>
                                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Modi voluptatibus ducimus quis nam in, culpa neque minus amet, ipsam commodi ratione perferendis odio non iure, hic id cupiditate. Exercitationem optio cupiditate unde commodi libero!</p>
                                    </div>
                                    <div className="flex items-center justify-between">
                                        <EditModal />
                                        <button className="flex items-center justify-center gap-2 bg-red-500 text-white p-1 rounded-lg shadow-lg">
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                                <path strokeLinecap="round" strokeLinejoin="round" d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" />
                                            </svg>
                                            DELETE
                                        </button>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
}