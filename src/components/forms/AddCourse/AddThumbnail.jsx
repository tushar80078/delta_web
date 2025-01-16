import { useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";
import { ArrowUpRightFromSquare } from "lucide-react";
import { FaFileImage } from "react-icons/fa";

const AddThumbnail = ({ setThumbnailImage }) => {
    const [fileUrl, setFileUrl] = useState(null);
    const fileInputRef = useRef(null);

    const handleFileSelect = (event) => {
        const selectedFile = event.target.files[0];
        if (selectedFile) {
            setThumbnailImage(selectedFile); // Update parent state
            const url = URL.createObjectURL(selectedFile);
            setFileUrl(url);
        }
    };

    const handleAddThumbnailClick = () => {
        if (fileInputRef.current) {
            fileInputRef.current.click();
        }
    };

    return (
        <div className="mt-4 flex flex-col gap-4">
            <input
                type="file"
                ref={fileInputRef}
                style={{ display: "none" }}
                onChange={handleFileSelect}
            />

            <div className="flex gap-2">
                <Button onClick={handleAddThumbnailClick} className="flex items-center gap-2">
                    <Plus />
                    Add Thumbnail
                </Button>

                {fileUrl && (
                    <div className="flex w-full justify-between border rounded-md px-2 py-1 items-center">
                        <div className="flex items-center gap-2">
                            <FaFileImage size={20} className="fill-orange-400" />
                            <span
                                className="truncate max-w-xs text-sm"
                                title="Thumbnail Image"
                            >
                                {fileUrl.split('/').pop()}
                            </span>
                        </div>

                        <a
                            href={fileUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            title="Open"
                            className="text-sky-600 flex items-center"
                        >
                            <ArrowUpRightFromSquare className="h-5 w-6" />
                        </a>
                    </div>
                )}
            </div>
        </div>
    );
};

export default AddThumbnail;
