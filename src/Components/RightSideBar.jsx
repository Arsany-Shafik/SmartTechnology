import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function RightSideBar() {
    return (
        <aside className="w-45 bg-base-200 p-4">
            <h3 className="text-black !font-normal">Notifications</h3>
            <a class="flex flex-row py-5 items-start gap-3" href="#">
                <img class="w-auto h-7 rounded-full outline-black outline-2 outline-offset-2 outline-solid" src="/personimg.png" alt="" />
                <div class="flex flex-col">
                    <p class="text-sm">You fixed a bug</p>
                    <span class="text-xs text-gray-400">just now</span>
                </div>
            </a>
            <a class="flex flex-row py-5 items-start gap-3" href="#">
                <img class="w-auto h-7 rounded-full outline-black outline-2 outline-offset-2 outline-solid" src="/personimg.png" alt="" />
                <div class="flex flex-col">
                    <p class="text-sm">New user reegistered</p>
                    <span class="text-xs text-gray-400">59 minuttes ago</span>
                </div>
            </a>
            <a class="flex flex-row py-5 items-start gap-3" href="#">
                <img class="w-auto h-7 rounded-full outline-black outline-2 outline-offset-2 outline-solid" src="/personimg.png" alt="" />
                <div class="flex flex-col">
                    <p class="text-sm">You fixed a bug</p>
                    <span class="text-xs text-gray-400">12 hours ago</span>
                </div>
            </a>
            <a class="flex flex-row py-5 items-start gap-3" href="#">
                <img class="w-auto h-7 rounded-full outline-black outline-2 outline-offset-2 outline-solid" src="/personimg.png" alt="" />
                <div class="flex flex-col">
                    <p class="text-sm">Andi lane subscribed to you</p>
                    <span class="text-xs text-gray-400">Today, 11.59 Am</span>
                </div>
            </a>
            <h3 className="text-black !font-normal">Activiities</h3>
            <a class="flex flex-row py-5 items-start gap-3" href="#">
                <img class="w-auto h-7 rounded-full outline-black outline-2 outline-offset-2 outline-solid" src="/personimg.png" alt="" />
                <div class="flex flex-col">
                    <p class="text-sm">Changed the style</p>
                    <span class="text-xs text-gray-400">just now</span>
                </div>
            </a>
            <a class="flex flex-row py-5 items-start gap-3" href="#">
                <img class="w-auto h-7 rounded-full outline-black outline-2 outline-offset-2 outline-solid" src="/personimg.png" alt="" />
                <div class="flex flex-col">
                    <p class="text-sm">Released a new version</p>
                    <span class="text-xs text-gray-400">59 minuttes ago</span>
                </div>
            </a>
            <a class="flex flex-row py-5 items-start gap-3" href="#">
                <img class="w-auto h-7 rounded-full outline-black outline-2 outline-offset-2 outline-solid" src="/personimg.png" alt="" />
                <div class="flex flex-col">
                    <p class="text-sm">Submitted a bug</p>
                    <span class="text-xs text-gray-400">12 hours ago</span>
                </div>
            </a>
            <a class="flex flex-row py-5 items-start gap-3" href="#">
                <img class="w-auto h-7 rounded-full outline-black outline-2 outline-offset-2 outline-solid" src="/personimg.png" alt="" />
                <div class="flex flex-col">
                    <p class="text-sm">Modified A data in Page X</p>
                    <span class="text-xs text-gray-400">Today, 11.59 Am</span>
                </div>
            </a>
            <a class="flex flex-row py-5 items-start gap-3" href="#">
                <img class="w-auto h-7 rounded-full outline-black outline-2 outline-offset-2 outline-solid" src="/personimg.png" alt="" />
                <div class="flex flex-col">
                    <p class="text-sm">Modified A data in Project X</p>
                    <span class="text-xs text-gray-400">Feb 2, 2025</span>
                </div>
            </a>
            <h3 className="text-black !font-normal">Contacts</h3>
            <a class="flex flex-row py-5 items-start gap-3" href="#">
                <img class="w-auto h-7 rounded-full outline-black outline-2 outline-offset-2 outline-solid" src="https://img.daisyui.com/images/profile/demo/batperson@192.webp" alt="" />
                <div class="flex flex-col">
                    <p class="text-sm">Natali Cralg</p>
                </div>
            </a>
            <a class="flex flex-row py-5 items-start gap-3" href="#">
                <img class="w-auto h-7 rounded-full outline-black outline-2 outline-offset-2 outline-solid" src="https://img.daisyui.com/images/profile/demo/averagebulk@192.webp" alt="" />
                <div class="flex flex-col">
                    <p class="text-sm">Drew Cano</p>
                </div>
            </a>
            <a class="flex flex-row py-5 items-start gap-3" href="#">
                <img class="w-auto h-7 rounded-full outline-black outline-2 outline-offset-2 outline-solid" src="/personimg.png" alt="" />
                <div class="flex flex-col">
                    <p class="text-sm">Andi Lane</p>
                </div>
            </a>
            <a class="flex flex-row py-5 items-start gap-3" href="#">
                <img class="w-auto h-7 rounded-full outline-black outline-2 outline-offset-2 outline-solid" src="https://img.daisyui.com/images/profile/demo/spiderperson@192.webp" alt="" />
                <div class="flex flex-col">
                    <p class="text-sm">Koray Okumus</p>
                </div>
            </a>
            <a class="flex flex-row py-5 items-start gap-3" href="#">
                <img class="w-auto h-7 rounded-full outline-black outline-2 outline-offset-2 outline-solid" src="/personimg.png" alt="" />
                <div class="flex flex-col">
                    <p class="text-sm">Kate Morrison</p>
                </div>
            </a>
            <a class="flex flex-row py-5 items-start gap-3" href="#">
                <img class="w-auto h-7 rounded-full outline-black outline-2 outline-offset-2 outline-solid" src="/personimg.png" alt="" />
                <div class="flex flex-col">
                    <p class="text-sm">Melody Macy</p>
                </div>
            </a>
        </aside>
    );
}

export default RightSideBar;