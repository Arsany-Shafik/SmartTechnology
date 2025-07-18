import { useState } from "react";
import { faClockRotateLeft, faExpand } from "../../node_modules/@fortawesome/free-solid-svg-icons/index";
import { faStar } from "../../node_modules/@fortawesome/free-regular-svg-icons/index";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function NavBar() {
    const [theme, setTheme] = useState("light");

    const toggleTheme = () => {
        const newTheme = theme === "light" ? "dark" : "light";
        setTheme(newTheme);
        document.documentElement.setAttribute("data-theme", newTheme);
    };
    return (
        <div className="flex-wrap flex">
            <div className="navbar bg-base-100 shadow-sm flex-wrap lg:flex-nowrap gap-y-2">
                {/* Start */}
                <div className="navbar-start flex flex-wrap items-center gap-2">
                    <a href="#" className="btn btn-ghost btn-circle">
                        <FontAwesomeIcon className="transform rounded-lg w-5 h-5" icon={faExpand} />
                    </a>
                    <a href="#" className="btn btn-ghost btn-circle">
                        <FontAwesomeIcon className="transform rounded-lg w-5 h-5" icon={faStar} />
                    </a>
                    <div className="flex flex-wrap items-center text-gray-400 text-sm">
                        <a defaultChecked className="mx-3 !font-normal" href="#">Dashboards</a>
                        <a className="ms-1 text-black !font-normal" href="#">Default</a>
                    </div>
                </div>

                {/* End */}
                <div className="navbar-end flex flex-wrap items-center gap-2">
                    <input
                        type="text"
                        placeholder="Search"
                        className="input input-bordered border-gray-100 w-full sm:w-32 md:w-auto rounded-xl bg-gray-100"
                    />

                    <label className="swap swap-rotate">
                        <input type="checkbox" className="theme-controller" onClick={toggleTheme} />

                        {/* Sun Icon */}
                        <svg className="mx-2 swap-off w-8 h-8 fill-current transform rounded-lg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                            <path
                                d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" />                        </svg>

                        {/* Moon Icon */}
                        <svg className="swap-on w-8 h-8 fill-current transform rounded-lg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                            <path
                                d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" />                        </svg>
                    </label>

                    <a href="#" className="btn btn-ghost btn-circle">
                        <FontAwesomeIcon className="transform rounded-lg w-5 h-5" icon={faClockRotateLeft} />
                    </a>

                    <a href="#" className="btn btn-ghost btn-circle">
                        <div className="indicator">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />                            </svg>
                            <span className="badge badge-xs badge-primary indicator-item"></span>
                        </div>
                    </a>

                    <a href="#" className="btn btn-ghost btn-circle">
                        <FontAwesomeIcon className="transform rounded-lg w-5 h-5" icon={faExpand} />
                    </a>
                </div>
            </div>
        </div>

    );
}

export default NavBar;