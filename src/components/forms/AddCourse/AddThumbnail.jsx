import { useCallback, useRef, useState } from 'react'
import { Button } from '@/components/ui/button';
import { Plus } from 'lucide-react';
import { AddAttachment } from './PrevieFile';

const AddThumbnail = () => {
    const [file, setFile] = useState(null);
    const fileInputRef = useRef(null);

    const handleFileSelect = (event) => {
        const selectedFile = event.target.files[0];
        setFile(selectedFile);
    };

    const handleAddThumbnailClick = () => {
        if (fileInputRef.current) {
            fileInputRef.current.click();
        }
    };



    const fileUrl = useCallback(() => {
        if (file) {
            URL.createObjectURL(file);
        }
    }, [file])
    // const fileType = file.type.split('/')[0];


    return (
        <div className="mt-4 flex gap-4">

            <input
                type="file"
                ref={fileInputRef}
                style={{ display: "none" }}
                onChange={handleFileSelect}
            />

            <Button onClick={handleAddThumbnailClick}>
                <Plus />
                Add Thumbnail
            </Button>

            {
                file && <AddAttachment
                    key={fileUrl}
                    item={{ fileUrl, name: file.name }}
                />
            }


        </div>
    )
}

export default AddThumbnail