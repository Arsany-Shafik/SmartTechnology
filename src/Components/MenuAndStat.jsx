import { faEllipsis } from "../../node_modules/@fortawesome/free-solid-svg-icons/index";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function MenuAndStat() {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    const currentDate = new Date().toLocaleDateString('en-US', options);
    return (
        <>
            <div className=" flex px-5 bg-base-200 ">
                <div name="tabs" className="tabs tabs-border w-screen ">
                    <input type="radio" name="my_tabs_2" className="tab font-medium" aria-label="Overview" defaultChecked />
                    <div className="flex items-center justify-between p-4 tab-content text-lg font-bold">
                        <div className="inline-block align-middle text-xl font-bold">Snow UI</div>
                        <img className="float-right h-10" src="SnowUI Logo.png" alt="Logo" />
                    </div>

                    <input type="radio" name="my_tabs_2" className="tab font-medium" aria-label="Targets" />
                    <div className="tab-content border-base-300 bg-base-100 p-10 text-lg font-bold">Targets</div>

                    <input type="radio" name="my_tabs_2" className="tab font-medium" aria-label="Budget" />
                    <div className="tab-content border-base-300 bg-base-100 p-10 text-lg font-bold">Budget</div>
                    <input type="radio" name="my_tabs_2" className="tab font-medium" aria-label="Users" />
                    <div className="tab-content border-base-300 bg-base-100 p-10 text-lg font-bold">Users</div>
                    <input type="radio" name="my_tabs_2" className="tab font-medium" aria-label="Files" />
                    <div className="tab-content border-base-300 bg-base-100 p-10 text-lg font-bold">Files</div>
                    <input type="radio" name="my_tabs_2" className="tab font-medium" aria-label="Activity" />
                    <div className="tab-content border-base-300 bg-base-100 p-10 text-lg font-bold">Activity</div>
                    <input type="radio" name="my_tabs_2" className="tab font-medium" aria-label="Settings" />
                    <div className="tab-content border-base-300 bg-base-100 p-10 text-lg font-bold">Settings</div>
                    <input type="text" placeholder="+ Add User" className="input input-bordered rounded-full border-gray-100 bg-gray-100 mr-3 md:w-30 ml-auto" />
                    <input type="text" placeholder="Add Target" className="input input-bordered rounded-full border-gray-100 bg-gray-100 md:w-30" />
                    <a className="btn btn-ghost btn-circle border-gray-100 bg-gray-100 ml-3" href="#">
                        <FontAwesomeIcon className="transform rounded-lg w-5 h-5" icon={faEllipsis} />
                    </a>
                </div>
            </div>
            <div>
                <div className="stats stats-vertical flex lg:stats-horizontal bg-base-100  w-auto">
                    <div className="stat">
                        <div className="stat-title text-base">Status</div>
                        <div className="relative w-64 h-8 bg-gray-300 rounded-full ">
                            <div className="absolute top-0 left-0 h-full bg-violet-500" style={{ width: '51%' }}></div>
                            <div className="absolute w-full text-center  text-xl font-bold">In Progress / 51%</div>
                        </div>
                    </div>
                    <div className="stat">
                        <div className="stat-title text-base">Total Tasks</div>
                        <div className="stat-value text-xl font-bold">15 / 48</div>
                    </div>

                    <div className="stat">
                        <div className="stat-title text-base">Due Date</div>
                        <div className="stat-value text-xl font-bold">{currentDate}</div>
                    </div>
                    <div className="stat">
                        <div className="stat-title text-base">Budget Spent</div>
                        <div className="stat-value text-xl font-bold">$ 15,000</div>
                    </div>
                    <div className="flex items-center">
                        <div className="avatar-group mx-auto h-13 -space-x-6">
                            <div className="avatar">
                                <div className="w-12">
                                    <img src="https://img.daisyui.com/images/profile/demo/batperson@192.webp" />
                                </div>
                            </div>
                            <div className="avatar">
                                <div className="w-12">
                                    <img src="https://img.daisyui.com/images/profile/demo/spiderperson@192.webp" />
                                </div>
                            </div>
                            <div className="avatar">
                                <div className="w-12">
                                    <img src="https://img.daisyui.com/images/profile/demo/averagebulk@192.webp" />
                                </div>
                            </div>
                            <div className="avatar avatar-placeholder">
                                <div className="bg-neutral text-neutral-content w-12">
                                    <span>+3</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default MenuAndStat;