import { faFilePdf } from "../../node_modules/@fortawesome/free-solid-svg-icons/index";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function LatestFiles() {
    return (
        <div className="pt-10 bg-base-200 w-full max-w-md mx-auto">
            <h3 className="text-xl font-bold sm:px-3">Latest Files</h3>

            <div className="flex flex-col gap-y-4 mt-4">
                {[
                    { size: "5.6 MB", time: "Just now", user: "Karina Clark" },
                    { size: "2.3 MB", time: "59 minutes ago", user: "Marcus Blake" },
                    { size: "4.6 MB", time: "12 hours ago", user: "Terry Barry" },
                    { size: "1.2 MB", time: "Today, 11.59 AM", user: "Roth Bloom" },
                    { size: "2.8 MB", time: "Yesterday", user: "Natali Craig" },
                ].map((file, index) => (
                    <a
                        key={index}
                        className="flex flex-row sm:px-7 items-start gap-3"
                        href="#"
                    >
                        <FontAwesomeIcon className="w-5 h-5" icon={faFilePdf} />
                        <div className="flex flex-col">
                            <p className="text-sm">Project Tech requirements.pdf</p>
                            <span className="text-xs text-gray-400">
                                {file.size} / {file.time} / {file.user}
                            </span>
                        </div>
                    </a>
                ))}
            </div>
        </div>
    );
}

export default LatestFiles;
