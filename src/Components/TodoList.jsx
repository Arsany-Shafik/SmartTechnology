function TodoList() {

    const days = Array.from({ length: 7 }, (_, i) => {
        const date = new Date();
        date.setDate(date.getDate() + i);
        return {
            dayNum: date.getDate(),
            dayName: date.toLocaleDateString("en-US", { weekday: "short" }), // Thu, Fri, etc.
        };
    });

    return (
        <div className="p-7 pt-10 bg-base-200">
            <h3 className="text-xl  font-bold">What's on the road?</h3>
            <div className="flex gap-3 p-4 bg-base-200 rounded-lg">
                {days.map((day, index) => (
                    <label key={index} className="cursor-pointer">
                        <input type="radio" name="day" className="hidden peer" defaultChecked={index === 0} />
                        <div className="peer-checked:bg-black peer-checked:text-white rounded-lg bg-white shadow text-center px-4 py-2 w-15">
                            <div className="text-base font-semibold">{day.dayName}</div>
                            <div className="text-base">{day.dayNum}</div>
                        </div>
                    </label>
                ))}
            </div>
            <a class="flex flex-row pt-5 px-7 items-start gap-3" href="#">
                <img class="w-auto h-7 rounded-full outline-black outline-2 outline-offset-2 outline-solid" src="/personimg.png" alt="" />
                <div class="flex flex-col">
                    <p class="">You have a bug that needs to be fixed.</p>
                    <span class="text-sm text-gray-400">just now</span>
                </div>
            </a>
            <a class="flex flex-row pt-2 px-7 items-start gap-3" href="#">
                <img class="w-auto h-7 rounded-full outline-black outline-2 outline-offset-2 outline-solid" src="https://img.daisyui.com/images/profile/demo/batperson@192.webp" alt="" />
                <div class="flex flex-col">
                    <p class="">Released a new version</p>
                    <span class="text-sm text-gray-400">59 minutes ago</span>
                </div>
            </a>
            <a class="flex flex-row pt-2 px-7 items-start gap-3" href="#">
                <img class="w-auto h-7 rounded-full outline-black outline-2 outline-offset-2 outline-solid" src="https://img.daisyui.com/images/profile/demo/averagebulk@192.webp" alt="" />
                <div class="flex flex-col">
                    <p class="">Submitted a bug</p>
                    <span class="text-sm text-gray-400">12 hours ago</span>
                </div>
            </a>
            <a class="flex flex-row pt-2 px-7 items-start gap-3" href="#">
                <img class="w-auto h-7 rounded-full outline-black outline-2 outline-offset-2 outline-solid" src="/personimg.png" alt="" />
                <div class="flex flex-col">
                    <p class="">Modified A data in Page X</p>
                    <span class="text-sm text-gray-400">Today, 11.59 Am</span>
                </div>
            </a>
            <a class="flex flex-row pt-2 px-7 items-start gap-3" href="#">
                <img class="w-auto h-7 rounded-full outline-black outline-2 outline-offset-2 outline-solid" src="https://img.daisyui.com/images/profile/demo/spiderperson@192.webp" alt="" />
                <div class="flex flex-col">
                    <p class="">Modified A data in Project X</p>
                    <span class="text-sm text-gray-400">Feb 2, 2025</span>
                </div>
            </a>
        </div>
    );
}

export default TodoList;