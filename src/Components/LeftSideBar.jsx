import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping, faChartPie, faFolder, faUsers, faIdBadge, faBook } from '../../node_modules/@fortawesome/free-solid-svg-icons/index';
import { faAddressCard } from '../../node_modules/@fortawesome/free-regular-svg-icons/index';
function LeftSideBar() {
    return (
        <aside className="hidden md:flex flex-wrap w-64 bg-base-200 p-4">
            <a className="flex flex-wrap" href="#">
                <img className="w-auto h-7 rounded-full outline-black outline-2 outline-offset-2 outline-solid " src="/personimg.png" alt="" />
                <p className="px-3">ByeWind</p>
            </a>
            <div className="flex flex-wrap justify-around my-3  text-gray-400">
                <a className="!font-normal ms-3" href="#">Favorites</a>
                <a className="text-gray-300 ms-3 !font-normal" href="#">Recently</a>
            </div>
            <div>
                <ul className="list-disc flex-col px-6 pb-3">
                    <li className="text-gray-300"><a href="#" className="text-black font-normal">Overview</a></li>
                    <li className="text-gray-300"><a href="#" className="text-black">Projects</a></li>
                </ul>
            </div>
            <div className="flex flex-col ">
                <nav className="-mx-3  ">
                    <div className=" ">
                        <label className="text-xs text-gray-500 uppercase dark:text-gray-400">Dashboards</label>

                        <a className="flex items-center px-3 pt-2 text-gray-600 transition-colors duration-300 transform rounded-lg dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-gray-200 hover:text-gray-700" href="#">


                            <FontAwesomeIcon className="transform rounded-lg w-5 h-5" icon={faChartPie} />
                            <span className="mx-2 text-sm font-medium">Overview</span>
                        </a>
                        <div className="flex items-center h-min px-3 text-gray-600 transition-colors transform rounded-lg dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-gray-200 hover:text-gray-700">
                            <FontAwesomeIcon className="transform rounded-lg w-5 h-5" icon={faFolder} />
                            <div tabIndex={0} className="collapse collapse-arrow">
                                <input className="collapse " type="checkbox" />
                                <span className="collapse-title text-sm font-medium">eCommerce</span>
                                <a href="#" className="collapse-content text-sm cursor-pointer">Test 1</a>
                            </div>
                        </div>
                        <div className="flex items-center h-min px-3 text-gray-600 transition-colors transform rounded-lg dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-gray-200 hover:text-gray-700">
                            <FontAwesomeIcon className="transform rounded-lg w-5 h-5" icon={faCartShopping} />
                            <div tabIndex={1} className="collapse collapse-arrow">
                                <input className="collapse" type="checkbox" />
                                <span className="collapse-title text-sm font-medium">Projects</span>
                                <a href="#" className="collapse-content text-sm cursor-pointer">Test 2</a>
                            </div>
                        </div>
                    </div>

                    <div className="space-y-1 ">
                        <label className="text-xs text-gray-500 uppercase dark:text-gray-400">Pages</label>
                        <div className="flex items-center h-min px-3 text-gray-600 transition-colors transform rounded-lg dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-gray-200 hover:text-gray-700">
                            <FontAwesomeIcon className="transform rounded-lg w-5 h-5" icon={faIdBadge} />
                            <div tabIndex={2} className="collapse collapse-arrow">
                                <input className="collapse" type="checkbox" />
                                <div className="collapse-title text-sm font-medium">User Profile</div>
                                <div className="collapse-content flex flex-col">
                                    <a href="#" className="text-sm p-2 bg-gray-200 rounded cursor-pointer">Overview</a>
                                    <a href="#" className="text-sm p-2 bg-gray-200 rounded cursor-pointer">Projects</a>
                                    <a href="#" className="text-sm p-2 bg-gray-200 rounded cursor-pointer">Campaigns</a>
                                    <a href="#" className="text-sm p-2 bg-gray-200 rounded cursor-pointer">Documents</a>
                                    <a href="#" className="text-sm p-2 bg-gray-200 rounded cursor-pointer">Followers</a>
                                </div>
                            </div>
                        </div>                            <div className="flex items-center h-min px-3 text-gray-600 transition-colors transform rounded-lg dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-gray-200 hover:text-gray-700">
                            <FontAwesomeIcon className="transform rounded-lg w-5 h-5" icon={faAddressCard} />
                            <div tabIndex={3} className="collapse collapse-arrow">
                                <input className="collapse" type="checkbox" />
                                <span className="collapse-title text-sm font-medium">Account</span>
                                <a href="#" className="collapse-content text-sm cursor-pointer">Test 3</a>
                            </div>
                        </div>                            <div className="flex items-center h-min px-3 text-gray-600 transition-colors transform rounded-lg dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-gray-200 hover:text-gray-700">
                            <FontAwesomeIcon className="transform rounded-lg w-5 h-5" icon={faUsers} />
                            <div tabIndex={4} className="collapse collapse-arrow">
                                <input className="collapse" type="checkbox" />
                                <span className="collapse-title text-sm font-medium">Corporate</span>
                                <a href="#" className="collapse-content text-sm cursor-pointer">Test 4</a>
                            </div>
                        </div>                            <div className="flex items-center h-min px-3 text-gray-600 transition-colors transform rounded-lg dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-gray-200 hover:text-gray-700">
                            <FontAwesomeIcon className="transform rounded-lg w-5 h-5" icon={faCartShopping} />
                            <div tabIndex={5} className="collapse collapse-arrow">
                                <input className="collapse" type="checkbox" />
                                <span className="collapse-title text-sm font-medium">Blog</span>
                                <a href="#" className="collapse-content text-sm cursor-pointer">Test 5</a>
                            </div>
                        </div>                            <div className="flex items-center h-min px-3 text-gray-600 transition-colors transform rounded-lg dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-gray-200 hover:text-gray-700">
                            <FontAwesomeIcon className="transform rounded-lg w-5 h-5" icon={faBook} />
                            <div tabIndex={6} className="collapse collapse-arrow">
                                <input className="collapse" type="checkbox" />
                                <span className="collapse-title text-sm font-medium">Social</span>
                                <a href="#" className="collapse-content text-sm cursor-pointer">Test 6</a>
                            </div>
                        </div>
                    </div>
                </nav>
            </div>
        </aside>
    );
}

export default LeftSideBar;