import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping, faChartPie, faFolder, faUsers, faIdBadge, faBook } from '../../node_modules/@fortawesome/free-solid-svg-icons/index';
import { faAddressCard } from '../../node_modules/@fortawesome/free-regular-svg-icons/index';
function LeftSideBar() {
    return (
        <aside class="w-64 bg-base-200 p-4">
            <a class="flex" href="#">
                <img class="w-auto h-7 rounded-full outline-black outline-2 outline-offset-2 outline-solid " src="/personimg.png" alt="" />
                <p class="px-3">ByeWind</p>
            </a>
            <div class="flex justify-around my-3  text-gray-400">
                <a class="!font-normal" href="#">Favorites</a>
                <a class="text-gray-300 !font-normal" href="#">Recently</a>
            </div>
            <div>
                <ul class="list-disc flex-col px-6 pb-3">
                    <li class="text-gray-300"><a href="#" class="text-black font-normal">Overview</a></li>
                    <li class="text-gray-300"><a href="#" class="text-black">Projects</a></li>
                </ul>
            </div>
            <div class="flex flex-col ">
                <nav class="-mx-3  ">
                    <div class=" ">
                        <label class="text-xs text-gray-500 uppercase dark:text-gray-400">Dashboards</label>

                        <a class="flex items-center px-3 pt-2 text-gray-600 transition-colors duration-300 transform rounded-lg dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-gray-200 hover:text-gray-700" href="#">


                            <FontAwesomeIcon class="transform rounded-lg w-5 h-5" icon={faChartPie} />
                            <span class="mx-2 text-sm font-medium">Overview</span>
                        </a>
                        <div class="flex items-center h-min px-3 text-gray-600 transition-colors transform rounded-lg dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-gray-200 hover:text-gray-700">
                            <FontAwesomeIcon class="transform rounded-lg w-5 h-5" icon={faFolder} />
                            <div tabIndex={0} class="collapse collapse-arrow">
                                <input class="collapse " type="checkbox" />
                                <span class="collapse-title text-sm font-medium">eCommerce</span>
                                <a href="#" class="collapse-content text-sm cursor-pointer">Test 1</a>
                            </div>
                        </div>
                        <div class="flex items-center h-min px-3 text-gray-600 transition-colors transform rounded-lg dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-gray-200 hover:text-gray-700">
                            <FontAwesomeIcon class="transform rounded-lg w-5 h-5" icon={faCartShopping} />
                            <div tabIndex={1} class="collapse collapse-arrow">
                                <input class="collapse" type="checkbox" />
                                <span class="collapse-title text-sm font-medium">Projects</span>
                                <a href="#" class="collapse-content text-sm cursor-pointer">Test 2</a>
                            </div>
                        </div>
                    </div>

                    <div class="space-y-1 ">
                        <label class="text-xs text-gray-500 uppercase dark:text-gray-400">Pages</label>
                        <div class="flex items-center h-min px-3 text-gray-600 transition-colors transform rounded-lg dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-gray-200 hover:text-gray-700">
                            <FontAwesomeIcon class="transform rounded-lg w-5 h-5" icon={faIdBadge} />
                            <div tabIndex={2} class="collapse collapse-arrow">
                                <input class="collapse" type="checkbox" />
                                <div class="collapse-title text-sm font-medium">User Profile</div>
                                <div class="collapse-content flex flex-col">
                                    <a href="#" class="text-sm p-2 bg-gray-200 rounded cursor-pointer">Overview</a>
                                    <a href="#" class="text-sm p-2 bg-gray-200 rounded cursor-pointer">Projects</a>
                                    <a href="#" class="text-sm p-2 bg-gray-200 rounded cursor-pointer">Campaigns</a>
                                    <a href="#" class="text-sm p-2 bg-gray-200 rounded cursor-pointer">Documents</a>
                                    <a href="#" class="text-sm p-2 bg-gray-200 rounded cursor-pointer">Followers</a>
                                </div>
                            </div>
                        </div>                            <div class="flex items-center h-min px-3 text-gray-600 transition-colors transform rounded-lg dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-gray-200 hover:text-gray-700">
                            <FontAwesomeIcon class="transform rounded-lg w-5 h-5" icon={faAddressCard} />
                            <div tabIndex={3} class="collapse collapse-arrow">
                                <input class="collapse" type="checkbox" />
                                <span class="collapse-title text-sm font-medium">Account</span>
                                <a href="#" class="collapse-content text-sm cursor-pointer">Test 3</a>
                            </div>
                        </div>                            <div class="flex items-center h-min px-3 text-gray-600 transition-colors transform rounded-lg dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-gray-200 hover:text-gray-700">
                            <FontAwesomeIcon class="transform rounded-lg w-5 h-5" icon={faUsers} />
                            <div tabIndex={4} class="collapse collapse-arrow">
                                <input class="collapse" type="checkbox" />
                                <span class="collapse-title text-sm font-medium">Corporate</span>
                                <a href="#" class="collapse-content text-sm cursor-pointer">Test 4</a>
                            </div>
                        </div>                            <div class="flex items-center h-min px-3 text-gray-600 transition-colors transform rounded-lg dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-gray-200 hover:text-gray-700">
                            <FontAwesomeIcon class="transform rounded-lg w-5 h-5" icon={faCartShopping} />
                            <div tabIndex={5} class="collapse collapse-arrow">
                                <input class="collapse" type="checkbox" />
                                <span class="collapse-title text-sm font-medium">Blog</span>
                                <a href="#" class="collapse-content text-sm cursor-pointer">Test 5</a>
                            </div>
                        </div>                            <div class="flex items-center h-min px-3 text-gray-600 transition-colors transform rounded-lg dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-gray-200 hover:text-gray-700">
                            <FontAwesomeIcon class="transform rounded-lg w-5 h-5" icon={faBook} />
                            <div tabIndex={6} class="collapse collapse-arrow">
                                <input class="collapse" type="checkbox" />
                                <span class="collapse-title text-sm font-medium">Social</span>
                                <a href="#" class="collapse-content text-sm cursor-pointer">Test 6</a>
                            </div>
                        </div>
                    </div>
                </nav>
            </div>
        </aside>
    );
}

export default LeftSideBar;