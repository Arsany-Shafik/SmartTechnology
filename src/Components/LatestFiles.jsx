import { faFilePdf } from "../../node_modules/@fortawesome/free-solid-svg-icons/index";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


function LatestFiles() {
    return (
        <div className="p-7 pt-10 bg-base-200">
            <h3 className="text-xl font-bold">Latest Files</h3>
            <a class="flex flex-row pt-5 px-7 items-start gap-3" href="#">
                <FontAwesomeIcon class="transform rounded-lg w-5 h-5" icon={faFilePdf} />
                <div class="flex flex-col">
                    <p class="text-sm">Project Tech requirements.pdf</p>
                    <span class="text-xs text-gray-400">5.6 MB / Just now / Karina Clark</span>
                </div>
            </a>
            <a class="flex flex-row pt-5 px-7 items-start gap-3" href="#">
                <FontAwesomeIcon class="transform rounded-lg w-5 h-5" icon={faFilePdf} />
                <div class="flex flex-col">
                    <p class="text-sm">Project Tech requirements.pdf</p>
                    <span class="text-xs text-gray-400">2.3 MB / 59 minutes ago / Marcus blake</span>
                </div>
            </a>
            <a class="flex flex-row pt-5 px-7 items-start gap-3" href="#">
                <FontAwesomeIcon class="transform rounded-lg w-5 h-5" icon={faFilePdf} />
                <div class="flex flex-col">
                    <p class="text-sm">Project Tech requirements.pdf</p>
                    <span class="text-xs text-gray-400">4.6 MB / 12 hours ago / Terry Barry</span>
                </div>
            </a>
            <a class="flex flex-row pt-5 px-7 items-start gap-3" href="#">
                <FontAwesomeIcon class="transform rounded-lg w-5 h-5" icon={faFilePdf} />
                <div class="flex flex-col">
                    <p class="text-sm">Project Tech requirements.pdf</p>
                    <span class="text-xs text-gray-400">1.2 MB / Today, 11.59 AM / Roth Bloom</span>
                </div>
            </a>
            <a class="flex flex-row pt-5 px-7 items-start gap-3" href="#">
                <FontAwesomeIcon class="transform rounded-lg w-5 h-5" icon={faFilePdf} />
                <div class="flex flex-col">
                    <p class="text-sm">Project Tech requirements.pdf</p>
                    <span class="text-xs text-gray-400">2.8 MB / Yesterday / Natali Craig</span>
                </div>
            </a>
        </div>
    );
}

export default LatestFiles;