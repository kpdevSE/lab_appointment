import {Drawer} from 'antd';
import React, {useState} from 'react';
import {Link} from 'react-router-dom';

const DrawerNavigation = () =>
{
    const [showSubMenu1, setShowSubMenu1] = useState(false);

    const [showSubMenu3, setShowSubMenu3] = useState(false);
    const [showSubMenu4, setShowSubMenu4] = useState(false);
    const [showSubMenu5, setShowSubMenu5] = useState(false);
    const toggleSubMenu = (submenu) =>
    {
        switch (submenu)
        {
            case 1:
                setShowSubMenu1(!showSubMenu1);
                break;

            case 3:
                setShowSubMenu3(!showSubMenu3);
                break;
            case 4:
                setShowSubMenu4(!showSubMenu4);
                break;
            case 5:
                setShowSubMenu5(!showSubMenu5);
                break;
            default:
                break;
        }
    };
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
            <div type="primary" onClick={showDrawer}>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 5.25h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5" />
                </svg>

            </div>
            <Drawer onClose={onClose} open={open}>
                <div className=" text-black w-full min-h-screen">
                    <div >
                        <h1 className="text-2xl font-bold">
                            L<span className="text-blue-600">A</span>B
                        </h1>
                    </div>

                    <ul className="mt-6">
                        <li>
                            <Link
                                to="/Home"
                                className="flex items-center px-6 py-3 text-black hover:bg-gray-800 hover:text-white">
                                <span className="text-lg mr-3">
                                    <i className="fas fa-tachometer-alt"></i>
                                </span>
                                Dashboard
                            </Link>
                        </li>
                        <li>
                            <button
                                onClick={() => toggleSubMenu(1)}
                                className="flex items-center w-full px-6 py-3 text-black hover:bg-gray-800 hover:text-white focus:outline-none">
                                <span className="text-lg mr-3">
                                    <i className="fas fa-users"></i>
                                </span>
                                Appointments
                                <span className="ml-auto">
                                    {showSubMenu1 ? (
                                        <i className="fas fa-chevron-up"></i>
                                    ) : (
                                        <i className="fas fa-chevron-down"></i>
                                    )}
                                </span>
                            </button>
                            {showSubMenu1 && (
                                <ul className="pl-9">
                                    <li>
                                        <Link
                                            to="/dashboard/lead/add-new-lead"
                                            className="block px-6 py-3 text-black hover:bg-gray-800 hover:text-white">
                                            Creat a Appointment
                                        </Link>
                                    </li>
                                    <li>
                                        <Link
                                            to="/Appointments"
                                            className="block px-6 py-3 text-black hover:bg-gray-800 hover:text-white">
                                            View Appointments
                                        </Link>
                                    </li>
                                </ul>
                            )}
                        </li>
                        {/* Add more menu items with submenus below */}

                        {/* Menu 3 */}
                        <li>
                            <button
                                onClick={() => toggleSubMenu(3)}
                                className="flex items-center w-full px-6 py-3 text-black hover:bg-gray-800 hover:text-white focus:outline-none">
                                <span className="text-lg mr-3">
                                    <i className="fas fa-truck"></i>
                                </span>
                                Doctors
                                <span className="ml-auto">
                                    {showSubMenu3 ? (
                                        <i className="fas fa-chevron-up"></i>
                                    ) : (
                                        <i className="fas fa-chevron-down"></i>
                                    )}
                                </span>
                            </button>
                            {showSubMenu3 && (
                                <ul className="pl-9">
                                    <li>
                                        <Link
                                            to="/dashboard/drivers/driver-list"
                                            className="block px-6 py-3 text-black hover:bg-gray-800 hover:text-white">
                                            Add Doctors
                                        </Link>
                                    </li>
                                    <li>
                                        <Link
                                            to="/dashboard/drivers/driver-payment"
                                            className="block px-6 py-3 text-black hover:bg-gray-800 hover:text-white">
                                            View Doctors
                                        </Link>
                                    </li>
                                </ul>
                            )}
                        </li>
                        <li>
                            <button
                                onClick={() => toggleSubMenu(5)}
                                className="flex items-center w-full px-6 py-3 text-black hover:bg-gray-800 hover:text-white focus:outline-none">
                                <span className="text-lg mr-3">
                                    <i className="fas fa-truck"></i>
                                </span>
                                Patients
                                <span className="ml-auto">
                                    {showSubMenu5 ? (
                                        <i className="fas fa-chevron-up"></i>
                                    ) : (
                                        <i className="fas fa-chevron-down"></i>
                                    )}
                                </span>
                            </button>
                            {showSubMenu5 && (
                                <ul className="pl-9">
                                    <li>
                                        <Link
                                            to="#"
                                            className="block px-6 py-3 text-black hover:bg-gray-800 hover:text-white">
                                            Add Patients
                                        </Link>
                                    </li>
                                    <li>
                                        <Link
                                            to="#"
                                            className="block px-6 py-3 text-black hover:bg-gray-800 hover:text-white">
                                            View Patients
                                        </Link>
                                    </li>
                                </ul>
                            )}
                        </li>


                        {/* Menu 4*/}
                        <li>
                            <Link
                                to="/dashboard/reports"
                                className="flex items-center px-6 py-3 text-black hover:bg-gray-800 hover:text-white">
                                <span className="text-lg mr-3">
                                    <i className="fas fa-tachometer-alt"></i>
                                </span>
                                Reports
                            </Link>
                        </li>
                        {/* Menu 5*/}
                        <li>
                            <Link
                                to="/dashboard/helpcenter"
                                className="flex items-center px-6 py-3 text-black hover:bg-gray-800 hover:text-white">
                                <span className="text-lg mr-3">
                                    <i className="fas fa-tachometer-alt"></i>
                                </span>
                                Help & Support
                            </Link>
                        </li>
                        {/* Menu 6*/}

                        <li>
                            <Link
                                to="#"
                                className="flex items-center px-6 py-3 text-black hover:bg-gray-800 hover:text-white">
                                <span className="text-lg mr-3">
                                    <i className="fas fa-tachometer-alt"></i>
                                </span>
                                Log Out
                            </Link>
                        </li>
                    </ul>

                </div>
            </Drawer>
        </>
    );
};

export default DrawerNavigation;