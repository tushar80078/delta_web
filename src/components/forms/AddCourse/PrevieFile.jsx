import { ArrowUpRightFromSquare, Trash } from "lucide-react";
import { FaFileImage } from 'react-icons/fa';


export const AddAttachment = ({
    item,
    onClose,
}) => {
    console.log('item', item)
    const fileName = item.name || item.fileUrl.split('<file_name>')[1];
    const downloadUrl = `${item.fileUrl}`;

    return (
        <div key={item.fileUrl} className="flex w-full justify-between ">
            <a
                // href={item.fileUrl}
                // target="_blank"
                // rel="noopener noreferrer"
                className=" w-full  border rounded-md  group relative flex px-2 py-2 items-center ">
                <div className="flex justify-center items-center ">

                    <FaFileImage size={20} className="fill-orange-400" />

                </div>

                <div className=" flex items-center justify-center">
                    <span className="truncate max-w-xs px-2 text-sm relative" title={fileName}>
                        {fileName}
                    </span>
                </div>

                {/* Open in new tab button */}
                <div className="flex justify-end  flex-1 items-end ">
                    <a
                        href={downloadUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        // download
                        title="Open"
                        className="mr-3 cursor-pointer text-slate-700 rounded-md text-xs group-hover:visible">
                        <ArrowUpRightFromSquare className="h-5 w-6 text-sky-600" />
                    </a>
                    {onClose && (
                        <button
                            title="Close"
                            onClick={onClose}
                            className=" bottom-2 right-10 cursor-pointer text-slate-700 rounded-md text-xs group-hover:visible">
                            <Trash className="h-6 w-6 text-rose-500" />
                        </button>
                    )}
                </div>
            </a>
        </div>
    );
};
